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
const { layoutAttrs, injectSkinClasses } = useSkins()

// ℹ️ This will inject classes in body tag for accurate styling
injectSkinClasses()
</script>

<template>
  <HorizontalNavLayout
    :nav-items="navItems"
    v-bind="layoutAttrs"
  >
    <!-- 👉 navbar -->
    <template #navbar>
      <RouterLink
        to="/"
        class="auth-logo d-flex align-start gap-x-3"
      >
        <!-- eslint-disable vue/no-v-html -->
        <div
          class="text-primary d-flex"
          v-html="themeConfig.app.logo"
        />
        <!-- eslint-enable vue/no-v-html -->

        <h1 class="font-weight-semibold leading-normal text-xl text-uppercase">
          {{ themeConfig.app.title }}
        </h1>
      </RouterLink>
      <VSpacer />
      <VBtn
        icon="mdi-magnify"
        size="small"
        variant="plain"
        color="secondary"
      />
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
