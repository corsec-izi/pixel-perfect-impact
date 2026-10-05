import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, BarChart3, BookOpen, CalendarDays, FileText, Globe2, HandHeart, Heart, Home, MapPin, Menu, Package, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImpactMap } from "@/components/ImpactMap";
import { filterRecords, impactRecords, summarizeRecords, YEAR_FILTERS, type YearFilter } from "@/lib/impact-data";

const DONATION_URL = "https://zakatpedia.com/programs/sedekah-makanan-untuk-gaza-palestina";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Peluk Palestina — Jejak Kemanusiaan IZI" },
    { name: "description", content: "Jelajahi peta aksi dan dampak program kemanusiaan LAZNAS IZI untuk Palestina sepanjang 2023–2026." },
    { property: "og:title", content: "Peluk Palestina — Jejak Kemanusiaan IZI" },
    { property: "og:description", content: "Jelajahi peta aksi dan dampak program kemanusiaan LAZNAS IZI untuk Palestina sepanjang 2023–2026." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const navigation = [
  { label: "Beranda", href: "#beranda", icon: Home },
  { label: "Peta Aksi", href: "#peta-aksi", icon: MapPin },
  { label: "Data Program", href: "#data-program", icon: BarChart3 },
  { label: "Cerita", href: "#cerita", icon: BookOpen },
  { label: "Laporan", href: "#laporan", icon: FileText },
];

function DonationLink({ compact = false }: { compact?: boolean }) {
  return <Button variant="donation" asChild size={compact ? "sm" : "default"}><a href={DONATION_URL} target="_blank" rel="noopener noreferrer"><Heart fill="currentColor" />Donasi<ArrowUpRight /></a></Button>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState<YearFilter>("All");
  const records = useMemo(() => filterRecords(year), [year]);
  const summary = useMemo(() => summarizeRecords(records), [records]);
  const locationRows = useMemo(() => {
    const rows = new Map<string, number>();
    records.forEach((record) => rows.set(record.location, (rows.get(record.location) ?? 0) + 1));
    return [...rows].sort((a, b) => b[1] - a[1]);
  }, [records]);
  const programRows = useMemo(() => {
    const rows = new Map<string, number>();
    records.forEach((record) => rows.set(record.program, (rows.get(record.program) ?? 0) + 1));
    return [...rows].sort((a, b) => b[1] - a[1]);
  }, [records]);

  const stats = [
    { label: "Total Aksi Program", value: summary.actionCount, icon: HandHeart, tone: "text-primary", background: "bg-success-soft" },
    { label: "Penerima Manfaat", value: summary.beneficiaries, icon: Users, tone: "text-coral", background: "bg-coral/10" },
    { label: "Paket Tersalurkan", value: summary.packages, icon: Package, tone: "text-info", background: "bg-info/10" },
    { label: "Negara / Wilayah", value: summary.countries, icon: Globe2, tone: "text-foreground", background: "bg-secondary" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-sidebar-border bg-sidebar px-4 text-sidebar-foreground lg:hidden">
        <a href="#beranda" className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-full bg-sidebar-primary text-xs font-extrabold text-sidebar-primary-foreground">IZI</span><span className="font-display text-sm font-bold">Peluk Palestina</span></a>
        <Button variant="ghost" size="icon" aria-label={menuOpen ? "Tutup menu" : "Buka menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
      </header>
      {menuOpen && <div className="fixed inset-0 top-16 z-30 bg-hero/75 lg:hidden" onClick={() => setMenuOpen(false)} />}
      <aside className={`fixed bottom-0 left-0 top-16 z-40 flex w-64 flex-col border-r border-sidebar-border bg-sidebar px-4 py-6 text-sidebar-foreground transition-transform lg:top-0 lg:w-60 lg:translate-x-0 lg:py-8 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <a href="#beranda" className="mb-10 hidden items-center gap-3 px-2 lg:flex"><span className="grid size-12 place-items-center rounded-full bg-sidebar-primary font-display text-base font-extrabold text-sidebar-primary-foreground">IZI</span><span className="text-[10px] font-bold leading-tight">INISIATIF ZAKAT<br />INDONESIA</span></a>
        <nav className="space-y-1" aria-label="Navigasi utama">{navigation.map(({ label, href, icon: Icon }) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"><Icon className="size-[18px]" />{label}</a>)}</nav>
        <DonationLink />
        <div className="mt-auto border-t border-sidebar-border pt-6"><p className="font-display text-xl font-bold leading-snug">Dari Indonesia<br />untuk Palestina.</p><span className="mt-4 block h-1 w-10 bg-sidebar-primary" /></div>
      </aside>

      <main className="lg:ml-60">
        <section id="beranda" className="relative overflow-hidden bg-hero px-5 py-12 text-hero-foreground sm:px-8 lg:px-12 lg:py-14 xl:px-16">
          <div className="absolute inset-y-0 right-0 w-2/5 border-l border-hero-foreground/10 opacity-40 [background-image:linear-gradient(var(--hero-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--hero-foreground)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="relative z-10 max-w-3xl"><div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-primary"><span className="h-0.5 w-8 bg-primary" />Jejak Kemanusiaan IZI</div><h1 className="font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">Peluk Palestina<span className="text-primary">.</span></h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-hero-foreground/75">Transparansi aksi kemanusiaan dari masyarakat Indonesia untuk menghadirkan pangan, kesehatan, perlindungan, dan harapan bagi Palestina.</p><div className="mt-7 flex flex-wrap items-center gap-3"><span className="rounded-full border border-hero-foreground/25 px-4 py-2 text-xs font-bold">2023 — 2026</span><DonationLink /></div></div>
        </section>

        <div className="mx-auto max-w-[1580px] space-y-5 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Dampak terukur</p><h2 className="mt-1 font-display text-2xl font-extrabold">Ringkasan {year === "All" ? "seluruh periode" : `tahun ${year}`}</h2></div><p className="text-xs text-muted-foreground">Diperbarui sesuai filter peta</p></div>
          <section aria-label="Ringkasan dampak" className="grid grid-cols-2 gap-3 xl:grid-cols-4">{stats.map(({ label, value, icon: Icon, tone, background }) => <article key={label} className="flex min-h-28 items-center gap-3 rounded-md border border-border bg-card p-4 shadow-sm sm:gap-4"><span className={`grid size-11 shrink-0 place-items-center rounded-full ${background} ${tone}`}><Icon className="size-5" /></span><div className="min-w-0"><strong className={`block font-display text-2xl font-extrabold leading-none sm:text-3xl ${tone}`}>{value.toLocaleString("id-ID")}</strong><span className="mt-1.5 block text-xs font-bold leading-snug sm:text-sm">{label}</span></div></article>)}</section>

          <section id="peta-aksi" className="scroll-mt-20">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Sebaran bantuan</p><h2 className="mt-1 font-display text-xl font-extrabold">Peta Aksi Kemanusiaan</h2></div></div>
            <div className="grid overflow-hidden rounded-md border border-border bg-card shadow-sm xl:grid-cols-[minmax(0,1fr)_300px]">
              <div className="relative min-w-0 p-2">
                <div className="absolute right-5 top-5 z-20 flex max-w-[calc(100%-2.5rem)] overflow-x-auto rounded-md border border-border bg-card p-1 shadow-sm" role="group" aria-label="Filter tahun">{YEAR_FILTERS.map((item) => <Button key={item} variant={year === item ? "filterActive" : "filter"} onClick={() => setYear(item)} aria-pressed={year === item}>{item}</Button>)}</div>
                <ImpactMap records={records} selectedYear={year} />
              </div>
              <aside className="border-t border-border p-5 xl:border-l xl:border-t-0"><div className="flex items-center gap-2"><MapPin className="size-5 text-primary" /><h3 className="font-display font-extrabold">Lokasi Aksi</h3></div><p className="mt-1 text-xs text-muted-foreground">{locationRows.length} wilayah aktif • {year === "All" ? "2023–2026" : year}</p><div className="mt-5 space-y-1">{locationRows.map(([location, actions], index) => <div key={location} className="flex items-center justify-between gap-3 border-b border-border py-3 last:border-0"><div className="flex min-w-0 items-center gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-success-soft text-xs font-extrabold text-primary">{index + 1}</span><span className="truncate text-sm font-bold">{location}</span></div><span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-xs font-bold">{actions} aksi</span></div>)}</div></aside>
            </div>
          </section>

          <div id="data-program" className="grid scroll-mt-20 gap-5 lg:grid-cols-2">
            <section className="rounded-md border border-border bg-card p-5 shadow-sm"><div className="flex items-center gap-2"><BarChart3 className="size-5 text-primary" /><h2 className="font-display font-extrabold">Distribusi Program</h2></div><div className="mt-4 space-y-3">{programRows.map(([program, count]) => <div key={program}><div className="mb-1.5 flex justify-between text-sm"><span className="font-semibold">{program}</span><strong>{count} aksi</strong></div><div className="h-1.5 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${Math.max(8, (count / Math.max(...programRows.map((row) => row[1]))) * 100)}%` }} /></div></div>)}</div></section>
            <section className="rounded-md border border-border bg-card p-5 shadow-sm"><div className="flex items-center gap-2"><CalendarDays className="size-5 text-primary" /><h2 className="font-display font-extrabold">Tahun Penyaluran</h2></div><div className="mt-4 grid grid-cols-2 gap-3">{YEAR_FILTERS.slice(0, 4).map((item) => { const count = filterRecords(item).length; return <Button key={item} variant={year === item ? "filterActive" : "outline"} className="h-auto justify-between p-4" onClick={() => setYear(item)}><span className="text-base">{item}</span><span>{count} aksi</span></Button>; })}</div></section>
          </div>

          <section id="cerita" className="scroll-mt-20 border-t border-border py-8"><div className="grid gap-5 lg:grid-cols-3"><div><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Cerita dampak</p><h2 className="mt-2 font-display text-2xl font-extrabold">Bantuan yang menjangkau mereka yang membutuhkan.</h2></div><p className="text-sm leading-relaxed text-muted-foreground lg:col-span-2">Setiap angka mewakili keluarga yang menerima dukungan. Data interaktif ini merangkum {impactRecords.length} aksi penyaluran di Palestina dan negara sekitar selama empat tahun.</p></div></section>
          <div className="grid gap-5 border-t border-border py-7 md:grid-cols-2"><section id="laporan" className="scroll-mt-20"><div className="flex items-center gap-2"><FileText className="size-5 text-primary" /><h2 className="font-display font-extrabold">Laporan</h2></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Tercatat {summary.actionCount.toLocaleString("id-ID")} aksi dengan {summary.beneficiaries.toLocaleString("id-ID")} penerima manfaat pada pilihan periode saat ini.</p></section><section><div className="flex items-center gap-2"><HandHeart className="size-5 text-primary" /><h2 className="font-display font-extrabold">Tentang Program</h2></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Peluk Palestina adalah ruang transparansi untuk melihat lokasi, program, dan skala manfaat aksi kemanusiaan LAZNAS IZI.</p></section></div>
          <footer className="flex flex-col gap-4 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm font-semibold text-muted-foreground">Peluk Palestina • LAZNAS IZI</p><DonationLink compact /></footer>
        </div>
      </main>
    </div>
  );
}