<script setup lang="ts">
import gsap from 'gsap'
const { $confetti } = useNuxtApp()

onMounted(() => {
  gsap.to(['.hero-title', '.hero-text'], {
    autoAlpha: 1,
    y: 0
  })

  gsap.to('.hero-title', {
    y: 500,
    fontSize: 400,
    scrollTrigger: {
      scrub: true
    }
  })

  gsap.fromTo('.hero-text',{
    autoAlpha: 1,
  }, {
    autoAlpha: 0,
    immediateRender: false,
    scrollTrigger: {
      trigger: '.hero-section',
      start: '10% 10%',
      end: '20% -30%',
      scrub: true
    }
  })

  gsap.to('.svg-move-1', {
    attr: {
      viewBox: "0 400 900 600"
    },
    scrollTrigger: {
      scrub: true
    }
  })

  gsap.to('.svg-move-2', {
    attr: {
      viewBox: "0 200 900 600"
    },
    scrollTrigger: {
      scrub: true
    }
  })

  gsap.to('.svg-move-3', {
    attr: {
      viewBox: "0 100 900 600"
    },
    scrollTrigger: {
      scrub: true
    }
  })
})

function showConfetti() {
  $confetti.addConfetti()
}
</script>

<template>
  <section class="hero-section relative flex flex-col justify-center items-center h-screen w-full bg-gray-900">
    <h1 class="hero-title font-abril text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-700 z-[2] opacity-0 -translate-y-5">Discordios</h1>
    <div class="hero-text flex flex-col items-center gap-2 text-center opacity-0 translate-y-5">
      <p class="font-semibold text-2xl text-gray-300">A useless bot built for cool people that like shitty stuff</p>
      <NuxtLink to="/" class="w-fit px-5 py-2 font-bold text text-2xl text-gray-900 tracking-tight bg-primary-500 border-2 border-primary-100 rounded-full hover:bg-primary-300 hover:px-7 hover:tracking-normal transition-all">
        Welcome him !
        <div></div>
      </NuxtLink>
      <button @click="showConfetti" class="text-gray-500">Click me if you're a cool guy 😎</button>
    </div>
    <IconHeroWaves svg-classes="absolute bottom-0 pointer-events-none"/>
  </section>
</template>

<style scoped>

</style>