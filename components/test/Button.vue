<script setup lang="ts">
const appConfig = useAppConfig()

defineProps<{
  backgroundColor?: string
}>()
</script>

<template>
  <button class="w-fit py-2 px-4 text-white rounded" :class="[backgroundColor ? backgroundColor : 'bg-primary-500']">{{ appConfig.company }}</button>
</template>

<style scoped>

</style>