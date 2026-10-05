# Revisi dashboard Peluk Palestina

## Ringkasan
Mengadaptasi halaman dari repository sumber ke project ini, lalu memperbarui tampilan menjadi corporate-modern IZI dan membuat seluruh data peta dapat difilter per tahun.

## Yang akan dibangun
- Memindahkan struktur halaman utama, navigasi, hero, kartu statistik, panel data, dan konten laporan dari repository sumber.
- Menerapkan palet IZI: off-white, hijau utama `#83BC00`, slate/hijau gelap, kartu putih dengan border halus dan shadow ringan.
- Menggunakan peta interaktif MapLibre dengan basemap CartoDB Positron dan kontrol zoom/fullscreen.
- Menambahkan marker custom ber-counter untuk delapan wilayah yang diminta.
- Menambahkan tab filter `2023 | 2024 | 2025 | 2026 | All` di kanan atas peta.
- Menyatukan sumber data agar filter memperbarui marker, daftar Lokasi Aksi, dan empat kartu statistik secara bersamaan.
- Menampilkan popup marker berisi wilayah, jenis program, jumlah paket, penerima manfaat, dan tombol dokumentasi.
- Menjaga tampilan rapi di desktop dan mobile serta melengkapi metadata halaman.

## Detail teknis
- Data contoh terstruktur akan disimpan di sisi halaman agar interaksi langsung berfungsi tanpa layanan tambahan.
- MapLibre dimuat setelah halaman tampil untuk menjaga kompatibilitas server rendering.
- Repository sumber tetap menjadi acuan struktur; project aktif tetap memakai TanStack Start yang sudah tersedia.
- Validasi akhir mencakup pemeriksaan hasil kompilasi serta interaksi filter dan popup di browser desktop/mobile.
