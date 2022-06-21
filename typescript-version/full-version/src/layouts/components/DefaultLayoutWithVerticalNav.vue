<script lang="ts" setup>
import navItems from '@/navigation/vertical'

// Composable
import { useSkins } from '@core/composable/useSkins'
import { useThemeConfig } from '@core/composable/useThemeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

// @layouts plugin
import { VerticalNavLayout, useLayouts } from '@layouts'

// `layoutAttrs` provides skin classes and vertical nav props for semi-dark skin styling
const { layoutAttrs } = useSkins()

const { appRouteTransition } = useThemeConfig()
const { width: windowWidth } = useWindowSize()
const { isLessThanOverlayNavBreakpoint } = useLayouts()
</script>

<template>
  <VerticalNavLayout
    :nav-items="navItems"
    v-bind="layoutAttrs"
  >
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <div
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          class="i-mdi-menu cursor-pointer"
          @click="toggleVerticalOverlayNavActive(true)"
        />

        <v-spacer />

        <NavBarI18n />
        <NavbarThemeSwitcher />
        <NavBarNotifications />
        <UserProfile />
      </div>
    </template>

    <!-- 👉 Pages -->
    <router-view v-slot="{ Component, route }">
      <transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <component
          :is="Component"
          :key="route.path"
        />
      </transition>
    </router-view>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </VerticalNavLayout>
</template>
