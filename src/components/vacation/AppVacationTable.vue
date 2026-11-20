<template>
  <div class="w-11/12 max-w-2xl mx-auto bg-green-300 mt-12 my-4 shadow-md rounded-md text-sm md:text-base">
<table class="w-full text-sm md:text-base border-collapse">
  <thead class=" text-black border-b border-green-800">
   <tr>
  <th class="text-left p-3">Titel</th>
    <th class="p-3">Antal resdagar</th>
      <th class="p-3">Besökt</th>
      <th class="p-3">Radera</th>
      <th class="p-3">Redigera</th>
</tr>
  </thead>

<tbody id="table-body" class="text-center divide-y divide-green-800">
  <tr v-for="vacation in vacations" :key="vacation.id" class="hover:bg-green-100">
    <td class="p-3 text-left">{{ vacation.title }}</td>
      <td class="p-3">{{ vacation.vacationDays }}</td>
        <td class="p-3"><i class="pi text-base"
          :class="vacation.visited ? 'pi-check': 'pi-times'"
          :title="vacation.visited ? 'Besökt' : 'Ej besökt'"
          ></i><span class="sr-only">{{ vacations.visited ? 'Besökt' : 'Ej besökt' }}</span></td>
        <td class="p-3"><button class="bg-red-500 hover:bg-red-600 text-white w-9 h-9 rounded cursor-pointer" title="Radera" aria-label="Radera"><i class="pi pi-trash text-base"></i></button></td>
        <td class="p-3"><button class="bg-blue-500 hover:bg-blue-600 text-white w-9 h-9 rounded cursor-pointer" title="Redigera" aria-label="Redigera"><i class="pi pi-pencil text-base"></i></button></td>
  </tr>
</tbody>
</table>
  </div>

</template>

<script setup>
defineProps({
  vacations: {
    type: Array,
    required: true
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
</style>
