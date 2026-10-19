export const namaLengkap = "Purnama Annisa";
export const peran = "Pengelola Katalog & Reviewer Film";
export const keahlian = ["Ulasan Film", "Rating", "Pengelolaan Katalog"];
export const jumlahProyek = 3;

export const profil = {
  nama: namaLengkap,
  peran: peran,
  keahlian: keahlian,
  jumlahProyek: jumlahProyek,
  alamat: null
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

// Fungsi murni penyaring data film/proyek
export function saring(daftar, kategori) {
  if (!daftar) return [];
  if (kategori === "semua") return daftar;
  return daftar.filter((item) => (item.kategori || "").toLowerCase() === kategori.toLowerCase());
}