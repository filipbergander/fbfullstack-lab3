<template>
<header>
<div class="container">
  <nav>
    <ul>
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

</style>
