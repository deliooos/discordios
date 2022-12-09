import JSConfetti from "js-confetti";

export default defineNextPlugin((NuxtApp) => {
    const confetti = new JSConfetti()

    return {
        provide: {
            confetti: confetti
        }
    }
})