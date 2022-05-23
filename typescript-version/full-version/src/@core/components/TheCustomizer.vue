<script setup lang="tsx">
// TODO: Rename this to `TheCustomizer.vue`
// import { useTheme } from 'vuetify'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { useLayouts } from '@layouts'
import { EnumAppContentLayoutNav, EnumContentWidth, EnumFooterType, EnumNavbarType } from '@layouts/enums'

const isNavDrawerOpen = ref(false)
const { isDark } = useThemeConfig()

// const theme = useTheme()
// console.log('theme :>> ', theme)
// const themeLight = theme.getTheme('light')

// theme.setTheme('light', {
//   dark: themeLight.dark,
//   variables: themeLight.variables,
//   colors: {
//     ...themeLight.colors,
//     primary: '#000',
//   },
// })

const {
  navbarType, footerType, isVerticalNavCollapsed, appContentWidth, appContentLayoutNav, horizontalNavType, isAppRtl, isNavbarBlurEnabled,
} = useLayouts()

const perfectScrollbarSettings = {
  maxScrollbarLength: 60,
  wheelPropagation: false,
}
</script>

<template>
  <v-btn
    icon
    class="app-customizer-toggler rounded-l-lg rounded-0"
    @click="isNavDrawerOpen = true"
  >
    <v-icon icon="mdi-cog" />
  </v-btn>
  <v-navigation-drawer
    v-model="isNavDrawerOpen"
    temporary
    width="400"
    position="right"
    class="app-customizer"
  >
    <!-- 👉 Header -->
    <div class="customizer-section d-flex align-center justify-space-between">
      <div>
        <h2>THEME CUSTOMIZER</h2>
        <span class="text-medium-emphasis">Customize and preview in real time</span>
      </div>
      <v-btn
        icon
        variant="text"
        color="secondary"
        @click="isNavDrawerOpen = false"
      >
        <v-icon icon="mdi-close" />
      </v-btn>
    </div>

    <v-divider />

    <PerfectScrollbar
      tag="ul"
      :options="perfectScrollbarSettings"
    >
      <!-- SECTION Theming -->
      <CustomizerSection
        title="THEMING"
        :divider="false"
      >
        <!-- 👉 Skin -->
        <!--
          <p>Skin</p>
          <v-radio-group inline>
          <v-radio
          v-for="skin in skins"
          :key="skin"
          label="skin"
          :value="skin.toLocalLowercase()"
          />
          </v-radio-group>
        -->

        <!-- 👉 Mode -->
        <span>
          Mode
        </span>
        <div class="d-flex align-center">
          <span class="text-medium-emphasis">Light</span>
          <v-switch
            v-model="isDark"
            hide-details
            class="ms-2 mt-0"
            label="Dark"
          />
        </div>

        <!-- 👉 Primary color -->
        <!-- <div v-for="(color, i) in colors" :key="i"></div> -->
      </CustomizerSection>
      <!-- !SECTION -->

      <!-- SECTION LAYOUT -->
      <CustomizerSection title="LAYOUT">
        <!-- 👉 Content Width -->
        <span>Content width</span>

        <v-radio-group
          v-model="appContentWidth"
          inline
          hide-details
        >
          <v-radio
            v-for="key in Object.keys(EnumContentWidth)"
            :key="key"
            :label="key"
            :value="EnumContentWidth[key]"
          />
        </v-radio-group>

        <!-- 👉 Navbar Type -->
        <span class="mt-6 d-block">Navbar Type</span>
        <v-radio-group
          v-model="navbarType"
          inline
          hide-details
        >
          <v-radio
            v-for="key in Object.keys(EnumNavbarType)"
            :key="key"
            :label="key"
            :value="EnumNavbarType[key]"
          />
        </v-radio-group>

        <!-- 👉 Footer Type -->
        <span class="mt-6 d-block">Footer Type</span>
        <v-radio-group
          v-model="footerType"
          inline
          hide-details
        >
          <v-radio
            v-for="key in Object.keys(EnumFooterType)"
            :key="key"
            :label="key"
            :value="EnumFooterType[key]"
          />
        </v-radio-group>

        <!-- 👉 Navbar blur -->
        <div class="mt-6 d-flex align-center">
          <span class="d-block">Navbar Blur</span>
          <v-spacer />
          <v-switch
            v-model="isNavbarBlurEnabled"
            hide-details
            class="ms-2 mt-0"
          />
        </div>
      </CustomizerSection>
      <!-- !SECTION -->

      <!-- SECTION Menu -->
      <CustomizerSection title="Menu">
        <!-- 👉 Menu Type -->
        <span class="d-block">Menu Type</span>
        <v-radio-group
          v-model="appContentLayoutNav"
          inline
          hide-details
        >
          <v-radio
            v-for="key in Object.keys(EnumAppContentLayoutNav)"
            :key="key"
            :label="key"
            :value="EnumAppContentLayoutNav[key]"
          />
        </v-radio-group>

        <!-- 👉 Menu Collapsed -->
        <div class="mt-6 d-flex align-center">
          <span class="d-block">Menu Collapsed</span>
          <v-spacer />
          <v-switch
            v-model="isVerticalNavCollapsed"
            hide-details
            class="ms-2 mt-0"
          />
        </div>
      </CustomizerSection>
      <!-- !SECTION -->

      <!-- SECTION MISC -->
      <CustomizerSection title="MISC">
        <!-- 👉 RTL -->
        <div class="mt-6 d-flex align-center">
          <span class="d-block">RTL</span>
          <v-spacer />
          <v-switch
            v-model="isAppRtl"
            hide-details
            class="ms-2 mt-0"
          />
        </div>
      </CustomizerSection>
      <!-- !SECTION -->
    </PerfectScrollbar>
  </v-navigation-drawer>
</template>

<style lang="scss">
.app-customizer {
  .customizer-section {
    padding: 1.5rem;
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }
}

.app-customizer-toggler {
  position: fixed;
  inset-block-start: 50%;
  inset-inline-end: 0;
  transform: translateY(-50%);
}
</style>
