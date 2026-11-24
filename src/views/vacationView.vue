<template>
<div class="text-center">
       <h1 class="text-2xl">Resmål</h1>
</div>
<AppVacationForm @refresh-vacations="refreshVacations" @cancel-edit-mode="editingVacation = null" :editing-vacation="editingVacation"/>
<AppVacationTable :vacations="vacations" @delete-vacation="deleteVacation" @selected-vacation="selectedVacation"/>
<div v-if="message" class="w-fit right-5 bottom-5 fixed text-white p-2 rounded-md px-4 py-2 shadow-lg z-10"
:class="isError ? 'bg-red-600' : 'bg-blue-600'">
<p>{{ message }}</p>
</div>
</template>

<script setup>
// Hämtar komponenter och funktioner
import AppVacationTable from '../components/vacation/AppVacationTable.vue';
import AppVacationForm from '../components/vacation/AppVacationForm.vue';
import { onMounted, ref } from 'vue';

const apiUrl = import.meta.env.VITE_API_URL; // Hämtar in url till apiet från dotenv-filen

const vacations = ref([]);// Sparar resmålen i variabel, reaktiv ref
const message = ref(""); // Meddelandevariabel, tom i början
const isError = ref(false); // Finns felmeddelanden, false i början
let delayTime = null; // Rensar timeouten för meddelanden

const editingVacation = ref(null); // Uppdatera ett befintligt resmål

// Hämta resmål vid inladdning av sidan
onMounted(() => {
  fetchVacations();
})

/**
 * Hämtar in sparade resmål från API:et och sparar i variabeln vacations
 */
const fetchVacations = async () => {
// Om servern inte svarar inom 3 sek -> visa meddelande
  const wakeServerTimer = setTimeout(() => {
    displayMessage("Servern vaknar...", true);
  }, 3000);

  try {
    const response = await fetch(apiUrl + "/vacations");

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    vacations.value = data.sort((a,b ) => a.id - b.id); // Sorterar resmålen efter id

   /* if (data.length === 0) {
      displayMessage("Inga resmål sparade.", true);
    }*/
vacations.value = data;
  }catch (error) {
    console.error(error);
    displayMessage("Misslyckades med att hämta resmål. Försök snart igen!", true);
  } finally {
    clearTimeout(wakeServerTimer); // Rensar timeouten om servern svarar
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

// Uppdaterar variabeln med det resmål som ska redigeras
const selectedVacation = async (vacation) => {
editingVacation.value = vacation;
window.scrollTo({top: 0, behavior: 'smooth'});
}

// Hämtar resmål och visar ett meddelande om det har skickats med från childkomponenter
const refreshVacations = (msg) => {
  fetchVacations(); // Hämtar in alla resmål igen
  if (msg) {
    displayMessage(msg); // Visar meddelande i gränssnittet
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
