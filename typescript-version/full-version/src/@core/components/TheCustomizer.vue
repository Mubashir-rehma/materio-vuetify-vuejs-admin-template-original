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
  isVerticalNavSemiDark,
  appContentWidth,
  appContentLayoutNav,
  isAppRtl,
  isNavbarBlurEnabled,
  isLessThanOverlayNavBreakpoint,
} = useThemeConfig()

// 👉 Primary Color
const vuetifyTheme = useTheme()

// const vuetifyThemesName = Object.keys(vuetifyTheme.themes.value)

const initialThemeColors = JSON.parse(JSON.stringify(vuetifyTheme.current.value.colors))
const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

// ℹ️ It will set primary color for current theme only
const setPrimaryColor = (color: string) => {
  const currentThemeName = vuetifyTheme.name.value

  vuetifyTheme.themes.value[currentThemeName].colors.primary = color

  // ℹ️ We need to store this color value in localStorage so vuetify plugin can pick on next reload
  localStorage.setItem(`${themeConfig.app.title}-${currentThemeName}ThemePrimaryColor`, color)

  // ℹ️ Update initial loader color
  localStorage.setItem(`${themeConfig.app.title}-initial-loader-color`, color)
}

/*
  ℹ️ This will return static color for first indexed color based on theme
  If we don't make first (primary) color as static then when another color is selected then we will have two theme colors with same hex codes and it will show two check marks
*/
const getBoxColor = (color: string, index: number) => index ? color : '#a169ff'

const perfectScrollbarSettings = {
  maxScrollbarLength: 60,
  wheelPropagation: false,
}

const { width: windowWidth } = useWindowSize()

const headerValues = computed(() => {
  const entries = Object.entries(EnumNavbarType)

  if (appContentLayoutNav.value === EnumAppContentLayoutNav.Horizontal)
    return entries.filter(([_, val]) => val !== EnumNavbarType.Hidden)

  return entries
})
</script>

