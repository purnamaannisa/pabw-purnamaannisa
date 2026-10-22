<template>
  <div class="page">
    <header>
      <div class="header-baris">
        <h1>Daftar Film Saya</h1>

        <input type="checkbox" id="tema" class="pengalih-tema">
        <label for="tema" class="tombol-tema">Tema gelap</label>

        <nav aria-label="Navigasi utama" class="navbar">
          <ul>
            <li><a href="#daftar-film">Daftar Film</a></li>
            <li><a href="#tambah-film">Tambah Film</a></li>
            <li><a href="#tentang-saya">Tentang Saya</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="isi">
      <section id="daftar-film" class="utama">
        <h2>Koleksi film pilihan</h2>

        <div id="filter" class="baris-filter">
          <button data-kategori="semua" class="aktif">Semua</button>{{ ' ' }}
          <button data-kategori="Aksi">Aksi</button>{{ ' ' }}
          <button data-kategori="Horor">Horor</button>{{ ' ' }}
          <button id="atur-ulang">Atur ulang</button>
        </div>

        <p id="pesan-kosong" hidden>Tidak ada film yang cocok dengan filter ini.</p>
        <p id="muat" hidden>Memuat data... </p>
        <div class="table-wrap">
          <table>
            <caption>Daftar film yang pernah ditonton beserta ratingnya</caption>
            <thead>
              <tr>
                <th scope="col">Judul Film</th>
                <th scope="col">Sutradara</th>
                <th scope="col">Tahun Rilis</th>
                <th scope="col">Rating Saya</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Spider-Man: Brand New Day</th>
                <td>Destin Daniel Cretton</td>
                <td>2026</td>
                <td>3.5/5</td>
              </tr>
              <tr>
                <th scope="row">Resident Evil</th>
                <td>Zach Cregger</td>
                <td>2026</td>
                <td>4.7/5</td>
              </tr>
              <tr>
                <th scope="row">Backrooms</th>
                <td>Kane Parsons</td>
                <td>2026</td>
                <td>4/5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="galeri"></div>
      </section>

      <section id="tambah-film" class="bawah">
        <h2>Tambah film ke daftar</h2>
        
        <form action="/simpan" method="post">
          <div class="form-kolom">
            <label for="judul">Judul Film</label>
            <input type="text" id="judul" name="judul" required pattern=".*[^\s].*" title="Judul tidak boleh hanya berisi spasi">
            <span class="pesan-galat">Judul wajib diisi.</span>
          </div>

          <div class="form-kolom">
            <label for="sutradara">Sutradara</label>
            <input type="text" id="sutradara" name="sutradara" required pattern=".*[^\s].*" title="Sutradara tidak boleh hanya berisi spasi">
            <span class="pesan-galat">Sutradara wajib diisi.</span>
          </div>

          <div class="form-kolom">
            <label for="tahun">Tahun Rilis</label>
            <input type="number" id="tahun" name="tahun" min="1888" max="2100" required>
            <span class="pesan-galat">Tahun tidak valid.</span>
          </div>

          <div class="form-kolom">
            <label for="rating">Rating (0-5)</label>
            <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" required>
            <span class="pesan-galat">Rating harus antara 0 dan 5.</span>
          </div>

          <button type="submit">Simpan</button>
        </form>
      </section>

      <aside id="tentang-saya" class="sisi">
        <h2>Tentang Saya</h2>
        <p>Halaman ini dikelola oleh Purnama Annisa untuk mencatat koleksi film.</p>
      </aside>
    </main>

    <footer>
      <p>Purnama Annisa • 25523279 • 2026</p>
    </footer>
  </div>
</template>