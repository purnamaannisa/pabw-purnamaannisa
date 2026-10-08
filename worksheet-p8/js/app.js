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