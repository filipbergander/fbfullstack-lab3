<template>
<form method="post" @submit.prevent="addVacation" class="w-11/12 max-w-2xl mx-auto content-center bg-white p-5 my-4 shadow-md rounded-md">
  <legend class="text-lg md:text-xl mb-2 ">Vart skulle du vilja resa?</legend>
  <p class="text-lg md:text-lg mb-2 ">{{editingVacation ? 'Redigera resmål' : 'Lägg till ett nytt resmål'}} </p>
  <div class="flex flex-col mb-4 text-sm md:text-base">
     <label for="name">Ange namn</label>
<input type="text" id="name" placeholder="Skriv namn" maxlength="40" autocomplete="off" v-model="vacationTitle" class="p-2 border border-gray-300 rounded-md"/>
  </div>
  <div class="flex flex-col mb-4 max-w-sm text-sm md:text-base">
     <label for="vacation-days">Ange antal resdagar</label>
<input type="number" id="vacation-days" placeholder="Ange nummer" max="366" min="1" autocomplete="off" v-model="vacationDays" class="p-2 border border-gray-300 rounded-md"/>
  </div>
    <div class="flex flex-col mb-4 text-sm md:text-base">
      <label for="visited">Har du besökt resmålet?</label>
<input type="checkbox" id="visited" v-model="visited" class="p-4 border rounded-md"/>
     </div>
     <div class="flex flex-col mb-4 text-red-600">
      <ul>
      <li v-if="errors.length > 0" v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
     </div>
     <div class="flex gap-3 md:gap-5 flex-col md:flex-row justify-center items-center">
      <button type="submit" id="" class="flex justify-center items-center place-self-center w-full max-w-lg mt-5 bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md"> {{editingVacation ? 'Spara ändringar' : 'Lägg till'}}</button>
<button type="button" class="flex justify-center items-center place-self-center w-full max-w-lg md:mt-5 bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md" @click="resetForm()">Rensa</button>
     </div>
</form>
</template>

<script setup>
import { ref, watch } from 'vue';
const apiUrl = import.meta.env.VITE_API_URL; // Hämtar in url till apiet från dotenv-filen
const vacationTitle = ref("");
const vacationDays = ref("");
const visited = ref(false);
const errors = ref([]);

// Skickar eventet till vacationView för att hämta in alla resmål
const emits = defineEmits(["refreshVacations", "cancelEditMode"]);

// Hämtar in det medskickade reseobjektet, om man valt att redigera ett resmål. Null annars som default
const props = defineProps({
  editingVacation: {
    type: Object,
    default: null
  }
})
// Känner av om man valt att redigera ett resmål -> fyller då i formuläret
watch(() => props.editingVacation, (newVacation) => {
  // Om man faktiskt valt att redigera så är newVacation inte null -> gå vidare och fyll i formuläret
  if (newVacation !== null)
 {
   vacationTitle.value = newVacation.title;
    vacationDays.value = newVacation.vacationDays;
    visited.value = newVacation.visited;
 } else {
   resetForm();
 }

})

// Validerar och lägger till ett nytt resmål i databasen
const addVacation = async () => {

  // tömmer felmeddelanden innan validering
errors.value = [];

    //Validerar inputs
  if (!vacationTitle.value.trim()) {
    errors.value.push("Ange ett namn på resmålet!");
  } else if (vacationTitle.value.length > 40) {
    errors.value.push("Max 40 tecken för namn!");
  }
  if (vacationDays.value < 1 || vacationDays.value == "") {
    errors.value.push("Ange antal resdagar!");
  } else if (vacationDays.value > 366) {
    errors.value.push("Max 366 resdagar!");
  }

  if (typeof visited.value !== "boolean") {
    errors.value.push("Ange om resmålet är besökt eller ej!");
  }

  // Om det finns felmeddelanden, avbryt funktionen
  if (errors.value.length > 0) {
    return;
  }

  if (props.editingVacation) {
    // Uppdaterar ett befintligt resmål
    try {
      const response = await fetch(apiUrl + "/vacations/" + props.editingVacation.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: vacationTitle.value,
          vacationDays: parseInt(vacationDays.value),
          visited: visited.value
        })
      });
      if (!response.ok) {
        throw new Error("Kunde inte uppdatera resmålet, status: " + response.status);
      }
      // Lyckat -> Hämtar in alla resmål igen och tömmer inputs & felmeddelanden
      resetForm();
      emits("refreshVacations");
    } catch (error) {
      console.error(error);
      errors.value.push("Misslyckades med att uppdatera resmålet. Försök snart igen!");
    }
    return;
  } else {
     try {
    const response = await fetch(apiUrl + "/vacations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: vacationTitle.value,
        vacationDays: parseInt(vacationDays.value),
        visited: visited.value
      })
    });
    if (!response.ok) {
      throw new Error("Kunde inte lägga till resmålet, status: " + response.status);
    }
    // Lyckat -> Hämtar in alla resmål igen och tömmer inputs & felmeddelanden
    resetForm();
        emits("refreshVacations");
  } catch (error) {
    console.error(error);
    errors.value.push("Misslyckades med att lägga till resmålet. Försök snart igen!");
  }
  }
    };
// Tömmer inputs och felmeddelanden
function resetForm() {
  vacationTitle.value = "";
  vacationDays.value = "";
  visited.value = false;
  errors.value = [];

emits("cancelEditMode"); // Sätter editingVacation till null, submit-knapp och text byter även tillbaka till ordinarie namn i formuläret
}

</script>

<style scoped>
button {
cursor: pointer;
}

button:hover {
  transition: background-color 0.3s ease;
}

#visited {
  width: 20px;
  height: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}
</style>
