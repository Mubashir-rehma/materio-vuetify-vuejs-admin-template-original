<script lang="ts" setup>
import navItems from '@/navigation/vertical'

// Composable
import { useSkins } from '@core/composable/useSkins'
import { useThemeConfig } from '@core/composable/useThemeConfig'

// Components
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
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
        <ThemeSwitcher />
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
      <div class="h-100 d-flex align-center justify-space-between">
        <!-- 👉 Footer: left content -->
        <span class="d-flex align-center">
          &copy;
          {{ new Date().getFullYear() }}
          Made With
          <v-icon
            icon="i-mdi-heart-outline"
            color="error"
            size="1.25rem"
            class="mx-1"
          />
          By <a
            href="https://themeselection.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary ms-1"
          >ThemeSelection</a>
        </span>
        <!-- 👉 Footer: right content -->
        <span class="d-md-flex gap-x-4 text-primary d-none">
          <a
            href="https://themeselection.com/license/"
            target="noopener noreferrer"
          >License</a>
          <a
            href="https://themeselection.com/"
            target="noopener noreferrer"
          >More Themes</a>
          <a
            href="https://demos.themeselection.com/xxx/documentation"
            target="noopener noreferrer"
          >Documentation</a>
        </span>
      </div>
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </VerticalNavLayout>
</template>
