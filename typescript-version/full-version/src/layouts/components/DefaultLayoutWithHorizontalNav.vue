<script lang="ts" setup>
import navItems from '@/navigation/horizontal'

// Composable
import { useSkins } from '@core/composable/useSkins'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { HorizontalNavLayout } from '@layouts'

// Components
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
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
      <NavBarI18n />
      <NavBarNotifications />
      <UserProfile />
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
      <span>My custom content</span>
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </HorizontalNavLayout>
</template>
