<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const daftarTampil = computed(() => {
  return saring(state.daftarProyek, state.kategoriAktif)
})

// Tambahkan tanda '/' di depan nama berkas gambar
const petaGambar = {
  "Spider-Man: Brand New Day": "/spiderman.jpg",
  "Resident Evil": "/resident-evil.jpg",
  "Backrooms": "/backrooms.jpg"
}
</script>

<template>
  <section id="daftar-film" class="utama">
    <h2>Koleksi film pilihan</h2>

    <p v-if="state.memuat" id="muat">Memuat data...</p>
    <p v-else-if="state.galat" id="pesan-kosong">{{ state.galat }}</p>
    <p v-else-if="daftarTampil.length === 0" id="pesan-kosong">Tidak ada film yang cocok dengan filter ini.</p>

    <div v-else class="galeri">
      <figure v-for="film in daftarTampil" :key="film.id || film.judul" class="kartu">
        <img 
          :src="petaGambar[film.judul] || '/poster-placeholder.jpg'" 
          :alt="`Poster film ${film.judul}`"
          width="640" 
          height="960" 
        />
        <figcaption class="kartu__kaki">{{ film.judul }}</figcaption>
        <button 
          class="favorit" 
          @click="tambahFavorit(film.id || film.judul)"
        >
          {{ state.favorit.map(String).includes(String(film.id || film.judul)) ? '★' : '☆' }}
        </button>
      </figure>
    </div>
  </section>
</template>