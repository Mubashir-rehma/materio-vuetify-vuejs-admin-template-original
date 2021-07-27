<template>
  <layout-content-horizontal-nav :nav-menu-items="navMenuItems">
    <!-- Default Slot -->
    <slot></slot>

    <!-- Navbar -->
    <template #navbar>
      <div
        class="navbar-content-container"
        :class="{'expanded-search': shallShowFullSearch}"
      >
        <!-- Left Content: Search -->
        <div class="d-flex align-center">
          <v-app-bar-nav-icon
            v-if="$vuetify.breakpoint.mdAndDown"
          ></v-app-bar-nav-icon>
          <router-link
            to="/"
            class="d-flex align-center text-decoration-none"
          >
            <v-img
              :src="appLogo"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3"
            ></v-img>
            <h2 class="app-title text--primary">
              {{ appName }}
            </h2>
          </router-link>
        </div>

        <!-- Right Content: I18n, Light/Dark, Notification & User Dropdown -->
        <div class="d-flex align-center">
          <app-bar-search
            :shall-show-full-search.sync="shallShowFullSearch"
            :data="appBarSearchData"
            :filter="searchFilterFunc"
            class="me-4"
          ></app-bar-search>
          <app-bar-i18n></app-bar-i18n>
          <app-bar-theme-switcher class="mx-4"></app-bar-theme-switcher>
          <app-bar-notification></app-bar-notification>
          <app-bar-user-menu class="ms-2"></app-bar-user-menu>
        </div>
      </div>
      <v-overlay
        :value="$store.state.app.shallContentShowOverlay"
        z-index="5"
        absolute
        class="system-bar-overlay"
      ></v-overlay>
    </template>

    <!-- Slot: footer -->
    <template #footer>
      {{ new Date().getFullYear() }} — <strong>Material Admin</strong>
    </template>

    <!-- App Content -->
    <template #v-app-content>
      <app-customizer class="d-none d-md-block"></app-customizer>
    </template>
  </layout-content-horizontal-nav>
</template>

<script>
import LayoutContentHorizontalNav from '@core/layouts/variants/content/horizontal-nav/LayoutContentHorizontalNav.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import navMenuItems from '@/navigation/horizontal'

// App Bar Components
import AppBarSearch from '@core/layouts/components/app-bar/AppBarSearch.vue'
import AppBarI18n from '@core/layouts/components/app-bar/AppBarI18n.vue'
import AppBarThemeSwitcher from '@core/layouts/components/app-bar/AppBarThemeSwitcher.vue'
import AppBarUserMenu from '@core/layouts/components/app-bar/AppBarUserMenu.vue'
import AppBarNotification from '@core/layouts/components/app-bar/AppBarNotification.vue'

// Search Data
import appBarSearchData from '@/assets/app-bar-search-data'

import { ref } from '@vue/composition-api'

import themeConfig from '@themeConfig'

export default {
  components: {
    LayoutContentHorizontalNav,
    AppCustomizer,

    // App Bar Components
    AppBarSearch,
    AppBarI18n,
    AppBarThemeSwitcher,
    AppBarUserMenu,
    AppBarNotification,
  },
  setup() {
    // Search
    const shallShowFullSearch = ref(false)

    const searchFilterFunc = (item, queryText, itemText) => {
      // console.log('queryText :>> ', queryText)
      // console.log('itemText :>> ', itemText)
      if (item.header || item.divider) return true

      return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
    }

    return {
      navMenuItems,

      // Search
      shallShowFullSearch,
      appBarSearchData,
      searchFilterFunc,

      // App Config
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,
    }
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.navbar-content-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
}
</style>
