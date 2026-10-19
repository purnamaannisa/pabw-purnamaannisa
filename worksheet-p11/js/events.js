import { pilihKategori, tambahFavorit } from './state.js';

export function pasangPendengar() {
  // Listener Filter Kategori
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;
      const kategori = tombol.dataset.kategori;
      pilihKategori(kategori);
    });
  }

  const wadah = document.querySelector("#daftar-film .galeri") || document.querySelector("#daftar");
  if (wadah) {
    wadah.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      
      // Ambil id film dari dataset tombol lalu ubah status favoritnya
      const filmId = tombol.dataset.id;
      tambahFavorit(filmId);
    });
  }
}