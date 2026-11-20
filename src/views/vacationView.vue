<template>
<div class="text-center">
       <h1 class="text-2xl">Resmål</h1>
</div>
<AppVacationForm />
<AppVacationTable :vacations="vacations" @delete-vacation="deleteVacation" />
<div class="bg-blue-500 w-fit right-5 bottom-5 fixed text-white p-2 rounded-md">
<p></p>
</div>
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

/**
 * Tar bort ett resmål från API:et och visar listan igen med
 */
const deleteVacation = async (id) => {
  const savedVacations = [...vacations.value]; // Sparar en kopia av alla resmål med spread-operator
  vacations.value = savedVacations.filter(vacation => vacation.id !== id); // Filtrerar bort det resmålet som klickades för radering
  try {
    const response = await fetch(apiUrl + "/vacations/" + id, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(response.status);
    }
    // Hämtar alla resmål igen från databasen efter raderingen
    fetchVacations();
    } catch (error) {
    console.error(error);
    vacations.value = savedVacations; // Vid error visas resmålen igen, så som det såg ut innan anropet gjordes
  }
}

function displayMessage(message) {

}
</script>

<style scoped>
h1 {
  margin-top: 3rem;
}
</style>
