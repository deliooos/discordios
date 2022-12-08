<script setup lang="ts">
const { $confetti } = useNuxtApp()
import { gsap } from 'gsap'

onMounted(() => {
  gsap.to('.hero-title', {
    y: 600,
    fontSize: 300,
    scrollTrigger: {
      scrub: true
    }
  })
  gsap.to('.hero-waves', {
    attr: {
      viewBox: "0 50 900 600"
    },
    scrollTrigger: {
      scrub: true
    }
  })
  gsap.to('.hero-text', {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: '.hero-text',
      start: '0 50%',
      end: '100% 40%',
      scrub: true
    }
  })
})

function showConfetti() {
  $confetti.addConfetti()
}
</script>

<template>
  <section class="hero-section relative flex flex-col justify-center items-center w-full h-screen bg-gray-900 overflow-hidden">
    <h1 class="hero-title font-abril text-6xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-500 z-[3]">Discordios</h1>
    <div class="hero-text text-center">
      <p class="text-xl text-gray-300">A cool Discord bot for cool people that think shitty features are cool</p>
      <button @click="showConfetti" class="text-gray-300">Click me if you're cool 😎</button>
    </div>
    <IconHeroWave class="hero-waves absolute bottom-0 w-full  pointer-events-none z-[2]"/>
    <IconHeroWaves class="hero-waves absolute bottom-0 w-full  pointer-events-none z-[4]"/>
  </section>
</template>

<style scoped>

</style>