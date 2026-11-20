<template>
<form method="post" class="w-11/12 max-w-2xl mx-auto content-center bg-white p-5 my-4 shadow-md rounded-md">
  <legend class="text-lg md:text-xl mb-4">Lägg till ett nytt resmål</legend>
  <div class="flex flex-col mb-4 text-sm md:text-base">
     <label for="name">Ange namn</label>
<input type="text" id="name" placeholder="Skriv namn" autocomplete="on" class="p-2 border border-gray-300 rounded-md"/>
  </div>
  <div class="flex flex-col mb-4 max-w-sm text-sm md:text-base">
     <label for="vacation-days">Ange antal resdagar</label>
<input type="text" id="vacation-days" placeholder="Skriv antal" class="p-2 border border-gray-300 rounded-md"/>
  </div>
    <div class="flex flex-col mb-4 text-sm md:text-base">
      <label for="visited">Har du besökt resmålet?</label>
<input type="checkbox" id="visited" class="p-4 border rounded-md"/>
     </div>
     <div class="flex flex-col mb-4 text-red-500">
      <ul id="errors-container" class="hidden">

      </ul>
     </div>
<button type="submit" class="flex justify-center items-center place-self-center w-full max-w-lg mt-5 bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md">Lägg till</button>
</form>
</template>

<script setup>

</script>

<style scoped>
button {
cursor: pointer;
}

button:hover {
  transition: background-color 0.3s ease;
}

#visited {
  width: 20px;
  height: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}
</style>
