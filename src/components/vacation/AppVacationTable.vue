<template>
  <div v-if="vacations.length > 0" class="w-[99%] sm:w-11/12 max-w-2xl mx-auto bg-green-300 mt-12 my-4 shadow-md rounded-md text-sm md:text-base">
<table class="w-full text-sm md:text-base border-collapse">
  <thead class=" text-black border-b border-green-800">
   <tr>
  <th class="text-left px-1 py-2.5 sm:p-3">Namn</th>
    <th class="px-1 py-2.5 sm:p-3">Resdagar</th>
      <th class="px-1 py-2.5 sm:p-3">Besökt</th>
      <th class="px-1 py-2.5 sm:p-3">Åtgärder</th>
</tr>
  </thead>

<tbody id="table-body" class="text-center divide-y divide-green-800">
  <tr v-for="vacation in vacations" :key="vacation.id" class="hover:bg-green-100">
    <td class="px-1 py-2.5 sm:p-3 text-left sm:text-base font-medium wrap-break-word max-w-30 max-[320px]:max-w-15 sm:max-w-none">{{ vacation.title }}</td>
      <td class="px-1 py-2.5 sm:p-3 sm:text-base font-medium whitespace-nowrap">{{ vacation.vacationDays }}</td>
        <td class="px-1 py-2.5 sm:p-3 sm:text-base font-medium whitespace-nowrap"><i class="pi text-base"
          :class="vacation.visited ? 'pi-check': 'pi-times'"
          :title="vacation.visited ? 'Besökt' : 'Ej besökt'"
          ></i><span class="sr-only">{{ vacation.visited ? 'Besökt' : 'Ej besökt' }}</span></td>
        <td class="px-1 py-2.5 sm:p-3 whitespace-nowrap"><button class="bg-red-500 hover:bg-red-600 text-white w-8 h-8 sm:w-9 sm:h-9 rounded cursor-pointer mr-2 sm:mr-2" title="Radera" aria-label="Radera" @click="$emit('deleteVacation', vacation.id)"><i class="pi pi-trash text-base"></i></button><button class="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 sm:w-9 sm:h-9 rounded cursor-pointer" title="Redigera" aria-label="Redigera" @click="$emit('selectedVacation', vacation)"><i class="pi pi-pencil text-base"></i></button></td>
        <!--<td class="px-1 py-2.5 sm:p-3 whitespace-nowrap"></td>-->
  </tr>
</tbody>
</table>
  </div>
<p id="noPosts" v-else class="animate-bounce text-center text-sm text-red-700 md:text-base mt-12 my-4">Inga resmål sparade ännu. Lägg till ett nytt resmål!</p>
</template>

<script setup>
const emits = defineEmits(["deleteVacation", "selectedVacation"]);
defineProps({
  vacations: {
    type: Array
  }
});
</script>

<style scoped>
table {
  margin-top:3rem;
}

.pi {
  font-size: 1.25rem;
}

#noPosts {
animation-duration: 3.5s;
}
</style>
