<script setup lang="ts">
const icons: string[] = [
  "hjs.png",
  "vuejs.png",
  "angular.svg",
  "reactjs.png",
  "tailwind.png",
  "typescript.svg",
  "php.svg",
  "nuxtjs.png",
  "nodejs.png",
  "mysql.png",
  "sqlserver.webp",
  "git.png",
];
</script>
<template>
  <section
    id="technologies"
    class="w-full min-h-[700px] flex items-center gap-[12rem] px-5 justify-center mt-12 md:mt-0"
  >
    <div class="introduce flex flex-col gap-5">
      <h1
        class="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-[color:var(--color-primary)]"
      >
        Technologies
      </h1>
      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 transition duration-300"
      >
        <div
          class="flex justify-center h-16 md:h-20 w-16 md:w-20 p-4 bg-gray-primary900 border border-gray-600 rounded-lg items-center m-2 transition duration-300 hover:bg-gray-500"
          v-for="icon in icons"
          :key="icon"
        >
          <img
            loading="lazy"
            width="51"
            height="44"
            class="w-full"
            :src="`/icons/${icon}`"
            :alt="icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>
