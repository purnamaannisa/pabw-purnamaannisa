<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div id="filter" class="baris-filter">
    <button 
      data-kategori="semua" 
      :class="{ aktif: state.kategoriAktif === 'semua' }" 
      @click="pilihKategori('semua')"
    >
      Semua
    </button>{{ ' ' }}
    <button 
      data-kategori="Aksi" 
      :class="{ aktif: state.kategoriAktif === 'Aksi' }" 
      @click="pilihKategori('Aksi')"
    >
      Aksi
    </button>{{ ' ' }}
    <button 
      data-kategori="Horor" 
      :class="{ aktif: state.kategoriAktif === 'Horor' }" 
      @click="pilihKategori('Horor')"
    >
      Horor
    </button>{{ ' ' }}
    <button id="atur-ulang" @click="aturUlang">
      Atur ulang
    </button>
  </div>
</template>