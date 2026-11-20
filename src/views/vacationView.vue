<template>
<div class="text-center">
       <h1 class="text-2xl">Resmål</h1>
</div>
<AppVacationForm />
<AppVacationTable />
</template>

<script setup>
import AppVacationTable from '../components/vacation/AppVacationTable.vue';
import AppVacationForm from '../components/vacation/AppVacationForm.vue';

import { ref } from 'vue';
const vacationList = ref([
  {
id: 1,
title: 'Italien',
vacationDays: 7,
visited: true
  },
]);

</script>

<style scoped>
h1 {
  margin-top: 3rem;
}
</style>
