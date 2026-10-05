import { useEffect, useRef, useState } from "react";
import { Expand, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCompactBeneficiaries, type ImpactRecord, type YearFilter } from "@/lib/impact-data";
import type * as maplibregl from "maplibre-gl";
import mapWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?url";

type LocationGroup = {
  name: string;
  latitude: number;
  longitude: number;
  records: ImpactRecord[];
};

function groupRecords(records: ImpactRecord[]) {
  const grouped = new Map<string, LocationGroup>();
  for (const record of records) {
    const current = grouped.get(record.location);
    if (current) current.records.push(record);
    else grouped.set(record.location, { name: record.location, latitude: record.latitude, longitude: record.longitude, records: [record] });
  }
  return [...grouped.values()];
}

function popupContent(group: LocationGroup) {
  const root = document.createElement("div");
  root.className = "impact-popup";
  const packages = group.records.reduce((sum, item) => sum + item.packages, 0);
  const beneficiaries = group.records.reduce((sum, item) => sum + item.beneficiaries, 0);
  const eyebrow = document.createElement("span");
  eyebrow.className = "impact-popup__eyebrow";
  eyebrow.textContent = `${beneficiaries.toLocaleString("id-ID")} penerima manfaat`;
  const title = document.createElement("strong");
  title.className = "impact-popup__title";
  title.textContent = group.name;
  const program = document.createElement("p");
  program.textContent = [...new Set(group.records.map((item) => item.program))].join(", ");
  const metrics = document.createElement("div");
  metrics.className = "impact-popup__metrics";
  metrics.innerHTML = `<span><b>${group.records.length.toLocaleString("id-ID")}</b>Aksi</span><span><b>${packages.toLocaleString("id-ID")}</b>Paket</span><span><b>${beneficiaries.toLocaleString("id-ID")}</b>Penerima</span>`;
  const link = document.createElement("a");
  link.className = "impact-popup__link";
  link.href = group.records[0]?.documentationUrl ?? "https://izi.or.id/";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Lihat Dokumentasi ↗";
  root.append(eyebrow, title, program, metrics, link);
  return root;
}

export function ImpactMap({ records, selectedYear }: { records: ImpactRecord[]; selectedYear: YearFilter }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);
  const mapModuleRef = useRef<typeof import("maplibre-gl") | null>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    let disposed = false;
    import("maplibre-gl").then((maplibre) => {
      if (disposed || !containerRef.current) return;
      maplibre.setWorkerUrl(mapWorkerUrl);
      mapModuleRef.current = maplibre;
      const map = new maplibre.Map({
        container: containerRef.current,
        style: "https://tiles.openfreemap.org/styles/positron",
        center: [34.8, 31.5],
        zoom: 5.5,
        minZoom: 2,
        maxZoom: 15,
        attributionControl: false,
      });
      map.addControl(new maplibre.AttributionControl({ compact: true }), "bottom-left");
      mapRef.current = map;
      map.once("load", () => setMapReady(true));
    });
    return () => {
      disposed = true;
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      mapRef.current?.remove();
      mapRef.current = null;
      setMapReady(false);
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const maplibre = mapModuleRef.current;
    if (!map || !maplibre || !mapReady) return;
    const renderMarkers = () => {
      markersRef.current.forEach((marker) => marker.remove());
      const groups = groupRecords(records);
      markersRef.current = groups.map((group) => {
        const beneficiaries = group.records.reduce((sum, item) => sum + item.beneficiaries, 0);
        const marker = document.createElement("button");
        marker.type = "button";
        marker.className = "impact-marker";
        marker.setAttribute("aria-label", `${group.name}, ${beneficiaries.toLocaleString("id-ID")} penerima manfaat`);
        marker.innerHTML = `<span>${formatCompactBeneficiaries(beneficiaries)}</span>`;
        const popup = new maplibre.Popup({ offset: 24, closeButton: true, maxWidth: "290px" }).setDOMContent(popupContent(group));
        return new maplibre.Marker({ element: marker, anchor: "bottom" }).setLngLat([group.longitude, group.latitude]).setPopup(popup).addTo(map);
      });
      if (groups.length > 0) {
        const bounds = new maplibre.LngLatBounds();
        groups.forEach((group) => bounds.extend([group.longitude, group.latitude]));
        // Cancel any camera animation still in flight before resizing/refitting.
        // Resizing the canvas while a flyTo/fitBounds animation is mid-flight
        // leaves part of the canvas unrendered (a torn, partially gray map),
        // so we always stop first and resize right before starting the new one.
        map.stop();
        map.resize();
        map.fitBounds(bounds, { padding: { top: 90, right: 70, bottom: 70, left: 70 }, maxZoom: selectedYear === "All" ? 6.2 : 7.2, duration: 700 });
      }
    };
    // Wait a tick for the surrounding layout (stat cards, filter pills) to
    // settle after the filter change, then resize and re-fit on the next
    // animation frame so the canvas matches the final container size before
    // we start the fly animation.
    const resizeTimer = setTimeout(() => {
      requestAnimationFrame(() => {
        map.resize();
        renderMarkers();
      });
    }, 150);
    return () => clearTimeout(resizeTimer);
  }, [mapReady, records, selectedYear]);

  // Re-measure whenever the container element itself changes size (e.g. the
  // surrounding layout reflows when stat cards or filters change height).
  useEffect(() => {
    const map = mapRef.current;
    if (!containerRef.current || !map) return;
    const observer = new ResizeObserver(() => {
      // Never resize mid-animation: it corrupts the canvas (partially blank/
      // gray tiles) because the in-flight camera transform and the resize
      // fight over the same frame. Defer to right after the animation ends.
      if (map.isMoving()) {
        map.once("moveend", () => map.resize());
        return;
      }
      map.resize();
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [mapReady]);

  return (
    <div className="relative h-[480px] overflow-hidden rounded-md bg-muted lg:h-[520px]">
      <div ref={containerRef} className="absolute inset-0" aria-label="Peta interaktif lokasi aksi kemanusiaan IZI" />
      <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-1">
        <Button variant="map" size="icon" aria-label="Perbesar peta" title="Perbesar" onClick={() => mapRef.current?.zoomIn()}><Plus /></Button>
        <Button variant="map" size="icon" aria-label="Perkecil peta" title="Perkecil" onClick={() => mapRef.current?.zoomOut()}><Minus /></Button>
        <Button variant="map" size="icon" aria-label="Layar penuh" title="Layar penuh" onClick={() => { const mapContainer = containerRef.current?.parentElement; if (!document.fullscreenElement) mapContainer?.requestFullscreen?.(); else document.exitFullscreen(); setTimeout(() => mapRef.current?.resize(), 200); }}><Expand /></Button>
      </div>
      <div className="absolute bottom-4 left-4 z-10 rounded-md border border-border bg-card/95 px-3 py-2 text-xs font-semibold text-foreground shadow-sm">
        <span className="mr-2 inline-block size-2.5 rounded-full bg-primary" />Jumlah penerima manfaat per wilayah
      </div>
    </div>
  );
}
