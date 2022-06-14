<script lang="ts" setup>
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import navItems from '@/navigation/vertical'
import { useSkins } from '@core/composable/useSkins'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { useLayouts } from '@layouts'
import { ThemeSwitcher } from '@layouts/components'
import DefaultLayoutWithVerticalNav from '@layouts/components/DefaultLayoutWithVerticalNav.vue'

const { appRouteTransition } = useThemeConfig()
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
    </div>

    <!-- Footer -->
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
        <span class="d-flex gap-x-4 text-primary">
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

    <!-- Customizer -->
    <TheCustomizer />
  </DefaultLayoutWithVerticalNav>
</template>
