// import { daftarFilm } from "./app.js";


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
  img.src = petaGambar[film.judul] || "poster-placeholder.jpg";
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


// render(daftarFilm);


const barisFilter = document.querySelector("#filter");


function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}


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


const formTambah = document.querySelector("#tambah-film form");

if (formTambah) {  
  const judulInput = document.querySelector("#judul");
  const sutradaraInput = document.querySelector("#sutradara");
  const tahunInput = document.querySelector("#tahun");
  const ratingInput = document.querySelector("#rating");

  [judulInput, sutradaraInput].forEach((input) => {
  if (!input) return;
    input.addEventListener("input", () => {
      if (input.value.trim().length > 0) {
        input.setCustomValidity("");
      }
    });
  });

  formTambah.addEventListener("submit", (event) => {
    event.preventDefault();


    if (!formTambah.checkValidity()) {
      formTambah.reportValidity();
      return;
    }

    const judul = judulInput.value.trim();
    const sutradara = sutradaraInput.value.trim();
    const tahun = parseInt(tahunInput.value, 10);
    const rating = parseFloat(ratingInput.value);

    
    if (!judul) {
      judulInput.setCustomValidity("Judul film tidak boleh hanya berisi spasi.");
      judulInput.reportValidity();
      return;
    }

    if (!sutradara) {
      sutradaraInput.setCustomValidity("Nama sutradara tidak boleh hanya berisi spasi.");
      sutradaraInput.reportValidity();
      return;
    }

    if (isNaN(tahun) || isNaN(rating) || rating < 0 || rating > 5) {
      alert("Harap isi tahun dan rating (0-5) dengan benar!");
      return;
    }


    const filmBaru = {
      judul: judul,
      sutradara: sutradara,
      tahun: tahun,
      rating: rating,
      kategori: "Aksi",
      selesai: true
    };


    daftarFilm.unshift(filmBaru);
    render(daftarFilm);


    formTambah.reset();
  });
}