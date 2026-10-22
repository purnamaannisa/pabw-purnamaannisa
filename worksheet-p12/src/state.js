import { reactive } from 'vue';

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = reactive({
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: [],
  memuat: true,
  galat: ''
});

export function simpan(stateData) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const raw = localStorage.getItem(KUNCI);
    if (!raw) return null;

    const isi = JSON.parse(raw);
    
    // Cek kesesuaian versi skema
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI); // buang versi tidak cocok
      return null;
    }
    return isi;
  } catch (galat) {
    localStorage.removeItem(KUNCI); // buang jika bukan JSON sah
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) {
    state.kategoriAktif = "semua";
    state.favorit = [];
    return;
  }
  state.kategoriAktif = isi.kategoriAktif || "semua";
  state.favorit = isi.favorit || [];
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai; 
  simpan(state);
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

}