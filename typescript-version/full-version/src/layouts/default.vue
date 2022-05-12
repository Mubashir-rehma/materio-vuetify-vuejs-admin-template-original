<script lang="ts" setup>
import navItemsHorizontal from '@/navigation/horizontal'
import navItems from '@/navigation/vertical'
import { useDynamicVhCssProperty, useLayouts } from '@layouts'
import type { NavBarI18n as NavBarI18nType } from '@layouts/components'
import { NavBarI18n, Notifications, ThemeSwitcher, UserProfile } from '@layouts/components'
import DefaultLayoutWithHorizontalNav from '@layouts/components/DefaultLayoutWithHorizontalNav.vue'
import DefaultLayoutWithVerticalNav from '@layouts/components/DefaultLayoutWithVerticalNav.vue'
import { config } from '@layouts/config'
import type { Notification } from '@layouts/types'
const { width: windowWidth } = useWindowSize()
const { locale } = useI18n()

// TODO: Use lazy imports
// const DefaultLayoutWithHorizontalNav = () => import('@layouts/components').then(({ DefaultLayoutWithHorizontalNav: comp }) => comp)
// const DefaultLayoutWithVerticalNav = () => import('@layouts/components').then(({ DefaultLayoutWithVerticalNav: comp }) => comp)

useDynamicVhCssProperty()
const { appContentLayoutNav } = useLayouts()

// Navbar Components

const i18nCompLanguages: InstanceType<typeof NavBarI18nType>['languages'] = [
  {
    label: 'English',
    flagpackClass: 'i-flagpack-us',
    i18nLang: 'en',
  },
  {
    label: 'French',
    flagpackClass: 'i-flagpack-fr',
    i18nLang: 'fr',
  },
  {
    label: 'Arabic',
    flagpackClass: 'i-flagpack-ae',
    i18nLang: 'ar',
  },
]

const notifications: Notification[] = [
  {
    img: 'https://cdn.vuetifyjs.com/images/john.jpg',
    title: 'Congratulation John!',
    subtitle: 'You have been awarded with 1 year free subscription to Premium plan.',
    time: '2 minutes ago',
  },
  {
    text: 'Tom Holland',
    title: 'New user registered.',
    subtitle: 'Registered via SSO',
    time: 'Yesterday',
  },
  {
    icon: 'mdi-home',
    title: 'New user registered.',
    subtitle: 'Registered via SSO',
    time: 'Yesterday',
  },
]
</script>

<template>
  <template v-if="appContentLayoutNav === 'vertical'">
    <DefaultLayoutWithVerticalNav :nav-items="navItems">
      <!-- navbar -->
      <template #navbar="{ toggleVerticalOverlayNavActive }">
        <div style="display: flex; height: 100%; align-items: center;">
          <div
            v-if="windowWidth < config.app.overlayNavFromBreakpoint"
            class="i-mdi-menu cursor-pointer"
            @click="toggleVerticalOverlayNavActive(true)"
          />

          <v-spacer />

          <NavBarI18n :languages="i18nCompLanguages" />
          <ThemeSwitcher />
          <Notifications
            :notifications-count="10"
            :notifications="notifications"
          />
          <UserProfile />
        </div>
      </template>

      <!-- Customizer -->
      <Customizer />

      <!-- Pages -->
      <div style="padding: 2rem;">
        <router-view />
      </div>

      <!-- Footer -->
      <template #footer>
        I am footer
      </template>
    </DefaultLayoutWithVerticalNav>
  </template>
  <template v-else>
    <DefaultLayoutWithHorizontalNav :nav-items="navItemsHorizontal">
      <!-- navbar -->
      <template #navbar>
        <div>
          <span>Navbar Content..</span>
          <NavBarI18n :languages="i18nCompLanguages" />
          <ThemeSwitcher />
        </div>
      </template>

      <!-- Pages -->
      <router-view />

      <!-- Footer -->
      <template #footer>
        I am footer
      </template>
    </DefaultLayoutWithHorizontalNav>
  </template>
</template>

<style lang="scss">
@use "@layouts/styles/default_layout";
</style>
