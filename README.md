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

## Pertemuan 8 — Membuat halaman profil yang Datanya Bergerak

## Catatan penggunaan AI
- untuk mencari tau cara mengecek di console.


# P9 — DOM, Event, dan Interaktivitas

## Ringkasan Pekerjaan
- Pemilihan & Pengisian Elemen: Mengambil elemen DOM dengan `querySelector` dan mengisi teks menggunakan `textContent` untuk keamanan XSS.
- Render dari Data: Membuat kartu galeri film secara dinamis menggunakan fungsi `render()` serta menangani kondisi array kosong (`if (daftar.length === 0)`).
- Event Delegation: Menggunakan satu event listener pada elemen induk `#filter` dengan memanfaatkan `evt.target.closest("button")` untuk mendeteksi filter yang diklik.
- Validasi Form: Memasang pola `pattern=".*[^\s].*"` pada HTML dan menggunakan `.trim()` pada JavaScript untuk mencegah input spasi saja.

## Deklarasi Penggunaan AI
Dalam pengerjaan proyek ini, saya menggunakan AI sebagai kawan berpikir untuk:
1. Membantu melacak kendala (debugging) logika pada fungsi `render()` dan penanganan kasus data kosong.
2. Memahami konsep keamanan `textContent` vs `innerHTML` serta efisiensi event delegation.


# P10: Katalog Film & Penanganan Galat API

Aplikasi web katalog film sederhana yang mengambil data dinamis dari berkas JSON menggunakan `fetch` API. Kode dibuat secara modular dan dilengkapi penanganan galat (error handling) agar aplikasi tetap stabil saat terjadi masalah data atau jaringan.

---

## Fitur Utama

- Fetch Data Asinkron: Mengambil data film secara dinamis dari berkas JSON (remote/lokal).
- Struktur Modular: Kode dipisah dengan jelas menjadi `api.js` (fungsi HTTP/fetch), `dom.js` (manipulasi UI/render), dan `app.js` (pengontrol alur aplikasi).
- Penanganan Status UI: Tampilan tetap stabil saat data berhasil dimuat, data kosong ("Belum ada data."), maupun saat koneksi jaringan terputus.
- Manajemen State: Menggunakan variabel `dataUtama` untuk menyimpan data master agar fungsi filter tidak menghilangkan data asli.

---

## Hasil Pengujian Edge Cases

1. Data Rusak (Malformed): Menggunakan pengecekan `Array.isArray()` agar aplikasi tidak crash jika format data JSON tidak sesuai.
2. Galat Jaringan (404/Offline): Ditangkap menggunakan `try...catch` dan pengecekan `response.ok`, sehingga pesan kesalahan yang jelas dapat ditampilkan pada layar.
3. Data Kosong (`[]`): Saat berkas JSON tidak memiliki data, tampilan galeri otomatis dibersihkan dan menampilkan pesan "Belum ada data.".

---

## Deklarasi Bantuan AI

- Peran AI (Gemini):
  - Memberikan panduan dan arahan langkah-langkah pengerjaan tugas Pertemuan 10.
  - Memberikan saran solusi untuk perbaikan kendala (troubleshooting) seperti masalah state mutation pada filter dan penanganan status eror 404/data kosong.
  - Memberikan referensi untuk membantu melengkapi poin-poin penjelasan pada lembar kerja.

- Dikerjakan Sendiri:
  - Menulis, menyusun, dan merapikan seluruh kode JavaScript pada VS Code (`api.js`, `dom.js`, dan `app.js`).
  - Melakukan simulasi pengujian secara langsung di browser menggunakan DevTools (mode Offline, HTTP 404, dan Disable Cache).
  - Mengisi dan melengkapi seluruh jawaban serta tabel pada lembar kerja (Worksheet Lembar E, F, dan H).
  - Mengelola repositori Git (eksekusi `git add`, `commit`, `push`, dan penyusunan bukti laporan).

---

