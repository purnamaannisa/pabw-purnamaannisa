<script setup>
const props = defineProps({
  profil: { type: Object, required: true }
})
</script>

<template>
  <header>
    <div class="header-baris">
      <h1>{{ props.profil.nama }}</h1>
      <p>{{ props.profil.peran }}</p>

      <input type="checkbox" id="tema" class="pengalih-tema">
      <label for="tema" class="tombol-tema">Tema gelap</label>

      <nav aria-label="Navigasi utama" class="navbar">
        <ul>
          <li><a href="#daftar-film">Daftar Film</a></li>
          <li><a href="#tambah-film">Tambah Film</a></li>
          <li><a href="#tentang-saya">Tentang Saya</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>