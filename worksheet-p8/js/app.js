// Deklarasi const & let sesuai niat
const namaLengkap = "Purnama Annisa";
const peran = "Pengelola Katalog & Reviewer Film";
const keahlian = ["Ulasan Film", "Rating", "Pengelolaan Katalog"];
const jumlahProyek = 3;

// Objek Profil
const profil = {
  nama: namaLengkap,
  peran: peran,
  keahlian: keahlian,
  jumlahProyek: jumlahProyek,
  alamat: null // Sengaja null untuk menguji akses aman ?. dan nilai bawaan ??
};

// Penggunaan Akses Aman (?.) dan Nilai Bawaan (??)
const kota = profil.alamat.kota;

// Penggunaan Template Literal (backtick `` dan \${})
const kalimat = `Nama saya ${profil.nama}, peran saya sebagai ${profil.peran}. Saya mengelola ${profil.keahlian.length} bidang utama dan berlokasi di ${kota}.`;

// Menampilkan ke Console
console.log(kalimat);
console.log(typeof namaLengkap);   // "string"
console.log(typeof jumlahProyek);  // "number"


// Fungsi Murni 1 (Bentuk Declaration & Destructuring Parameter)
// Menyusun kalimat perkenalan dari satu object profil
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// Fungsi Murni 2 (Bentuk Arrow Function)
// Merapikan daftar keahlian menjadi satu baris teks dengan pemisah '·'
const formatKeahlian = (daftar) => daftar.join(" · ");

// Menampilkan hasil pemanggilan fungsi ke Console
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));


// Array of Objects berisi daftar film dari profil.html kamu
const daftarFilm = [
  { judul: "Spider-Man: Brand New Day", sutradara: "Destin Daniel Cretton", tahun: 2026, rating: 3.5, selesai: true },
  { judul: "Resident Evil", sutradara: "Zach Cregger", tahun: 2026, rating: 4.7, selesai: true },
  { judul: "Backrooms", sutradara: "Kane Parsons", tahun: 2026, rating: 4.0, selesai: true }
];

// Tampilkan seluruh data ke console menggunakan console.table
console.table(profil.keahlian);
console.table(daftarFilm);

// Penggunaan filter: Menyaring film yang ratingnya di atas 4.0
const filmFavorit = daftarFilm.filter((film) => film.rating > 4.0);
console.log("Hasil filter (Rating > 4.0):");
console.table(filmFavorit);

// Penggunaan find: Mencari satu film spesifik berdasarkan judulnya
const filmSpesifik = daftarFilm.find((film) => film.judul === "Resident Evil");
console.log("Hasil find (Resident Evil):", filmSpesifik);

// Penggunaan map: Mengambil array baru yang berisi daftar judul film saja
const daftarJudul = daftarFilm.map((film) => film.judul);
console.log("Hasil map (Daftar Judul):", daftarJudul);

// Mengurutkan data memakai salinan [...daftarFilm] agar data asli tidak berubah
const filmUrutRating = [...daftarFilm].sort((a, b) => b.rating - a.rating);
console.log("Hasil sort pada salinan data:");
console.table(filmUrutRating);