<template>
  <div class="text-center">
    <h1 class="text-2xl md:text-4xl ">404 | Sidan kunde inte hittas...</h1>
    <p class="text-lg md:text-1xl mt-5">Sidan du letar efter finns inte. Webbplatsen har sidorna <router-link to="/">Hem</router-link>, <router-link to="/resmal">Resmål</router-link> och <router-link to="/info">Info</router-link>.</p>
  </div>
</template>

<script setup></script>

<style scoped>h1 {
  margin-top: 3rem;
}

a {
  color: rgb(124, 8, 192);
  text-decoration: none;
    text-decoration: underline;
}

a:hover {
  color: rgba(3, 5, 109, 0.815);
  transition: color 0.1s ease-in-out;
}
</style>
