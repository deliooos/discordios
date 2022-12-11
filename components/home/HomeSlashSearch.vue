<script setup lang="ts">
import { useFuse, UseFuseOptions } from "@vueuse/integrations/useFuse"

interface commandsItem {
  title: string
  description: string
}

const options = computed<UseFuseOptions<commandsItem>>(() => {
  fuseOptions: {
    keys: 'title'
  }
})

const commands = ref<commandsItem[]>([
  {
    title: '8ball',
    description: 'Let the 8ball answer your questions.'
  },
  {
    title: 'penis',
    description: 'Tells you how long your penis is with 100% precision.'
  },
  {
    title: 'fun',
    description: 'Have fun haha !'
  },
  {
    title: 'random',
    description: 'Sends a random sentence in order to make important decisions.'
  },
  {
    title: 'yomama',
    description: 'Yo mama lol'
  }
])

const slashQuery = ref('')

const { results } = useFuse(slashQuery, commands)
</script>

<template>
  <div class="relative">
    <p class="absolute">{{ results }}</p>
    <IconSlashDiscord class="absolute top-1.5 left-1.5"/>
    <input v-model="slashQuery" type="text" class="w-[400px] p-3 pl-12 text-gray-100 bg-[#40444b] rounded focus-visible:outline-none" placeholder="Try poop ahah !">
  </div>
</template>

<style scoped>

</style>