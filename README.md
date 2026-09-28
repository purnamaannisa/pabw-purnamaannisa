# PABW — Purnama Annisa — 25523279

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web.

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: Daftar film yang pernah saya tonton.

- Judul halaman: Daftar Film Favorit Saya
- Deskripsi: Daftar film yang pernah saya tonton beserta rating dan informasi rilisnya.
- Tautan navigasi: Daftar Film, Tambah Film, Kontak
- Dua bagian utama: Koleksi Film Pilihan, Tambah Film ke Daftar
- Kolom tabel: Judul Film, Sutradara, Tahun Rilis, Rating Saya
- Kolom form: Judul Film, Sutradara, Tahun Rilis
- Gambar: poster-film.webp

## Catatan penggunaan AI

Mendapatkan panduan struktur HTML dan langkah pengerjaan dari AI.


## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #BE185D (pink tua), dipilih karena memberikan kontras yang baik dengan latar terang dan aksen biru untuk fokus.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #BE185D | tombol, penanda |
| --color-fg | #111827 | warna teks utama |
| --color-bg | #F8FAFC | latar halaman |
| --color-focus | #2563EB | garis fokus |
| --text-md | 1.0625rem | ukuran teks isi utama |


## Pertemuan 5 — Layout Modern: Flexbox dan Grid

- Kerangka utama (.page) menggunakan Grid `grid-template-rows: auto 1fr auto` dengan `min-height: 100dvh`.
- Area isi menggunakan Grid `grid-template-columns: 16rem 1fr` (sidebar & konten).
- Galeri menggunakan Grid adaptif `repeat(auto-fit, minmax(16rem, 1fr))`.
- Navbar dan elemen internal kartu menggunakan Flexbox dengan `gap`.