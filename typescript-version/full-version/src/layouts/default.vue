<script lang="ts" setup>
import navItemsHorizontal from '@/navigation/horizontal'
import navItems from '@/navigation/vertical'
import { useDynamicVhCssProperty, useLayouts } from '@layouts'
import type { NavBarI18n as NavBarI18nType } from '@layouts/components'
import { NavBarI18n, ThemeSwitcher } from '@layouts/components'
import DefaultLayoutWithHorizontalNav from '@layouts/components/DefaultLayoutWithHorizontalNav.vue'
import DefaultLayoutWithVerticalNav from '@layouts/components/DefaultLayoutWithVerticalNav.vue'
import { config } from '@layouts/config'
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
          <span>Navbar Content..</span>
          <NavBarI18n :languages="i18nCompLanguages" />
          <ThemeSwitcher />
        </div>
      </template>

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
