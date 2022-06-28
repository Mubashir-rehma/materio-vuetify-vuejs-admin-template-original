<script setup lang="tsx">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { EnumSkins, RouteTransitions } from '@core/enums'
import { EnumAppContentLayoutNav, EnumContentWidth, EnumFooterType, EnumNavbarType } from '@layouts/enums'
import { themeConfig } from '@themeConfig'

// import { useTheme } from 'vuetify'

const isNavDrawerOpen = ref(false)
const {
  theme,
  skin,
  appRouteTransition,
  navbarType,
  footerType,
  isVerticalNavCollapsed,
  appContentWidth,
  appContentLayoutNav,
  isAppRtl,
  isNavbarBlurEnabled,
  isLessThanOverlayNavBreakpoint,
} = useThemeConfig()

// 👉 Primary Color
const vuetifyTheme = useTheme()
const vuetifyThemesName = Object.keys(vuetifyTheme.themes.value)

const initialThemeColors = JSON.parse(JSON.stringify(vuetifyTheme.current.value.colors))
const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

// ℹ️ It will set primary color for current theme only
const setPrimaryColor = (color: string) => {
  const currentThemeName = vuetifyTheme.name.value
  console.log('currentThemeName :>> ', currentThemeName)
  console.log('color :>> ', color)

  vuetifyTheme.themes.value[currentThemeName].colors.primary = color

  // ℹ️ We need to store this color value in localStorage so vuetify plugin can pick on next reload
  localStorage.setItem(`${themeConfig.app.title}-${currentThemeName}ThemePrimaryColor`, color)
}

/*
  ℹ️ This will return static color for first indexed color based on theme
  If we don't make first (primary) color as static then when another color is selected then we will have two theme colors with same hex codes and it will show two check marks
*/
const getBoxColor = (color: string, index: number) => {
  if (index)
    return color
  else return vuetifyTheme.name.value === 'retro' ? '#D6AF5F' : '#a169ff'
}

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
              v-show="!(key === 'Semi Dark' && theme === 'dark')"
              :key="key"
              :label="key"
              :value="EnumSkins[key]"
            />
          </v-radio-group>

          <!-- 👉 Theme -->
          <span>
            Theme
          </span>
          <v-select
            v-model="theme"
            :items="vuetifyThemesName"
          />

          <!-- 👉 Primary color -->
          <span class="mt-6 d-block">
            Primary Color
          </span>
          <div class="d-flex gap-x-4 mt-2">
            <div
              v-for="(color, index) in colors"
              :key="color"
              style="width: 3rem; height: 3rem; border-radius: 0.5rem; transition: all 0.25s ease;"
              :style="{ backgroundColor: getBoxColor(initialThemeColors[color], index) }"
              class="cursor-pointer d-flex align-center justify-center"
              :class="{ 'elevation-4': vuetifyTheme.current.value.colors.primary === getBoxColor(initialThemeColors[color], index) }"
              @click="setPrimaryColor(getBoxColor(initialThemeColors[color], index))"
            >
              <VFadeTransition>
                <v-icon
                  v-show="vuetifyTheme.current.value.colors.primary === (getBoxColor(initialThemeColors[color], index))"
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

          <!-- 👉 Route Transition -->
          <div class="mt-6">
            <v-row>
              <v-col
                cols="5"
                class="d-flex align-center"
              >
                <label for="route-transition">Router Transition</label>
              </v-col>

              <v-col cols="7">
                <v-select
                  id="route-transition"
                  v-model="appRouteTransition"
                  :items="Object.entries(RouteTransitions).map(([key, value]) => ({ key, value }))"
                  item-title="key"
                  item-value="value"
                  single-line
                />
              </v-col>
            </v-row>
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
