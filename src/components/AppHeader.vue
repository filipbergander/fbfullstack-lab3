<template>
<header class="w-full flex items-center p-4 bg-amber-300 text-black text-md md:text-xl">
  <p class="w-full">Laboration 3</p>

<div class="container">
  <nav class="flex flex-row justify-end">
    <ul class="flex flex-row gap-1.5 md:gap-4">
      <li><RouterLink to="/">Hem</RouterLink></li>
      <li><RouterLink to="/resmal">Resmål</RouterLink></li>
      <li><RouterLink to="/info">Info</RouterLink></li>
    </ul>
  </nav>
</div>
</header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
header {
    font-family: "Comic sans MS", Helvetica, Arial, sans-serif;
}

.router-link-active {
  font-weight: bold;
  box-shadow: inset 0 -2px 0 0 rgb(0, 0, 0);
}
h1 {
  text-decoration: none;
  color:rgb(124, 8, 192);
}
li:hover {
  color: rgba(0, 0, 0, 0.651);
  transition: color 0.1s ease-in-out;
}
</style>
