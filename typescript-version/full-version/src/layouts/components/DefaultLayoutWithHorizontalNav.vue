<script lang="ts" setup>
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import navItemsHorizontal from '@/navigation/horizontal'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import DefaultLayoutWithHorizontalNav from '@layouts/components/DefaultLayoutWithHorizontalNav.vue'

const { appRouteTransition } = useThemeConfig()
</script>

<template>
  <DefaultLayoutWithHorizontalNav :nav-items="navItemsHorizontal">
    <!-- navbar -->
    <template #navbar>
      <NavBarI18n />
      <NavBarNotifications />
      <UserProfile />
    </template>

    <!-- Pages -->
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

    <!-- Footer -->
    <template #footer>
      I am footer
    </template>

    <!-- Customizer -->
    <TheCustomizer />
  </DefaultLayoutWithHorizontalNav>
</template>
