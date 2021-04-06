<template>
  <layout-content-vertical-nav :nav-menu-items="navMenuItems">
    <slot></slot>
    <template #navbar>
      <div class="d-flex justify-space-between align-center flex-grow-1">
        <!-- Left Content: Search -->
        <div>
          <v-app-bar-nav-icon
            v-if="$vuetify.breakpoint.mdAndDown"
          ></v-app-bar-nav-icon>
          <app-bar-search></app-bar-search>
        </div>

        <!-- Right Content: I18n, Light/Dark, Notification & User Dropdown -->
        <div class="d-flex align-center">
          <app-bar-i18n></app-bar-i18n>
          <app-bar-theme-switcher class="mx-4"></app-bar-theme-switcher>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </template>
    <template #v-app-content>
      <app-customizer></app-customizer>
    </template>
  </layout-content-vertical-nav>
</template>

<script>
import LayoutContentVerticalNav from '@/@core/layouts/variants/content/vertical-nav/LayoutContentVerticalNav.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import navMenuItems from '@/navigation/vertical'

// App Bar Components
import AppBarSearch from '@core/layouts/components/app-bar/AppBarSearch.vue'
import AppBarI18n from '@core/layouts/components/app-bar/AppBarI18n.vue'
import AppBarThemeSwitcher from '@core/layouts/components/app-bar/AppBarThemeSwitcher.vue'
import AppBarUserMenu from '@core/layouts/components/app-bar/AppBarUserMenu.vue'

export default {
  components: {
    LayoutContentVerticalNav,
    AppCustomizer,

    // App Bar Components
    AppBarSearch,
    AppBarI18n,
    AppBarThemeSwitcher,
    AppBarUserMenu,
  },
  setup() {
    return {
      navMenuItems,
    }
  },
}
</script>
