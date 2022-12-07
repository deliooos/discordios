<script setup>
const appConfig = useAppConfig()
</script>

<template>
  <button class="w-fit py-2 px-4 bg-primary-500 text-white rounded">{{ appConfig.company }}</button>
</template>

<style scoped>

</style>