<template>
  <div>
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
  </div>
</template>