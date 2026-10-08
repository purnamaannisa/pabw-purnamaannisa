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
const kota = profil.alamat?.kota ?? "Kota belum ditentukan";

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