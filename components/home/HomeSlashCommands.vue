<script setup lang="ts">
import gsap from 'gsap'
import IconSlashDiscord from "~/components/icon/IconSlashDiscord.vue";

const index = ref<number>(0)
const interval = ref<number>(1000)

const messages = ['make important decisions upon random prompts.', 'let the almighty 8ball judge your friends.', 'have fun ?', 'at this point it\'s just Dank Memer... free forever !', 'know how long your penis is !' ]
const currentMessage = ref(0)

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

const animate = (star: HTMLSpanElement) => {
  star.style.top = rand(50, 90) + '%'
  star.style.left = rand(0, 100) + '%'

  star.style.animation = 'none'
  star.offsetHeight
  star.style.animation = ''
}

function nextMessage() {
  currentMessage.value = (currentMessage.value + 1) % messages.length
}

gsap.registerEffect({
  name: 'swapText',
  effect: (targets: any, config: any) => {
    let tl = gsap.timeline({
      delay: config.delay
    })
    tl.to(targets, {
      opacity: 0,
      duration: config.duration / 2
    })
    tl.add(() => targets[0].innerText = config.text)
    tl.to(targets, {
      opacity: 1,
      duration: config.duration
    })
  },
  defaults: {
    duration: 1
  },
  extendTimeline: true
})

onMounted(() => {
  for (const star of document.getElementsByClassName('magic-star') as HTMLCollectionOf<HTMLSpanElement>) {
    setTimeout(() => {
      animate(star)
      setInterval(() => animate(star), interval.value)
    }, index.value++ * (interval.value / 3))
  }

  let tl = gsap.timeline({repeat: -1})


  tl.swapText('.message', {
    text: messages[currentMessage.value],
    delay: 2
  })
  nextMessage()

  setInterval(() => {
    tl.swapText('.message', {
      text: messages[currentMessage.value],
      delay: 3
    })
    nextMessage()
  }, 3000)
})

</script>

<template>
  <section class="flex flex-col items-center bg-primary-100">
    <h2 class="font-semibold text-4xl text-gray-700">
      Unleash
      <span class="magic font-abril font-normal text-6xl">
          <span class="magic-star">
            <IconStar/>
          </span>
          <span class="magic-star">
            <IconStar/>
          </span>
          <span class="magic-star">
            <IconStar/>
          </span>
         <span class="magic-star">
            <IconStar/>
          </span>
        <span class="magic-text">
          slash commands
        </span>
      </span>
      !
    </h2>
    <div>
      <div class="text-center text-xl">
        <p>Why would you need a fancy experience or RPG bot when you can ...</p>
        <span class="message font-semibold">know how long your penis is !</span>
      </div>
    </div>
    <div class="text-center mt-8">
      <p class="mb-2 text-xl">Wanna give it a <span class="font-abril text-3xl">try</span> ?</p>
      <div class="relative">
        <IconSlashDiscord class="absolute top-1.5 left-1.5"/>
        <input type="text" class="w-[400px] p-3 pl-12 text-gray-100 bg-[#40444b] rounded focus-visible:outline-none">
      </div>
    </div>
  </section>
</template>

<style scoped>
.magic {
  display: inline-block;
  position: relative;
}

.magic-text {
  animation: background-pan 2s linear infinite;
  background: linear-gradient(
      to right,
      #0e4935,
      #19e6a2,
      #8ffad6,
      #0e4935
  );
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}

.magic-star {
  animation: scale 0.7s ease forwards;
  position: absolute;
  display: block;
  height: 23px;
  width: 23px;
}

.magic-star > svg {
  animation: rotate 1s linear infinite;
  display: block;
  opacity: 0.7;
}

@keyframes background-pan {
  from {
    background-position: 0% center;
  }
  to {
    background-position: -200% center;
  }
}

@keyframes scale {
  from, to {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
</style>