## Cara Menjalankan

1. Clone repositori ini:
   ```bash
   git clone [https://github.com/purnamaannisa/pabw-purnamaannisa.git](https://github.com/purnamaannisa/pabw-purnamaannisa.git)


# P11 — Modul ES6, State Persistence, dan Error Handling

Dokumentasi pengerjaan praktikum Pertemuan 11 (SIF302) — Pengembangan Aplikasi Berbasis Web.

## Lingkungan Pengembangan (Environment)
- Node.js LTS version: v24.22.0
- npm version: 11.19.1

## Fitur dan Implementasi Utama
1. Modularisasi ES6: Program dipecah secara rapi ke dalam 5 modul di folder js/ (data.js, state.js, dom.js, events.js, app.js), ditambah modul js/api.js dari Pertemuan 10 dengan impor eksplisit berawalan ./ dan berakhiran .js[cite: 7].
2. Pemisahan State dan DOM: Seluruh keadaan aplikasi dikelola dalam objek state tunggal di js/state.js, dan fungsi render(state) di js/dom.js menggambar ulang tampilan murni berdasarkan state.
3. State Persistence: Menggunakan localStorage dengan kunci pabw-p11 untuk menyimpan preferensi filter kategori dan daftar favorit pengguna[cite: 1].
4. Resiliensi dan Error Handling: Pembacaan data dibungkus dalam try...catch serta memeriksa nomor VERSI skema (VERSI = 2). Jika data rusak atau versinya tidak cocok, simpanan otomatis dibuang (localStorage.removeItem) dan sistem kembali ke nilai bawaan (null)[cite: 1].

## Pengungkapan AI (AI Disclosure)
- Dibantu AI: Diskusi alur logika penanganan galat try...catch pada localStorage, pengujian fungsi muat(), dan panduan penyusunan dokumentasi.
- Dikerjakan Mandiri: Penulisan struktur HTML, pemisahan modul JavaScript, eksekusi perintah terminal untuk pengecekan versi Node.js/npm, pengujian langsung di Console peramban, serta pengisian seluruh lembar kerja. 


# Portfolio Vue.js — Worksheet P12 (Migrasi Reaktivitas & Build Production)

Proyek ini merupakan hasil migrasi dari P11 (DOM Manipulation manual) ke Vue.js 3 menggunakan konsep `reactive()`, arsitektur berbasis komponen, serta analisis hasil build produksi dengan Vite.

## Informasi Pengembang
* **Nama**: Purnama Annisa
* **NIM**: 25523279
* **Tahun**: 2026
## Informasi Perkakas
* **Node.js**: v24.22.0
* **npm**: 11.19.1
## Analisis Ukuran Build
* **Sebelum Build (src/)**: ~72.7 KB
* **Sesudah Build (dist/)**: 28.48 KB
---

## Pernyataan Deklarasi Bantuan AI

Proyek P12 ini dikerjakan dengan bantuan AI sebagai mitra diskusi dan panduan teknis, dimana pembagian perannya adalah sebagai berikut:

* **Bagian yang Dibantu AI:**
  * Memberikan panduan langkah demi langkah dalam merestrukturisasi komponen Vue dan migrasi logika reaktif (`state.js`).
  * Membantu menganalisis data ukuran berkas sebelum/sesudah build dari output terminal `vite build` dan DevTools Network.

* **Bagian yang Dikerjakan Mandiri (Oleh Saya):**
  * Eksekusi seluruh perintah terminal (`npm run dev`, `npm run build`, `npm run preview`, dan Git commit/push).
  * Pengujian reaktivitas aplikasi, pengecekan konsol browser, serta verifikasi penyimpanan `localStorage` secara langsung.
  * Pengisian dan penyelesaian seluruh lembar kerja P12 secara bertahap hingga tuntas.

---

## Cara Menjalankan Proyek

1. **Jalankan Mode Pengembangan:**
   ```bash
   npm run dev