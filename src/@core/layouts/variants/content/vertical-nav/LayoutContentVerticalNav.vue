<template>
  <v-app :class="{'nav-drawer-mini': menuIsVerticalNavMini}">
    <v-navigation-drawer
      v-if="!menuIsMenuHidden"
      ref="layoutDrawer"
      v-model="toggleVerticalNavMenu"
      app
      :right="$vuetify.rtl"
      :expand-on-hover="menuIsVerticalNavMini"
    >
      <vertical-nav-menu />
    </v-navigation-drawer>

    <v-app-bar
      v-if="appBarType !== 'hidden'"
      app
      :absolute="appBarType === 'static'"
      flat
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        @click="toggleVerticalNavMenu = true"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>menuIsVerticalNavMini: {{ menuIsVerticalNavMini }}</v-toolbar-title>
    </v-app-bar>

    <slot name="v-app-content"></slot>

    <v-main>
      <app-content-container>
        <slot></slot>
      </app-content-container>
    </v-main>

    <v-footer
      v-if="footerType !== 'hidden'"
      app
      inset
      :absolute="footerType === 'static'"
      padless
    >
      <v-col cols="12">
        {{ new Date().getFullYear() }} — <strong>Material Admin</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import AppContentContainer from '@core/layouts/components/app-content-container/AppContentContainer.vue'
import { getVuetify } from '@/@core/utils'
import useAppConfig from '@core/@app-config/useAppConfig'
import VerticalNavMenu from '@/@core/layouts/components/vertical-nav-menu/VerticalNavMenu.vue'

export default {
  components: {
    AppContentContainer,
    VerticalNavMenu,
  },
  setup() {
    const $vuetify = getVuetify()

    const toggleVerticalNavMenu = ref(true)

    // eslint-disable-next-line object-curly-newline
    const { menuIsVerticalNavMini, menuIsMenuHidden, appBarType, footerType } = useAppConfig()

    // TODO: Check do we need below watch
    watch(
      () => $vuetify?.breakpoint.mdAndDown,
      value => {
        toggleVerticalNavMenu.value = !value
      },
      {
        immediate: true,
      },
    )

    return {
      toggleVerticalNavMenu,
      menuIsVerticalNavMini,
      menuIsMenuHidden,
      appBarType,
      footerType,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/layouts/styles/_variables';

.app-content-container {
  padding: $content-padding-vertical-navigation-menu;
}

// Vuetify Fix
// https://github.com/vuetifyjs/vuetify/issues/13327
$nav-drawer-mini-width: 56px;

.v-application {
  &.nav-drawer-mini {
    .v-main {
      padding-left: $nav-drawer-mini-width !important;
    }
    .v-footer,
    .v-app-bar {
      left: $nav-drawer-mini-width !important;
    }
  }
}
</style>
