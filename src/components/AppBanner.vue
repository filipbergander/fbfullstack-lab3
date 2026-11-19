<template>
<section>
    <picture id="hero-image">
<!-- Laddar in mindre bild på mobiler -->
        <source srcset="/images/ocean-small.webp" type="image/webp" media="(max-width: 767px)" width="800" height="262">
        <source srcset="/images/ocean-small.jpg" type="image/jpeg" media="(max-width: 767px)" width="800" height="262">

        <!-- Laddar in stor bild vid desktopläge -->
        <source srcset="/images/ocean-large.webp" type="image/webp" media="(min-width: 768px)" width="2000" height="900">
        <!-- fallback bild till jpg -->
        <img src="/images/ocean-large.jpg" alt="Utsikt över hav och solsken" fetchpriority="high" loading="eager" width="2000" height="900" decoding="async"
        class="w-full h-72 md:h-112.5 object-cover object-center">
    </picture>
</section>
</template>

<script setup>

</script>

<style scoped>

</style>
