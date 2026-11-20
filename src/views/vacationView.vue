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
</script>

<style scoped>
h1 {
  margin-top: 3rem;
}
</style>
