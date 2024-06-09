<script lang="ts" setup>
const yearNow: number = new Date().getFullYear();
</script>
<template>
  <footer class="text-center border-t border-gray-700 p-4 mt-20">
    <div>Keva Damar Galih &copy; {{ yearNow }}</div>
    <div class="mb-14 md:mb-0">Made with &#9829;</div>
  </footer>
</template>
