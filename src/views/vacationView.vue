<template>
<div class="text-center">
       <h1 class="text-2xl">Resmål</h1>
</div>
<AppVacationForm @refresh-vacations="fetchVacations" />
<AppVacationTable :vacations="vacations" @delete-vacation="deleteVacation" />
<div v-if="message" class="w-fit right-5 bottom-5 fixed text-white p-2 rounded-md px-4 py-2 shadow-lg z-10"
:class="isError ? 'bg-red-600' : 'bg-emerald-600'">
<p>{{ message }}</p>
</div>
</template>

<script setup>
import AppVacationTable from '../components/vacation/AppVacationTable.vue';
import AppVacationForm from '../components/vacation/AppVacationForm.vue';
import { onMounted, ref } from 'vue';

const apiUrl = import.meta.env.VITE_API_URL; // Hämtar in url till apiet från dotenv-filen

const vacations = ref([]);// Sparar resmålen i variabel, reaktiv ref
const message = ref(""); // Meddelandevariabel, tom i början
const isError = ref(false); // Finns felmeddelanden, false i början
let delayTime = null; // Rensar timeouten för meddelanden

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
    if (data.length === 0) {
      displayMessage("Inga resmål sparade.", true);
    }
vacations.value = data;
  }catch (error) {
    console.error(error);
    displayMessage("Misslyckades med att hämta resmål. Försök snart igen!", true);
  }
}

/**
 * Tar bort ett resmål från API:et och visar listan igen med
 */
const deleteVacation = async (id) => {
        displayMessage("Tar bort resmål...");
  try {
    const response = await fetch(apiUrl + "/vacations/" + id, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(response.status);
    }
    // Hämtar alla resmål igen från databasen efter raderingen
    vacations.value = vacations.value.filter(vacation => vacation.id !== id); // Filtrerar bort det resmålet som klickades för radering
    displayMessage("Resmålet raderades!");
    } catch (error) {
    console.error(error);
    displayMessage("Misslyckades med att radera resmålet. Försök snart igen!", true)
  }
}
/**
 * Visar ett lyckat/misslyckat meddelande när använder provar att radera ett resmål
 * @param text Textmeddelandets sträng
 * @param error Om det är ett felmeddelande eller inte, true/false
 */
function displayMessage(text, error = false) {
message.value = text; // Meddelandet som ska visas
isError.value = error; // Om det är ett felmeddelande eller inte

clearTimeout(delayTime); // Om det redan finns ett meddelande -> rensa timeouten
delayTime = setTimeout(() => {
  message.value = ""; // Nollställer meddelandet efter 3 sek
}, 3000);
}
</script>

<style scoped>
h1 {
  margin-top: 3rem;
}
</style>
