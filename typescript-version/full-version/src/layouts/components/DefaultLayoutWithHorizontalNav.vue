<script lang="ts" setup>
import navItems from '@/navigation/horizontal'
import { themeConfig } from '@themeConfig'

// Composable
import { useSkins } from '@core/composable/useSkins'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { HorizontalNavLayout } from '@layouts'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

const { appRouteTransition } = useThemeConfig()
const { layoutAttrs } = useSkins()
</script>

<template>
  <HorizontalNavLayout
    :nav-items="navItems"
    v-bind="layoutAttrs"
  >
    <!-- 👉 navbar -->
    <template #navbar>
      <div class="d-flex align-items-center">
        <!-- 👉 App logo -->
        <!-- eslint-disable vue/no-v-html -->
        <div
          class="app-logo text-primary mr-3"
          v-html="themeConfig.app.logo"
        />
        <!-- eslint-disable vue/no-v-html -->
        <h1 class="app-title text-high-emphasis text-xl text-uppercase font-weight-semibold">
          {{ themeConfig.app.title }}
        </h1>
      </div>
      <VSpacer />
      <NavBarI18n class="me-2" />
      <NavbarThemeSwitcher class="me-2" />
      <NavBarNotifications class="me-2" />
      <UserProfile />
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component, route }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component
          :is="Component"
          :key="route.path"
        />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </HorizontalNavLayout>
</template>
