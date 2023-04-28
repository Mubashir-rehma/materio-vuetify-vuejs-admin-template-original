<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useShepherd } from 'vue-shepherd'
import { useDisplay } from 'vuetify'
import { useThemeConfig } from '@/@core/composable/useThemeConfig'

const route = useRoute()
const display = useDisplay()
const { appContentLayoutNav } = useThemeConfig()

// 👉 Hotkey
const { ctrl_k, meta_k } = useMagicKeys()

// 👉 Tour initailization
let tour = null

// 👉 watch command palette and route change
watch([ctrl_k, meta_k, () => route.path], () => {
  if (tour.isActive())
    tour.cancel()
})

onMounted(() => {
  const verticalNavToggleBtn = document.querySelector('#vertical-nav-toggle-btn')
  const navMenu = document.querySelector('.layout-vertical-nav') || document.querySelector('.layout-horizontal-nav')
  const navbar = document.querySelector('.layout-navbar')

  tour = useShepherd({
    useModalOverlay: true,
    stepsContainer: document.querySelector('.layout-wrapper'),
    modelContainer: document.querySelector('.layout-wrapper'),
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
    },
  })

  //  👉 Tour steps
  tour.addSteps([
    {
      id: 'welcome',
      title: 'Welcome',
      arrow: true,
      attachTo: { element: navbar, on: 'bottom' },
      text: 'Welcome to our tour page, Guide users to the key features of the product.',
      buttons: [
        {
          action: tour.cancel,
          classes: 'backBtnClass',
          text: 'Back',
        },
        {
          action: tour.next,
          text: 'Next',
          classes: 'nextBtnClass',
        },
      ],
    },
    {
      id: display.mdAndDown.value ? 'navigationMobile' : 'navigation',
      title: 'Navigation Menu',
      arrow: true,
      attachTo: { element: display.mdAndDown.value ? verticalNavToggleBtn : navMenu, on: display.mdAndDown.value ? 'bottom' : appContentLayoutNav.value === 'horizontal' ? 'bottom' : 'right' },
      text: display.mdAndDown.value ? 'open the navigation menu by clicking on this icon' : 'You can navigate in admin template via navigation menu',
      buttons: [
        {
          label: 'Back',
          text: 'Back',
          action: tour.back,
          classes: 'backBtnClass',
        },
        {
          label: 'Next',
          text: 'Next',
          action: tour.next,
          classes: 'nextBtnClass',
        },
      ],
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      arrow: true,
      attachTo: { element: document.querySelector('.nav-group'), on: appContentLayoutNav.value === 'horizontal' ? 'bottom' : 'right' },
      text: 'See your product in action with a live dashboard featuring important metrics.',
      buttons: [
        {
          label: 'Back',
          text: 'Back',
          action: tour.back,
          classes: 'backBtnClass',
        },
        {
          label: 'Next',
          text: 'Next',
          action: tour.next,
          classes: 'nextBtnClass',
        },
      ],
      showOn: () => display.lgAndUp.value,
    },
    {
      id: 'notification',
      title: 'Notifications',
      arrow: true,
      attachTo: { element: document.querySelector('#notification-btn'), on: 'bottom' },
      text: 'Manage your notifications and stay up-to-date with latest updates.',
      buttons: [
        {
          label: 'Back',
          text: 'Back',
          action: tour.back,
          classes: 'backBtnClass',
        },
        {
          label: 'Next',
          text: 'Next',
          action: tour.next,
          classes: 'nextBtnClass',
        },
      ],
    },
    {
      id: 'buyNow',
      attachTo: { element: document.querySelector('#buy-now-btn'), on: 'top' },
      arrow: true,
      title: 'Buy Now',
      text: 'Ready to take your business to the next level? Buy now and start your journey with us!',
      buttons: [
        {
          label: 'Back',
          text: 'Back',
          action: tour.back,
          classes: 'backBtnClass',
        },
        {
          label: 'Next',
          text: 'Next',
          action: tour.next,
          classes: 'nextBtnClass',
        },
      ],
    },
  ])
})
</script>

<template>
  <div>
    <VCard
      title="Tour"
    >
      <VCardText>
        <VBtn
          variant="outlined"
          @click="() => { tour && tour.start() }"
        >
          Start Tour
        </VBtn>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@/@core/scss/template/libs/shepherd.scss";
</style>
