// import { daftarFilm } from "./app.js";

import { saring } from './data.js';

const wadah = document.querySelector("#daftar-film .galeri") || document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#muat"); 

// let dataUtama = [];
// let dataFilmLokal = [];

const petaGambar = {
  "Spider-Man: Brand New Day": "spiderman.jpg",
  "Resident Evil": "resident-evil.jpg",
  "Backrooms": "backrooms.jpg"
};


export function buatKartu(film, favorit = []) {
  const figure = document.createElement("figure");
  figure.className = "kartu";

  const img = document.createElement("img");
  img.src = petaGambar[film.judul] || "poster-placeholder.jpg";
  img.alt = `Poster film ${film.judul}`;
  img.width = 640;
  img.height = 960;

  const figcaption = document.createElement("figcaption");
  figcaption.className = "kartu__kaki";
  figcaption.textContent = film.judul; 

  const filmId = String(film.id || film.judul);

  const tombolFav = document.createElement("button");
  tombolFav.className = "favorit";
  tombolFav.dataset.id = filmId;

  const isFavorit = favorit.map(String).includes(filmId);
  tombolFav.textContent = isFavorit ? "★" : "☆";

  figure.append(img, figcaption, tombolFav);
  return figure;
}

export function aturMemuat(sedangMemuat) {
  if (pesanMuat) {
    pesanMuat.hidden = !sedangMemuat;
  }
}

export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = "";
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}


export function render(state) {
  if (!wadah) return;
  wadah.textContent = '';

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (!tampil || tampil.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Belum ada data.";
      pesanKosong.hidden = false;
    }
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  tampil.forEach((film) => {
    wadah.append(buatKartu(film, state.favorit));
  });

  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === state.kategoriAktif);
  });
}

// render(daftarFilm);


// const barisFilter = document.querySelector("#filter");


// function tandaiTombolAktif(tombolAktif) {
//   document.querySelectorAll("#filter button").forEach((tombol) => {
//     tombol.classList.toggle("aktif", tombol === tombolAktif);
//   });
// }

// if (barisFilter) {
//   barisFilter.addEventListener("click", (event) => {
//     const tombol = event.target.closest("button");
//     if (!tombol) return; // Klik di luar tombol, abaikan

//     tandaiTombolAktif(tombol);

//     const kategori = tombol.dataset.kategori;
//     const terpilih = dataUtama.filter((film) => {
//       if (kategori === "semua") return true;
//       return (film.kategori || "").toLowerCase() === kategori.toLowerCase();
//     });

//     render(terpilih);
//   });
// }


// const formTambah = document.querySelector("#tambah-film form");

// if (formTambah) {  
//   const judulInput = document.querySelector("#judul");
//   const sutradaraInput = document.querySelector("#sutradara");
//   const tahunInput = document.querySelector("#tahun");
//   const ratingInput = document.querySelector("#rating");

//   [judulInput, sutradaraInput].forEach((input) => {
//   if (!input) return;
//     input.addEventListener("input", () => {
//       if (input.value.trim().length > 0) {
//         input.setCustomValidity("");
//       }
//     });
//   });

//   formTambah.addEventListener("submit", (event) => {
//     event.preventDefault();


//     if (!formTambah.checkValidity()) {
//       formTambah.reportValidity();
//       return;
//     }

//     const judul = judulInput.value.trim();
//     const sutradara = sutradaraInput.value.trim();
//     const tahun = parseInt(tahunInput.value, 10);
//     const rating = parseFloat(ratingInput.value);

    
//     if (!judul) {
//       judulInput.setCustomValidity("Judul film tidak boleh hanya berisi spasi.");
//       judulInput.reportValidity();
//       return;
//     }

//     if (!sutradara) {
//       sutradaraInput.setCustomValidity("Nama sutradara tidak boleh hanya berisi spasi.");
//       sutradaraInput.reportValidity();
//       return;
//     }

//     if (isNaN(tahun) || isNaN(rating) || rating < 0 || rating > 5) {
//       alert("Harap isi tahun dan rating (0-5) dengan benar!");
//       return;
//     }


//     const filmBaru = {
//       judul: judul,
//       sutradara: sutradara,
//       tahun: tahun,
//       rating: rating,
//       kategori: "Aksi",
//       selesai: true
//     };

//     dataUtama.unshift(filmBaru);
//     render(dataUtama);


//     formTambah.reset();
//   });
// }