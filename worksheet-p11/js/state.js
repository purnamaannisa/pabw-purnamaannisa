import { render } from './dom.js';

export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: []
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  render(state);
}

// Fungsi baru untuk toggle favorit
export function tambahFavorit(id) {
    const targetId = String(id);
    const sudahFavorit = state.favorit.map(String).includes(targetId);

  if (sudahFavorit) {
    state.favorit = state.favorit.filter((fId) => String(fId) !== targetId);
  } else {
    state.favorit = [...state.favorit, targetId];
  }
  
  render(state); // Render ulang agar tampilan bintang berubah
}