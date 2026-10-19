import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

export function pasangPendengar() {
  // Listener Filter Kategori & Tombol Atur Ulang
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;

      // Jika yang diklik adalah tombol "Atur ulang"
      if (tombol.id === "atur-ulang") {
        aturUlang();
        return;
      }

      // Jika yang diklik adalah tombol kategori (Semua, Aksi, Horor)
      const kategori = tombol.dataset.kategori;
      if (kategori) {
        pilihKategori(kategori);
      }
    });
  }

  // Listener Tombol Favorit pada Kartu Film
  const wadah = document.querySelector("#daftar-film .galeri") || document.querySelector("#daftar");
  if (wadah) {
    wadah.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      
      const filmId = tombol.dataset.id;
      tambahFavorit(filmId);
    });
  }
}