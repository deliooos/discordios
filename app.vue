<script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { Flip } from "gsap/Flip";

  gsap.registerPlugin(ScrollTrigger, Flip)

  useHead({
    title: 'Discordios',
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: ""
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@300;400;500;600;700;900&display=swap'
      }
    ],
    bodyAttrs: {
      class: 'font-inter'
    }
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
