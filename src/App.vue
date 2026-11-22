<script setup>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { onMounted } from 'vue';

const apiUrl = import.meta.env.VITE_API_URL; // Hämtar in url till apiet från dotenv-filen

// Hämtar in resmålen direkt när man går in på webbplatsen, skapar anslutning mot webbtjänsten
onMounted(() => {
fetch(apiUrl + "/vacations").catch(() => {}); // Väcker servern utan felmeddelanden i konsollen
});

</script>

<template>
  <AppHeader />
<main>
<RouterView />
</main>
<AppFooter />
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>
