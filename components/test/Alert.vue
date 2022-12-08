<script setup lang="ts">
defineProps<{
  titleColor?: string
  textColor?: string
  borderColor?: string
  backgroundColor?: string
}>()
</script>

<template>
  <div class="p-4 text-left rounded border-2" :class="[backgroundColor ? backgroundColor : 'bg-primary-100', borderColor ? borderColor : 'border-primary-300']">
    <h6 class="font-semibold text-lg" :class="titleColor ? titleColor : 'text-primary-900'">Our privacy policy has changed</h6>
    <p :class="textColor ? textColor : 'text-primary-500'">Make sure you know how these changes affect you.</p>
  </div>
</template>

<style scoped>

</style>