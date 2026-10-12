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