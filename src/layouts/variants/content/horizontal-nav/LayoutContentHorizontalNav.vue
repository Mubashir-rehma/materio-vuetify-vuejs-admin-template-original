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
          <app-bar-search
            :shall-show-full-search.sync="shallShowFullSearch"
            :data="appBarSearchData"
            :filter="searchFilterFunc"
          ></app-bar-search>
        </div>

        <!-- Right Content: I18n, Light/Dark, Notification & User Dropdown -->
        <div class="d-flex align-center">
          <app-bar-i18n></app-bar-i18n>
          <app-bar-theme-switcher class="mx-4"></app-bar-theme-switcher>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
      <v-overlay
        :value="$store.state.app.shallContentShowOverlay"
        z-index="5"
        absolute
        class="system-bar-overlay"
      ></v-overlay>
    </template>

    <!-- App Content -->
    <template #v-app-content>
      <app-customizer></app-customizer>
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

// Search Data
import appBarSearchData from '@/assets/app-bar-search-data'

import { ref } from '@vue/composition-api'

export default {
  components: {
    LayoutContentHorizontalNav,
    AppCustomizer,

    // App Bar Components
    AppBarSearch,
    AppBarI18n,
    AppBarThemeSwitcher,
    AppBarUserMenu,
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
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar-content-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
}
</style>
