// js/api.js — Lapisan Data
const ALAMAT = 'data/proyek.json'; // Alamat relatif terhadap profil.html

export async function muat() {
  const respons = await fetch(ALAMAT);
  console.log('status', respons.status, 'ok', respons.ok);
  if (!respons.ok) {
    throw new Error('status ' + respons.status);
  }
  return respons.json();
}