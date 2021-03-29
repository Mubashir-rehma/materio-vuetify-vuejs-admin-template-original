<template>
  <v-app>
    <!-- Navbar -->
    <v-system-bar
      app
      height="60"
      :absolute="appBarType === 'static'"
    >
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown"></v-app-bar-nav-icon>

      <v-toolbar-title>Navbar</v-toolbar-title>
    </v-system-bar>

    <!-- Horizontal Nav Menu -->
    <v-app-bar
      v-if="!menuIsMenuHidden"
      class="navigation-menu"
      app
      :absolute="appBarType === 'static'"
    >
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown"></v-app-bar-nav-icon>

      <v-toolbar-title>Navigation Menu</v-toolbar-title>
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
import AppContentContainer from '@core/layouts/components/app-content-container/AppContentContainer.vue'
import useAppConfig from '@core/@app-config/useAppConfig'

export default {
  components: {
    AppContentContainer,
  },
  setup() {
    const { menuIsMenuHidden, appBarType, footerType } = useAppConfig()

    return {
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
  padding: $content-padding-horizontal-navigation-menu;
  &.app-content-container-boxed {
    padding: $boxed-content-padding-horizontal-navigation-menu;
  }
}
</style>
