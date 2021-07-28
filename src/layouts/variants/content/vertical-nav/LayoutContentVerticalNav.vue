<template>
  <layout-content-vertical-nav :nav-menu-items="navMenuItems">
    <slot></slot>

    <!-- Slot: Navbar -->
    <template #navbar="{ isVerticalNavMenuActive, toggleVerticalNavMenuActive }">
      <div
        class="navbar-content-container"
        :class="{'expanded-search': shallShowFullSearch}"
      >
        <!-- Left Content: Search -->
        <div class="d-flex align-center">
          <v-icon
            v-if="$vuetify.breakpoint.mdAndDown"
            class="me-3"
            @click="toggleVerticalNavMenuActive"
          >
            {{ icons.mdiMenu }}
          </v-icon>
          <app-bar-search
            :shall-show-full-search.sync="shallShowFullSearch"
            :data="appBarSearchData"
            :filter="searchFilterFunc"
            @update:shallShowFullSearch="handleShallShowFullSearchUpdate(isVerticalNavMenuActive, toggleVerticalNavMenuActive)"
          ></app-bar-search>
        </div>

        <!-- Right Content: I18n, Light/Dark, Notification & User Dropdown -->
        <div class="d-flex align-center right-row">
          <app-bar-i18n></app-bar-i18n>
          <app-bar-theme-switcher class="mx-4"></app-bar-theme-switcher>
          <app-bar-notification></app-bar-notification>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </template>

    <!-- Slot: Footer -->
    <template #footer>
      {{ new Date().getFullYear() }} — <strong>Material Admin</strong>
    </template>

    <template #v-app-content>
      <app-customizer class="d-none d-md-block"></app-customizer>
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
import AppBarNotification from '@core/layouts/components/app-bar/AppBarNotification.vue'
import { mdiMenu } from '@mdi/js'

import { getVuetify } from '@core/utils'

// Search Data
import appBarSearchData from '@/assets/app-bar-search-data'

import { ref } from '@vue/composition-api'

export default {
  components: {
    LayoutContentVerticalNav,
    AppCustomizer,

    // App Bar Components
    AppBarSearch,
    AppBarI18n,
    AppBarThemeSwitcher,
    AppBarUserMenu,
    AppBarNotification,
  },
  setup() {
    const $vuetify = getVuetify()

    // Search
    const shallShowFullSearch = ref(false)

    const searchFilterFunc = (item, queryText, itemText) => {
      if (item.header || item.divider) return true

      return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
    }

    // ? Handles case where in <lg vertical nav menu is open and search is triggered using hotkey then searchbox is hidden behind vertical nav menu overlaty
    const handleShallShowFullSearchUpdate = (isVerticalNavMenuActive, toggleVerticalNavMenuActive) => {
      if ($vuetify.breakpoint.mdAndDown && isVerticalNavMenuActive) {
        toggleVerticalNavMenuActive()
      }
    }

    return {
      navMenuItems,
      handleShallShowFullSearchUpdate,

      // Search
      shallShowFullSearch,
      appBarSearchData,
      searchFilterFunc,

      icons: {
        mdiMenu,
      },
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

// ? Handle bg of autocomplete for blured appBar
.v-app-bar.bg-blur {
  .expanded-search {
    ::v-deep .app-bar-autocomplete-box div[role='combobox'] {
      background-color: transparent;
    }

    // ===

    & > .right-row {
      visibility: hidden;
      opacity: 0;
    }

    ::v-deep .app-bar-search-toggler {
      visibility: hidden;
    }
  }
}
</style>
