<script lang="ts" setup>
import navItemsHorizontal from '@/navigation/horizontal'
import navItems from '@/navigation/vertical'
import { useDynamicVhCssProperty, useLayouts } from '@layouts'
import DefaultLayoutWithHorizontalNav from '@layouts/components/DefaultLayoutWithHorizontalNav.vue'
import DefaultLayoutWithVerticalNav from '@layouts/components/DefaultLayoutWithVerticalNav.vue'
import { config } from '@layouts/config'
const { width: windowWidth } = useWindowSize()

// TODO: Use lazy imports
// const DefaultLayoutWithHorizontalNav = () => import('@layouts/components').then(({ DefaultLayoutWithHorizontalNav: comp }) => comp)
// const DefaultLayoutWithVerticalNav = () => import('@layouts/components').then(({ DefaultLayoutWithVerticalNav: comp }) => comp)

useDynamicVhCssProperty()
const { appContentLayoutNav } = useLayouts()
</script>

<template>
  <template v-if="appContentLayoutNav === 'vertical'">
    <DefaultLayoutWithVerticalNav :nav-items="navItems">
      <!-- navbar -->
      <template #navbar="{ toggleVerticalOverlayNavActive }">
        <div style="display: flex; height: 100%; align-items: center;">
          <button
            v-if="windowWidth < config.app.overlayNavFromBreakpoint"
            @click="toggleVerticalOverlayNavActive(true)"
          >
            Toggle
          </button>
          <span>Navbar Content..</span>
        </div>
      </template>

      <!-- Pages -->
      <div style="padding:2rem">
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
