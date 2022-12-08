import JSConfetti from "js-confetti"

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            confetti: new JSConfetti()
        }
    }
})