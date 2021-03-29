<template>
  <div class="app-customizer">
    <v-btn
      icon
      class="app-customizer-toggler rounded-0 rounded-l-xl"
      color="white"
      large
      @click="isCustomizerOpen = !isCustomizerOpen"
    >
      <v-icon>{{ icons.mdiCog }}</v-icon>
    </v-btn>
    <v-navigation-drawer
      v-model="isCustomizerOpen"
      :right="!$vuetify.rtl"
      temporary
      absolute
    >
      <!-- Heading -->
      <div>
        <h3 class="px-4 py-2">
          Customizer
        </h3>
        <v-divider></v-divider>
      </div>

      <!-- Dark Mode -->
      <div class="pa-4">
        <v-switch
          v-model="isDark"
          label="Dark Mode"
        ></v-switch>
      </div>

      <!-- RTL -->
      <div class="pa-4">
        <v-switch
          v-model="isRtl"
          label="RTL"
        ></v-switch>
      </div>

      <div class="pa-4">
        <v-btn-toggle
          v-model="selectedTheme"
          mandatory
          @change="(value) => { themes = themeVariants[value] }"
        >
          <v-btn value="vuexy">
            vuexy
          </v-btn>

          <v-btn value="frest">
            frest
          </v-btn>
        </v-btn-toggle>
      </div>

      <!-- Nav Type -->
      <div
        v-show="$vuetify.breakpoint.lgAndUp"
        class="pa-4"
      >
        <v-btn-toggle
          v-model="appContentLayoutNav"
          mandatory
        >
          <v-btn value="vertical">
            vertical
          </v-btn>

          <v-btn value="horizontal">
            horizontal
          </v-btn>
        </v-btn-toggle>
      </div>

      <!-- Content Width -->
      <div class="pa-4">
        <v-btn-toggle
          v-model="appContentWidth"
          mandatory
        >
          <v-btn value="full">
            full
          </v-btn>

          <v-btn value="boxed">
            boxed
          </v-btn>
        </v-btn-toggle>
      </div>

      <!-- Menu Hidden -->
      <div class="pa-4">
        <v-switch
          v-model="menuIsMenuHidden"
          label="Hide Navigation Menu"
        ></v-switch>
      </div>

      <!-- Vertical Menu Collapsed -->
      <div class="pa-4">
        <v-switch
          v-model="menuIsVerticalNavMini"
          label="Mini Vertical Menu"
        ></v-switch>
      </div>

      <!-- App Bar Type -->
      <v-radio-group
        v-model="appBarType"
        row
        mandatory
        :label="appContentLayoutNav === 'vertical' ? 'AppBar Type' : 'AppBar & Navigation Type'"
      >
        <v-radio
          v-for="appBarType in appBarTypes"
          :key="appBarType"
          :label="appBarType"
          :value="appBarType"
        ></v-radio>
      </v-radio-group>

      <!-- Footer Type -->
      <v-radio-group
        v-model="footerType"
        row
        mandatory
        label="Footer Type"
      >
        <v-radio
          v-for="footerType in footerTypes"
          :key="footerType"
          :label="footerType"
          :value="footerType"
        ></v-radio>
      </v-radio-group>

      <!-- Router Transition -->
      <v-select
        v-model="appRouteTransition"
        :items="routerTransitionOptions"
        outline
      ></v-select>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import useAppConfig from '@core/@app-config/useAppConfig'

import { mdiCog } from '@mdi/js'

import themeVariants from './themeVariants'

export default {
  setup() {
    const isCustomizerOpen = ref(false)
    // eslint-disable-next-line object-curly-newline
    const {
      appContentLayoutNav,
      appContentWidth,
      appRouteTransition,
      menuIsVerticalNavMini,
      menuIsMenuHidden,
      appBarType,
      footerType,
      isDark,
      isRtl,
      themes,
    } = useAppConfig()

    // TODO: Vue 3 Update: Use export const in `./themeVariants.ts` and use computed getter and setter to update the theme
    const selectedTheme = ref('vuexy')

    const appBarTypes = computed(() => {
      const types = ['fixed', 'static', 'hidden']
      if (appContentLayoutNav.value === 'horizontal') types.splice(-1, 1)

      return types
    })

    const footerTypes = ['fixed', 'static', 'hidden']
    const routerTransitionOptions = [
      { text: 'Fab', value: 'fab-transition' },
      { text: 'Fade', value: 'fade-transition' },
      { text: 'Expand', value: 'expand-transition' },
      { text: 'Scale', value: 'scale-transition' },
      { text: 'Scroll X', value: 'scroll-x-transition' },
      { text: 'Scroll X Reverse', value: 'scroll-x-reverse-transition' },
      { text: 'Scroll Y', value: 'scroll-y-transition' },
      { text: 'Scroll Y Reverse', value: 'scroll-y-reverse-transition' },
      { text: 'Slide X', value: 'slide-x-transition' },
      { text: 'Slide X Reverse', value: 'slide-x-reverse-transition' },
      { text: 'Slide Y', value: 'slide-y-transition' },
      { text: 'Slide Y Reverse', value: 'slide-y-reverse-transition' },
    ]

    return {
      isCustomizerOpen,
      selectedTheme,
      appRouteTransition,
      themeVariants,
      appContentLayoutNav,
      appContentWidth,
      menuIsMenuHidden,
      menuIsVerticalNavMini,
      appBarType,
      footerType,
      appBarTypes,
      footerTypes,
      isDark,
      isRtl,
      themes,
      routerTransitionOptions,

      // Icons
      icons: {
        mdiCog,
      },
    }
  },
}
</script>

<style lang="scss">
.app-customizer-toggler {
  position: fixed;
  right: -22px;
  top: 50%;
  transform: translateX(-50%);
  background: var(--v-primary-base);
}

.app-customizer {
  z-index: 6;
}
</style>
