<template>
<div class="text-center">
       <h1 class="text-2xl">Resmål</h1>
</div>
<AppVacationForm />
<AppVacationTable :vacations="vacations" />
</template>

<script setup>
import AppVacationTable from '../components/vacation/AppVacationTable.vue';
import AppVacationForm from '../components/vacation/AppVacationForm.vue';
import { onMounted, ref } from 'vue';

const apiUrl = import.meta.env.VITE_API_URL; // Hämtar in url till apiet från dotenv-filen

const vacations = ref([]);// Sparar resmålen i variabel, reaktiv ref

// Hämta resmål vid inladdning av sidan
onMounted(() => {
  fetchVacations();
})

/**
 * Hämtar in sparade resmål från API:et och sparar i variabeln vacations
 */
const fetchVacations = async () => {
  try {
    const response = await fetch(apiUrl + "/vacations");

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
vacations.value = data;
  }catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
h1 {
  margin-top: 3rem;
}
</style>
