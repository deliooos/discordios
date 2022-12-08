<script setup>
</script>

<template>
  <div class="w-screen h-screen grid place-items-center">
    <div class="flex flex-col items-center gap-5">
      <h2 class="font-bold text-3xl">Test inter</h2>
      <h2 class="font-abril text-3xl">Test Abril Fatface</h2>
      <TestButton/>
      <TestButton background-color="bg-gray-500"/>
      <TestButton background-color="bg-red-500"/>
      <TestButton background-color="bg-orange-500"/>
      <TestButton background-color="bg-green-500"/>
      <TestAlert/>
      <TestAlert title-color="text-gray-900" text-color="text-gray-500" background-color="bg-gray-100" border-color="border-gray-300"/>
      <TestAlert title-color="text-red-900" text-color="text-red-500" background-color="bg-red-100" border-color="border-red-300"/>
      <TestAlert title-color="text-orange-900" text-color="text-orange-500" background-color="bg-orange-100" border-color="border-orange-300"/>
      <TestAlert title-color="text-green-900" text-color="text-green-500" background-color="bg-green-100" border-color="border-green-300"/>
    </div>
  </div>
</template>

<style scoped>
</style>