<script setup lang="ts">
const slashQuery = ref('')
</script>

<template>
  <div class="relative">
    <p class="absolute">{{ slashQuery }}</p>
    <IconSlashDiscord class="absolute top-1.5 left-1.5"/>
    <input v-model="slashQuery" type="text" class="w-[400px] p-3 pl-12 text-gray-100 bg-[#40444b] rounded focus-visible:outline-none" placeholder="Try poop ahah !">
  </div>
</template>

<style scoped>

</style>