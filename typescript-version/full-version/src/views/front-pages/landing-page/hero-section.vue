<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import { useTheme } from 'vuetify'
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'
import darkBg from '@images/front-pages/backgrounds/hero-bg-dark.png'
import lightBg from '@images/front-pages/backgrounds/hero-bg.png'
import heroDashboardImgDark from '@images/front-pages/landing-page/hero-dashboard-dark.png'
import heroDashboardImgLight from '@images/front-pages/landing-page/hero-dashboard-light.png'

import heroElementsImgDark from '@images/front-pages/landing-page/hero-elements-dark.png'
import heroElementsImgLight from '@images/front-pages/landing-page/hero-elements-light.png'

const theme = useTheme()
const isDark = ref(theme.name)

const heroBgUrl = computed(() => {
  if (isDark.value === 'dark')
    return darkBg
  else
    return lightBg
})

const heroElementsImg = useGenerateImageVariant(heroElementsImgLight, heroElementsImgDark)
const heroDashboardImg = useGenerateImageVariant(heroDashboardImgLight, heroDashboardImgDark)

const { x, y } = useMouse({ touch: false })

console.log('window.innerWidth :>> ', window.innerWidth)
console.log('window.innerHeight :>> ', window.innerHeight)

const translateMouse = computed(() => (speed: number) => {
  if (typeof window !== 'undefined') {
    console.log(x.value * speed, y.value * speed)

    // const positionY = computed(() => (window.innerHeight - (y.value * speed)))

    return { transform: `translate(${(window.innerWidth - (x.value * speed)) / 100}px,${(window.innerHeight - (y.value * speed)) / 100}px` }
  }
})
</script>

<template>
  <section
    id="home"
    :style="{ 'background-color': 'rgb(var(--v-theme-surface))' }"
  >
    <div
      id="landingHero"
      class="landing-hero"
      :style="{ backgroundImage: `url(${heroBgUrl})` }"
    >
      <VContainer>
        <div class="hero-text-box text-center px-6">
          <h5 class="text-primary text-h4 font-weight-bold text-wrap mb-4">
            <p class="mb-0">
              All in one sass application
            </p>
            <p class="mb-0">
              for your business
            </p>
          </h5>
          <div class="text-body-1 pb-8 font-weight-medium">
            <p class="mb-0">
              No coding required to make customization
            </p>
            <p class="mb-0">
              The live customer has everything your marketing needs
            </p>
          </div>
          <VBtn :to="{ name: 'front-pages-landing-page', hash: `#pricing-plan` }">
            Get Early Access
          </VBtn>
        </div>
        <div class="position-relative">
          <div class="hero-dashboard-img text-center">
            <RouterLink
              to="/"
              target="_blank"
            >
              <img
                :src="heroDashboardImg"
                class="mx-auto cursor-pointer w-75"
                :style="translateMouse(5)"
              >
            </RouterLink>
          </div>
          <div class="hero-elements-img">
            <RouterLink
              to="/"
              target="_blank"
            >
              <img
                class="cursor-pointer w-100"
                :src="heroElementsImg"
                :style="translateMouse(2.5)"
                target="_blank"
              >
            </RouterLink>
          </div>
        </div>
      </VContainer>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: block;
  padding-block-end: 6.25rem;
}

.landing-hero {
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-block-start: 9rem;
}

.hero-elements-img {
  position: absolute;
  inline-size: 100%;
  inset-block-start:50%;
  inset-inline-start: 50%;
  transform: translate(-50%,-50%);
}

.container {
  margin-inline: auto;
  max-inline-size: 85vw;
}

.feature-cards {
  margin-block-start: 6.25rem;
}
</style>
