<template>
<section class="w-11/12 max-w-2xl mx-auto content-center bg-white p-5 my-4 shadow-md rounded-md text-sm md:text-base">
<h2 class="text-left text-xl font-bold mb-2">Komma igång med Vue</h2>
<p class="text-left leading-relaxed mb-4">Att komma igång med Vue upplevde jag som ganska enkelt. Vue installerades som ett NPM-paket och därefter valde jag inställningar, exempelvis Router för SPA-applikation. `npm install` och `npm run dev` användes sedan för att starta projektet samt utvecklingsservern. Navigering och routing skapades sedan tillsammans med sidor, komponenter och frontend-design. Som hjälp för att inleda arbetet med Vue använde jag både dokumentation och kursföreläsningar på Canvas-moduler. Jag upplevde informationen i modulerna som mycket användbara.</p>
<p class="text-left leading-relaxed mb-4">Jag tycker det är uppskattande att arbeta med komponenter. Det gör det enklare att hålla koden organiserad, i stället för en enda stor fil. Det är effektivt att skriva CSS-kod både med Tailwind och vanlig CSS i en mindre komponent, annars upplever jag ibland att det kan bli alltför mycket kod i HTML med Tailwind. Kände även att det var ovant att skriva vanlig CSS jämfört med Tailwind direkt i början, däremot gick det lätt anpassa sig efter en liten stund.</p>
<p class="text-left leading-relaxed mb-4">Föreläsningen som jag studera inför uppgiften var som sagt hjälpsam. Det kändes efter föreläsningen som enkelt att skapa en Vue-applikation med props, emits, events och reaktiva variabler. Dock när jag själv började var det lite svårare att först förstå hur allt hänger ihop. Det blev tydligare när jag fick grepp om hur man skickar information och events mellan child- och parentkomponenter, till exempel med props och emits. Detta gjorde att det blev roligare att arbeta med Vue och skapa funktionalitet.</p>
<p class="text-left leading-relaxed mb-4">Avslutningsvis uppskattar jag att utveckla webbplatser i Vue mer än Angular, detta eftersom Vue-ramverket upplevs som enklare och mer användarvänligt. Genom båda ramverken är det möjligt att skapa SPA-applikationer vilket är en fördel.</p>
<AppSeastarPic />
</section>
</template>

<script setup>

</script>

<style scoped>
section {
 border: double 4px rgb(180, 209, 241);
  box-shadow: 0px 2px 4px rgb(180, 209, 241);
}

</style>
