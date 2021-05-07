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
      width="260"
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
      :class="{ 'px-5 app-bar-shinked': appBarType === 'fixed' && scrollY }"
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
import { ref, watch } from '@vue/composition-api'
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
      appContentWidth,
      scrollY,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/layouts/styles/_variables';

.app-content-container {
  padding: $content-padding-vertical-navigation-menu;
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

// Vuetify Fix
// https://github.com/vuetifyjs/vuetify/issues/13327
$nav-drawer-mini-width: 68px;

.v-application {
  .v-main,
  .v-footer {
    transition-duration: 0.3s;
  }

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

    @at-root .v-application {
      &.content-full {
        .v-footer,
        .v-app-bar {
          max-width: unset;
          margin-left: $content-padding-vertical-navigation-menu !important;
          margin-right: $content-padding-vertical-navigation-menu !important;
        }
      }
      &:not(.nav-drawer-mini) {
        @media screen and (max-width: 1711px) {
          .v-footer,
          .v-app-bar {
            margin-left: 1.72rem !important;
            margin-right: 1.72rem !important;
          }
        }
      }
      &.nav-drawer-mini {
        @media screen and (max-width: 1523px) {
          .v-footer,
          .v-app-bar {
            margin-left: 1.72rem !important;
            margin-right: 1.72rem !important;
          }
        }
      }
    }
  }

  .v-app-bar {
    border-radius: 0 0 14px 14px !important;
    &.v-toolbar:not(.app-bar-shinked) {
      background-color: transparent;
    }

    &.app-bar-static {
      will-change: padding, background-color;
      transition: padding 0.2s ease, background-color 0.18s ease, left 0.3s ease;

      &.v-toolbar.v-sheet:not(.v-app-bar--is-scrolled) {
        box-shadow: none !important;
      }

      ::v-deep > .v-toolbar__content {
        padding: 0;
      }
    }
  }
}

@include theme(v-app-bar) using ($material) {
  &.v-toolbar.app-bar-shinked {
    background-color: map-deep-get($material, 'cards');
  }
}

.v-application.content-layout {
  @media #{map-get($display-breakpoints, 'md-and-down')} {
    .v-main,
    .v-footer,
    .v-app-bar {
      // TODO: This is not working
      max-width: unset;
      left: 0 !important;
      padding-left: 0 !important;
    }
  }
}
</style>