<template>
  <template v-if="!isLessThanOverlayNavBreakpoint(windowWidth)">
    <VBtn
      icon
      class="app-customizer-toggler rounded-s-lg rounded-0"
      style="z-index: 1001;"
      @click="isNavDrawerOpen = true"
    >
      <VIcon icon="mdi-cog" />
    </VBtn>

    <VNavigationDrawer
      v-model="isNavDrawerOpen"
      temporary
      location="end"
      width="400"
      :scrim="false"
      class="app-customizer"
    >
      <!-- 👉 Header -->
      <div class="customizer-section d-flex align-center justify-space-between">
        <div>
          <h2>THEME CUSTOMIZER</h2>
          <span class="text-medium-emphasis">Customize and preview in real time</span>
        </div>
        <VBtn
          icon
          variant="text"
          color="secondary"
          @click="isNavDrawerOpen = false"
        >
          <VIcon icon="mdi-close" />
        </VBtn>
      </div>

      <VDivider />

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
          <VRadioGroup
            v-model="skin"
            inline
          >
            <VRadio
              v-for="[key, val] in Object.entries(EnumSkins)"
              v-show="!(key === EnumSkins['Semi Dark'] && theme === 'dark')"
              :key="key"
              :label="key"
              :value="val"
            />
          </VRadioGroup>

          <!-- 👉 Theme -->
          <span class="mt-6 d-block">
            Theme
          </span>
          <div class="d-flex align-center">
            <VLabel
              for="pricing-plan-toggle"
              class="me-3"
            >
              Light
            </VLabel>

            <div>
              <VSwitch
                id="pricing-plan-toggle"
                v-model="theme"
                label="Dark"
                true-value="dark"
                false-value="light"
              />
            </div>
          </div>

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
                <VIcon
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
          <VRadioGroup
            v-model="appContentWidth"
            inline
          >
            <VRadio
              v-for="[key, val] in Object.entries(EnumContentWidth)"
              :key="key"
              :label="key"
              :value="val"
            />
          </VRadioGroup>
          <!-- 👉 Navbar Type -->
          <span class="mt-6 d-block">{{ appContentLayoutNav === EnumAppContentLayoutNav.Vertical ? 'Navbar' : 'Header' }} Type</span>
          <VRadioGroup
            v-model="navbarType"
            inline
          >
            <VRadio
              v-for="[key, val] in headerValues"
              :key="key"
              :label="key"
              :value="val"
            />
          </VRadioGroup>
          <!-- 👉 Footer Type -->
          <span class="mt-6 d-block">Footer Type</span>
          <VRadioGroup
            v-model="footerType"
            inline
          >
            <VRadio
              v-for="[key, val] in Object.entries(EnumFooterType)"
              :key="key"
              :label="key"
              :value="val"
            />
          </VRadioGroup>
          <!-- 👉 Navbar blur -->
          <div class="mt-6 d-flex align-center justify-space-between">
            <VLabel for="customizer-navbar-blur">
              Navbar Blur
            </VLabel>
            <div>
              <VSwitch
                id="customizer-navbar-blur"
                v-model="isNavbarBlurEnabled"
                class="ms-2"
              />
            </div>
          </div>
        </CustomizerSection>
        <!-- !SECTION -->

        <!-- SECTION Menu -->
        <CustomizerSection title="Menu">
          <!-- 👉 Menu Type -->
          <span class="d-block">Menu Type</span>
          <VRadioGroup
            v-model="appContentLayoutNav"
            inline
          >
            <VRadio
              v-for="[key, val] in Object.entries(EnumAppContentLayoutNav)"
              :key="key"
              :label="key"
              :value="val"
            />
          </VRadioGroup>

          <!-- 👉 Collapsed Menu -->
          <div
            v-if="appContentLayoutNav === EnumAppContentLayoutNav.Vertical"
            class="mt-6 d-flex align-center justify-space-between"
          >
            <VLabel for="customizer-menu-collapsed">
              Collapsed Menu
            </VLabel>
            <div>
              <VSwitch
                id="customizer-menu-collapsed"
                v-model="isVerticalNavCollapsed"
                class="ms-2"
              />
            </div>
          </div>

          <!-- 👉 Semi Dark Menu -->
          <div
            class="mt-2 align-center justify-space-between"
            :class="theme === 'light' && appContentLayoutNav === EnumAppContentLayoutNav.Vertical ? 'd-flex' : 'd-none'"
          >
            <VLabel for="customizer-menu-semi-dark">
              Semi Dark Menu
            </VLabel>
            <div>
              <VSwitch
                id="customizer-menu-semi-dark"
                v-model="isVerticalNavSemiDark"
                class="ms-2"
              />
            </div>
          </div>
        </CustomizerSection>
        <!-- !SECTION -->

        <!-- SECTION MISC -->
        <CustomizerSection title="MISC">
          <!-- 👉 RTL -->
          <div class="mt-6 d-flex align-center justify-space-between">
            <VLabel for="customizer-rtl">
              RTL
            </VLabel>
            <div>
              <VSwitch
                id="customizer-rtl"
                v-model="isAppRtl"
                class="ms-2"
              />
            </div>
          </div>

          <!-- 👉 Route Transition -->
          <div class="mt-6">
            <VRow>
              <VCol
                cols="5"
                class="d-flex align-center"
              >
                <label for="route-transition">Router Transition</label>
              </VCol>

              <VCol cols="7">
                <VSelect
                  id="route-transition"
                  v-model="appRouteTransition"
                  :items="Object.entries(RouteTransitions).map(([key, value]) => ({ key, value }))"
                  item-title="key"
                  item-value="value"
                  single-line
                />
              </VCol>
            </VRow>
          </div>
        </CustomizerSection>
        <!-- !SECTION -->
      </PerfectScrollbar>
    </VNavigationDrawer>
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
