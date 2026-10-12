import { daftarFilm } from "./app.js";


const wadah = document.querySelector("#daftar-film .galeri");
const pesanKosong = document.querySelector("#pesan-kosong");


const petaGambar = {
  "Spider-Man: Brand New Day": "spiderman.jpg",
  "Resident Evil": "resident-evil.jpg",
  "Backrooms": "backrooms.jpg"
};


function buatKartu(film) {
  const figure = document.createElement("figure");
  figure.className = "kartu";

  const img = document.createElement("img");
  img.src = petaGambar[film.judul] || "spiderman.jpg";
  img.alt = `Poster film ${film.judul}`;
  img.width = 640;
  img.height = 960;
  img.loading = "lazy";

  const figcaption = document.createElement("figcaption");
  figcaption.className = "kartu__kaki";
  figcaption.textContent = film.judul; 

  figure.append(img, figcaption);
  return figure;
}


export function render(daftar) {

  wadah.textContent = "";

  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  daftar.forEach((film) => {
    wadah.append(buatKartu(film));
  });
}


render(daftarFilm);

// 4. Pilih elemen baris filter
const barisFilter = document.querySelector("#filter");

// Fungsi untuk menandai tombol yang sedang aktif
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// Event Delegation: Satu pendengar di induk (#filter) melayani semua tombol
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; // Klik di luar tombol, abaikan

  tandaiTombolAktif(tombol);

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarFilm.filter(
    (film) => kategori === "semua" || film.kategori === kategori
  );

  render(terpilih);
});