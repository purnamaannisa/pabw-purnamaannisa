import { render } from './dom.js';

export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  render(state);
}