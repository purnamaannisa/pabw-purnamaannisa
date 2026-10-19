import { pilihKategori } from './state.js';

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
}