<script lang="ts" setup>
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import navItems from '@/navigation/vertical'
import { useSkins } from '@core/composable/useSkins'
import { useLayouts } from '@layouts'
import { ThemeSwitcher } from '@layouts/components'
import DefaultLayoutWithVerticalNav from '@layouts/components/DefaultLayoutWithVerticalNav.vue'

const { layoutAttrs } = useSkins()
const { width: windowWidth } = useWindowSize()
const { isLessThanOverlayNavBreakpoint } = useLayouts()
</script>

<template>
  <DefaultLayoutWithVerticalNav
    :nav-items="navItems"
    v-bind="layoutAttrs"
  >
    <!-- navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div style="display: flex; height: 100%; align-items: center;">
        <div
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          class="i-mdi-menu cursor-pointer"
          @click="toggleVerticalOverlayNavActive(true)"
        />

        <v-spacer />

        <NavBarI18n />
        <ThemeSwitcher />
        <NavBarNotifications />
        <UserProfile />
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

    <!-- Customizer -->
    <TheCustomizer />
  </DefaultLayoutWithVerticalNav>
</template>
