<script setup lang="tsx">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { EnumSkins } from '@core/enums'
import { useLayouts } from '@layouts'
import { EnumAppContentLayoutNav, EnumContentWidth, EnumFooterType, EnumNavbarType } from '@layouts/enums'

// import { useTheme } from 'vuetify'

const isNavDrawerOpen = ref(false)
const { isDark, skin } = useThemeConfig()

// 👉 Primary Color
const theme = useTheme()
const initialThemeColors = JSON.parse(JSON.stringify(theme.current.value.colors))
const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

const setPrimaryColor = (color: string) => {
  theme.themes.value.light.colors.primary = color
  theme.themes.value.dark.colors.primary = color

  // setTheme('light', themes.value.light)
  // setTheme('dark', themes.value.dark)
}

const {
  navbarType, footerType, isVerticalNavCollapsed, appContentWidth, appContentLayoutNav, isAppRtl, isNavbarBlurEnabled, isLessThanOverlayNavBreakpoint,
} = useLayouts()

const perfectScrollbarSettings = {
  maxScrollbarLength: 60,
  wheelPropagation: false,
}

const { width: windowWidth } = useWindowSize()
</script>

<template>
  <template v-if="!isLessThanOverlayNavBreakpoint(windowWidth)">
    <v-btn
      icon
      class="app-customizer-toggler rounded-s-lg rounded-0"
      @click="isNavDrawerOpen = true"
    >
      <v-icon icon="mdi-cog" />
    </v-btn>
    <v-navigation-drawer
      v-model="isNavDrawerOpen"
      temporary
      location="right"
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
          <span>Skins</span>
          <v-radio-group
            v-model="skin"
            inline
          >
            <v-radio
              v-for="key in Object.keys(EnumSkins)"
              v-show="!(key === 'Semi Dark' && isDark)"
              :key="key"
              :label="key"
              :value="EnumSkins[key]"
            />
          </v-radio-group>
          <!-- 👉 Mode -->
          <span>
            Mode
          </span>
          <div class="d-flex align-center">
            <span class="text-medium-emphasis">Light</span>
            <v-switch
              v-model="isDark"
              class="ms-2 mt-0"
              label="Dark"
            />
          </div>
          <!-- 👉 Primary color -->
          <span>
            Primary Color
          </span>
          <div class="d-flex gap-x-4 mt-2">
            <div
              v-for="color in colors"
              :key="color"
              style="width: 3rem; height: 3rem; border-radius: 0.5rem; transition: all 0.25s ease;"
              :style="[`background-color: ${initialThemeColors[color]};`]"
              class="cursor-pointer d-flex align-center justify-center"
              :class="{ 'elevation-4': theme.current.value.colors.primary === initialThemeColors[color] }"
              @click="setPrimaryColor(initialThemeColors[color])"
            >
              <VFadeTransition>
                <v-icon
                  v-show="theme.current.value.colors.primary === initialThemeColors[color]"
                  icon="mdi-check"
                  color="white"
                />
              </VFadeTransition>
            </div>
          </div>
        </CustomizerSection>
        <!-- !SECTION -->
        <!-- SECTION LAYOUT -->
        <CustomizerSection title="LAYOUT">
          <!-- 👉 Content Width -->
          <span>Content width</span>
          <v-radio-group
            v-model="appContentWidth"
            inline
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
              class="ms-2 mt-0"
            />
          </div>
        </CustomizerSection>
        <!-- !SECTION -->
      </PerfectScrollbar>
    </v-navigation-drawer>
  </template>
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
