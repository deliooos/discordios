<script setup lang="ts">
defineProps<{
  width?: string
}>()
</script>

<template>
  <svg :width="[width ? width : 60]" viewBox="0 0 82 224" fill="#19e6a2" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.82317 218.341L50.9732 4.34146C51.2812 2.97256 52.4969 2 53.9 2H76.2333C78.1612 2 79.5886 3.79223 79.1573 5.67119L30.0346 219.671C29.7217 221.034 28.5089 222 27.1106 222H5.75C3.8275 222 2.40116 220.217 2.82317 218.341Z" stroke="#19e6a2" stroke-width="4"/>
  </svg>
</template>