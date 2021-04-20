<template>
  <v-app
    :class="[{'nav-drawer-mini': menuIsVerticalNavMini}, {'content-full': appContentWidth === 'full'}]"
    class="content-layout vertical-nav"
  >
    <v-navigation-drawer
      v-if="!menuIsMenuHidden"
      ref="layoutDrawer"
      v-model="isVerticalNavMenuActive"
      app
      :right="$vuetify.rtl"
      mini-variant-width="68"
      :expand-on-hover="menuIsVerticalNavMini"
      color="#f4f5fa"
      class="app-navigation-menu"
    >
      <vertical-nav-menu :nav-menu-items="navMenuItems" />
    </v-navigation-drawer>

    <v-app-bar
      v-if="appBarType !== 'hidden'"
      ref="refAppBar"
      app
      :absolute="appBarType === 'static'"
      flat
      :elevate-on-scroll="appBarType !== 'static'"
      :elevation="appBarType !== 'static' ? 3 : 0"
      class="mx-auto app-bar-static"
      :class="{'px-5 app-bar-shinked': appBarType === 'fixed' && scrollY > 50}"
      :color="appBarColor"
    >
      <slot
        name="navbar"
        :isVerticalNavMenuActive="isVerticalNavMenuActive"
        :toggleVerticalNavMenuActive="toggleVerticalNavMenuActive"
      ></slot>
    </v-app-bar>

    <slot name="v-app-content"></slot>

    <v-main>
      <app-content-container>
        <slot></slot>
      </app-content-container>
    </v-main>
    <v-overlay
      :value="$store.state.app.shallContentShowOverlay"
      z-index="4"
      absolute
      class="content-overlay"
    ></v-overlay>

    <v-footer
      v-if="footerType !== 'hidden'"
      app
      inset
      :absolute="footerType === 'static'"
      padless
      :class="{'mx-auto': appContentWidth !== 'full'}"
      :color="footerType === 'static' ? 'transparent' : null"
    >
      <v-col cols="12">
        {{ new Date().getFullYear() }} — <strong>Material Admin</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { ref, watch, watchEffect } from '@vue/composition-api'
import AppContentContainer from '@core/layouts/components/app-content-container/AppContentContainer.vue'
import { getVuetify } from '@/@core/utils'
import useAppConfig from '@core/@app-config/useAppConfig'
import VerticalNavMenu from '@core/layouts/components/vertical-nav-menu/VerticalNavMenu.vue'
import { useWindowScroll } from '@vueuse/core'

export default {
  components: {
    AppContentContainer,
    VerticalNavMenu,
  },
  props: {
    navMenuItems: {
      type: Array,
      required: true,
    },
  },
  setup() {
    // eslint-disable-next-line object-curly-newline
    const { menuIsVerticalNavMini, menuIsMenuHidden, appBarType, footerType, appContentWidth } = useAppConfig()
    const $vuetify = getVuetify()

    const refAppBar = ref(null)
    const appBarColor = ref('transparent')
    watchEffect(
      () => {
        if (refAppBar.value) {
          appBarColor.value = refAppBar.value.hideShadow || appBarType.value === 'static' ? 'transparent' : 'white'
        }
      },
      { flush: 'post' },
    )

    const isVerticalNavMenuActive = ref(true)

    // TODO: Check do we need below watch
    watch(
      () => $vuetify?.breakpoint.mdAndDown,
      value => {
        isVerticalNavMenuActive.value = !value
      },
      {
        immediate: true,
      },
    )

    const toggleVerticalNavMenuActive = () => {
      isVerticalNavMenuActive.value = !isVerticalNavMenuActive.value
    }

    const { y: scrollY } = useWindowScroll()

    return {
      isVerticalNavMenuActive,
      toggleVerticalNavMenuActive,
      menuIsVerticalNavMini,
      menuIsMenuHidden,
      appBarType,
      footerType,
      appBarColor,
      appContentWidth,
      scrollY,

      // Template ref
      refAppBar,
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
$nav-drawer-mini-width: 68px;

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

  .v-app-bar,
  .v-footer {
    max-width: calc(1440px - (1.72rem * 2));

    @at-root .v-application.content-full {
      .v-footer,
      .v-app-bar {
        max-width: unset;
        margin-left: $content-padding-vertical-navigation-menu !important;
        margin-right: $content-padding-vertical-navigation-menu !important;
      }
    }

    @media screen and (max-width: 1711px) {
      margin-left: 1.72rem !important;
      margin-right: 1.72rem !important;
    }
  }

  .v-app-bar {
    border-radius: 0 0 14px 14px !important;

    &.app-bar-static {
      will-change: padding, background-color;
      transition: padding 0.2s ease, background-color 0.18s ease;

      ::v-deep > .v-toolbar__content {
        padding: 0;
      }
    }
  }
}
</style>
