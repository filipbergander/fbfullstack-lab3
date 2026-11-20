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
import { ref } from 'vue';

const vacations = ref([
  {
id: 1,
title: 'Italien',
vacationDays: 7,
visited: true
  },
    {
id: 2,
title: 'Spanien',
vacationDays: 5,
visited: false
  },
    {
id: 3,
title: 'Island',
vacationDays: 10,
visited: true
  },
]);

</script>

<style scoped>
h1 {
  margin-top: 3rem;
}
</style>
