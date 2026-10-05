# Pixel Perfect Impact

@connector:github:"GitHub API" 

https://github.com/corsec-izi/pixel-perfect-implementation

Tolong lanjutkan project dari repository ini dan lakukan revisi berikut:

1. TEMA WARNA & ESTETIKA (MAKE IT CORPORATE & MODERN):

   - Ubah warna latar belakang web dari krem/kusam (#F4F1EA) menjadi Off-White bersih (#F8FAFC atau #FFFFFF).

   - Gunakan palet warna corporate resmi IZI:

     * Hijau Utama IZI: #83BC00 (untuk aksen tombol, badge, dan highlight).

     * Hijau Gelap / Slate: #1A2E1A atau #0F172A (untuk Sidebar dan Hero Card).

     * Card Background: Putih bersih (#FFFFFF) dengan subtle border (#E2E8F0) dan soft shadow (shadow-sm).

2. PETA INTERAKTIF & FILTER TAHUN (MAP MARKERS & INTERACTIVITY):

   - Ubah peta statis menjadi peta interaktif asli (Leaflet / Mapbox CartoDB Positron).

   - Tampilkan Custom Pin Marker pada setiap titik wilayah (Gaza City, Gaza Utara, Deir El Balah, Khan Younis, Rafah, Camp Yordania, Mesir, Lebanon).

   - Pada setiap titik marker di peta, tampilkan "Badge Angka / Counter" yang menunjukkan jumlah total aksi di titik tersebut.

   - Tambahkan Floating Toggle Filter di pojok kanan atas peta berupa tombol tab: 

     [ 2023 | 2024 | 2025 | 2026 | All ]

   - Ketika tombol tahun diklik:

     * Marker di peta menyaring (filter) data secara dinamis sesuai tahun yang dipilih.

     * Angka counter pada marker, daftar "Lokasi Aksi" di sebelah kanan peta, serta 4 Kartu Statistik Utama di atas otomatis memutakhirkan angkanya secara real-time.

   - Saat marker di peta diklik, tampilkan Popup Card yang berisi: Nama Wilayah, Jenis Program, Jumlah Paket, Penerima Manfaat, dan tombol "Lihat Dokumentasi".

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/64470f5e-efa8-4caf-b250-365fe7ae12f2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
