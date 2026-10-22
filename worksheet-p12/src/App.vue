<script setup>
import { onMounted } from 'vue'
import { mulai } from './app.js'
import { profil } from './data.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(() => {
  mulai()
})
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi">
      <TombolFilter />
      <DaftarProyek />
      <FormKontak />
    </main>

    <footer>
      <p>Purnama Annisa • 25523279 • 2026</p>
    </footer>
  </div>
</template>