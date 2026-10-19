import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: []
};

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return; // kunjungan pertama: pakai nilai bawaan
  state.kategoriAktif = isi.kategoriAktif || "semua";
  state.favorit = isi.favorit || [];
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
  render(state);
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpan(state);
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

  simpan(state);
  render(state); // Render ulang agar tampilan bintang berubah
}