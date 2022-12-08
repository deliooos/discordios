<script setup lang="ts">
  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  let index = 0,
      interval = 1000

  onMounted(() => {
    const magicSlash = document.querySelectorAll<HTMLSpanElement>('.magic-slash')

    for (const slash of magicSlash) {
      setTimeout(() => {
        setInterval(() => {
          slash.style.setProperty("top", `${rand(0, 100)}%`)
          slash.style.setProperty("left", `${rand(0, 80)}%`)
        }, 1000)
      }, index++ * (interval / 3))
    }
  })
</script>

<template>
  <section class="bg-primary-100">
    <div class="grid grid-cols-2">
      <div>
        <IconSlash width="50"/>
      </div>
      <div>
        <h2 class="text-5xl text-gray-700">Unleash
          <span class="relative inline-block font-abril font-normal">
            <span class="magic-slash absolute block w-[12px]">
              <IconSlash width="12" class="block opacity-70"/>
            </span>
            <span class="magic-slash absolute block w-[12px]">
              <IconSlash width="12" class="block opacity-70"/>
            </span>
            <span class="magic-slash absolute block w-[12px]">
              <IconSlash width="12" class="block opacity-70"/>
            </span>
            <span class="magic-slash absolute block w-[12px]">
              <IconSlash width="12" class="block opacity-70"/>
            </span>
            <span class="magic-text">
              slash commands
            </span>
          </span>
          !</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>