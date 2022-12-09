<script setup lang="ts">
const { $confetti } = useNuxtApp()

function showConfetti() {
  $confetti.addConfetti()
}
</script>

<template>
  <section class="flex flex-col justify-center items-center h-screen w-full bg-gray-900">
    <h1 class="font-abril text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-700">Discordios</h1>
    <div class="text-center">
      <p class="font-semibold text-2xl text-gray-300">A useless bot built for cool people that like shitty stuff</p>
      <button @click="showConfetti" class="text-gray-500">Click me if you're a cool guy 😎</button>
    </div>
  </section>
</template>

<style scoped>

</style>