<script setup lang="tsx">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useTheme } from 'vuetify'
import { staticPrimaryColor } from '@/plugins/vuetify/theme'
import { Direction, Layout, RouteTransitions, Skins, Theme } from '@core/enums'
import { AppContentLayoutNav, ContentWidth } from '@layouts/enums'
import { initialConfig, themeConfig } from '@themeConfig'

import borderSkinDark from '@images/customizer-icons/border-dark.svg'
import borderSkinLight from '@images/customizer-icons/border-light.svg'
import collapsedDark from '@images/customizer-icons/collapsed-dark.svg'
import collapsedLight from '@images/customizer-icons/collapsed-light.svg'
import compactDark from '@images/customizer-icons/compact-dark.svg'
import compactLight from '@images/customizer-icons/compact-light.svg'
import darkThemeDark from '@images/customizer-icons/dark-theme-dark.svg'
import darkThemeLight from '@images/customizer-icons/dark-theme-light.svg'
import defaultSkinDark from '@images/customizer-icons/default-dark.svg'
import defaultSkinLight from '@images/customizer-icons/default-light.svg'
import lightThemeDark from '@images/customizer-icons/light-theme-dark.svg'
import lightThemeLight from '@images/customizer-icons/light-theme-light.svg'
import ltrDark from '@images/customizer-icons/ltr-dark.svg'
import ltrLight from '@images/customizer-icons/ltr-light.svg'
import rtlDark from '@images/customizer-icons/rtl-dark.svg'
import rtlLight from '@images/customizer-icons/rtl-light.svg'
import systemThemeDark from '@images/customizer-icons/system-theme-dark.svg'
import systemThemeLight from '@images/customizer-icons/system-theme-light.svg'
import wideDark from '@images/customizer-icons/wide-dark.svg'
import wideLight from '@images/customizer-icons/wide-light.svg'

const isNavDrawerOpen = ref(false)

const {
  theme,
  skin,
  appRouteTransition,
  isVerticalNavCollapsed,
  isVerticalNavSemiDark,
  appContentWidth,
  appContentLayoutNav,
  isAppRtl,
  isLessThanOverlayNavBreakpoint,
} = useThemeConfig()

// 👉 Primary Color
const vuetifyTheme = useTheme()

const colors = [staticPrimaryColor, '#0D9394', '#FFAB1D', '#EB3D63', '#2092EC']
const customPrimaryColor = ref('')

// ℹ️ It will set primary color for current theme only
const setPrimaryColor = (color: string) => {
  const currentThemeName = vuetifyTheme.name.value

  vuetifyTheme.themes.value[currentThemeName].colors.primary = color

  // ℹ️ We need to store this color value in localStorage so vuetify plugin can pick on next reload
  localStorage.setItem(`${themeConfig.app.title}-${currentThemeName}ThemePrimaryColor`, color)

  // ℹ️ Update initial loader color
  localStorage.setItem(`${themeConfig.app.title}-initial-loader-color`, color)
}

const { width: windowWidth } = useWindowSize()

const lightTheme = useGenerateImageVariant(lightThemeLight, lightThemeDark)
const darkTheme = useGenerateImageVariant(darkThemeLight, darkThemeDark)
const systemTheme = useGenerateImageVariant(systemThemeLight, systemThemeDark)
const defaultSkin = useGenerateImageVariant(defaultSkinLight, defaultSkinDark)
const borderSkin = useGenerateImageVariant(borderSkinLight, borderSkinDark)
const collapsed = useGenerateImageVariant(collapsedLight, collapsedDark)
const compact = useGenerateImageVariant(compactLight, compactDark)
const compactContent = useGenerateImageVariant(compactLight, compactDark)
const wideContent = useGenerateImageVariant(wideLight, wideDark)
const ltrImg = useGenerateImageVariant(ltrLight, ltrDark)
const rtlImg = useGenerateImageVariant(rtlLight, rtlDark)

// 👉 Mode
const themeMode = computed(() => {
  return [
    {
      bgImage: lightTheme.value,
      value: Theme.Light,
    },
    {
      bgImage: darkTheme.value,
      value: Theme.Dark,
    },
    {
      bgImage: systemTheme.value,
      value: Theme.System,
    },
  ]
})

// 👉 Skin
const themeSkin = computed(() => {
  return [
    {
      bgImage: defaultSkin.value,
      value: Skins.Default,
    },
    {
      bgImage: borderSkin.value,
      value: Skins.Bordered,
    },
  ]
})

// 👉 Layout
const layouts = computed(() => {
  return [
    {
      bgImage: defaultSkin.value,
      value: Layout.Vertical,
    },
    {
      bgImage: collapsed.value,
      value: Layout.Collapsed,
    },
    {
      bgImage: compact.value,
      value: Layout.Horizontal,
    },
  ]
})

const currentLayout = ref<'vertical' | 'collapsed' | 'horizontal'>(isVerticalNavCollapsed.value ? 'collapsed' : appContentLayoutNav.value)

watch(currentLayout, () => {
  if (currentLayout.value === 'collapsed') {
    isVerticalNavCollapsed.value = true
    appContentLayoutNav.value = AppContentLayoutNav.Vertical
  }
  else {
    isVerticalNavCollapsed.value = false
    appContentLayoutNav.value = currentLayout.value
  }
})

// watch vertical sidebar collapse state
watch(isVerticalNavCollapsed, () => {
  currentLayout.value = isVerticalNavCollapsed.value ? 'collapsed' : appContentLayoutNav.value
})

// 👉 Content Width
const contentWidth = computed(() => {
  return [
    {
      bgImage: compactContent.value,
      value: ContentWidth.Boxed,
    },
    {
      bgImage: wideContent.value,
      value: ContentWidth.Fluid,
    },
  ]
})

// 👉 Direction
const currentDir = ref(isAppRtl.value ? 'rtl' : 'ltr')

const direction = computed(() => {
  return [
    {
      bgImage: ltrImg.value,
      value: Direction.Ltr,
    },
    {
      bgImage: rtlImg.value,
      value: Direction.Rtl,
    },
  ]
})

watch(currentDir, () => {
  if (currentDir.value === 'rtl')
    isAppRtl.value = true

  else
    isAppRtl.value = false
})

// check if any value set in localStorage
const isLocalStorageHasAnyValue = ref(false)
const INITIAL_IS_RTL = false

watch([
  () => themeConfig,
  () => vuetifyTheme.current.value.colors.primary,
  () => isAppRtl,
  () => appContentWidth,
  () => isVerticalNavCollapsed,
], () => {
  const initialConfigValue = [
    staticPrimaryColor,
    staticPrimaryColor,
    initialConfig.app.theme,
    initialConfig.app.skin,
    initialConfig.verticalNav.isVerticalNavSemiDark,
    initialConfig.verticalNav.isVerticalNavCollapsed,
    initialConfig.app.contentWidth,
    INITIAL_IS_RTL,
    initialConfig.app.contentLayoutNav,
    initialConfig.app.routeTransition,
  ]

  const themeConfigValue = [
    vuetifyTheme.themes.value.light.colors.primary,
    vuetifyTheme.themes.value.dark.colors.primary,
    themeConfig.app.theme.value,
    themeConfig.app.skin.value,
    themeConfig.verticalNav.isVerticalNavSemiDark.value,
    isVerticalNavCollapsed.value,
    appContentWidth.value,
    isAppRtl.value,
    appContentLayoutNav.value,
    themeConfig.app.routeTransition.value,
  ]

  currentDir.value = isAppRtl.value ? 'rtl' : 'ltr'
  isLocalStorageHasAnyValue.value = JSON.stringify(themeConfigValue) !== JSON.stringify(initialConfigValue)
}, { deep: true, immediate: true })

// remove all theme related values from localStorage
const resetCustomizer = async () => {
  // reset themeConfig values
  vuetifyTheme.themes.value.light.colors.primary = staticPrimaryColor
  vuetifyTheme.themes.value.dark.colors.primary = staticPrimaryColor

  theme.value = initialConfig.app.theme
  skin.value = initialConfig.app.skin
  isVerticalNavSemiDark.value = initialConfig.verticalNav.isVerticalNavSemiDark
  appContentLayoutNav.value = initialConfig.app.contentLayoutNav
  appContentWidth.value = initialConfig.app.contentWidth
  isAppRtl.value = INITIAL_IS_RTL
  appRouteTransition.value = initialConfig.app.routeTransition
  isVerticalNavCollapsed.value = initialConfig.verticalNav.isVerticalNavCollapsed
  localStorage.setItem(`${themeConfig.app.title}-initial-loader-color`, staticPrimaryColor)
  currentLayout.value = 'vertical'

  await nextTick()

  ;[`${themeConfig.app.title}-lightThemePrimaryColor`,
    `${themeConfig.app.title}-darkThemePrimaryColor`,
    `${themeConfig.app.title}-theme`,
    `${themeConfig.app.title}-skin`,
    `${themeConfig.app.title}-isVerticalNavSemiDark`,
    `${themeConfig.app.title}-isVerticalNavCollapsed`,
    `${themeConfig.app.title}-contentWidth`,
    `${themeConfig.app.title}-isRtl`,
    `${themeConfig.app.title}-transition`]
    .forEach(key => localStorage.removeItem(key))
  isLocalStorageHasAnyValue.value = false
}
</script>

<template>
  <template v-if="!isLessThanOverlayNavBreakpoint(windowWidth)">
    <VBtn
      icon
      size="small"
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
      <div class="customizer-heading d-flex align-center justify-space-between">
        <div>
          <h6 class="text-h6">
            Theme Customizer
          </h6>
          <span class="text-body-1">Customize & Preview in Real Time</span>
        </div>

        <div class="d-flex align-center gap-1">
          <VBtn
            icon
            variant="text"
            size="small"
            color="default"
            @click="resetCustomizer"
          >
            <VBadge
              v-show="isLocalStorageHasAnyValue"
              dot
              color="error"
              offset-x="-30"
              offset-y="-15"
            />

            <VIcon
              size="22"
              icon="mdi-refresh"
            />
          </VBtn>

          <VBtn
            icon
            variant="text"
            color="secondary"
            size="small"
            @click="isNavDrawerOpen = false"
          >
            <VIcon
              icon="mdi-close"
              size="22"
            />
          </VBtn>
        </div>
      </div>

      <VDivider />

      <PerfectScrollbar
        tag="ul"
        :options="{ wheelPropagation: false }"
      >
        <!-- SECTION Theming -->
        <CustomizerSection
          title="Theming"
          :divider="false"
        >
          <!-- 👉 Primary Color -->
          <div class="d-flex flex-column gap-3">
            <h6 class="text-base font-weight-medium">
              Primary Color
            </h6>

            <div
              class="d-flex"
              style="column-gap: 0.7rem;"
            >
              <div
                v-for="color in colors"
                :key="color"
                style="
              border-radius: 0.375rem;
              outline: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
              padding-block: 0.5rem;
              padding-inline: 0.625rem;"
                class="cursor-pointer"
                :style="vuetifyTheme.current.value.colors.primary === color ? `outline-color: ${color}; outline-width:2px;` : ''"
                @click="setPrimaryColor(color)"
              >
                <div
                  style="border-radius: 0.375rem;block-size: 2.25rem; inline-size: 2rem;"
                  :style="{ backgroundColor: color }"
                />
              </div>

              <div
                style="
              border-radius: 0.375rem;
              outline: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
              padding-block: 0.5rem;
              padding-inline: 0.625rem;"
                :style="vuetifyTheme.current.value.colors.primary === customPrimaryColor ? `outline-color: ${customPrimaryColor}; outline-width:2px;` : ''"
              >
                <VBtn
                  icon
                  size="small"
                  :color="vuetifyTheme.current.value.colors.primary === customPrimaryColor ? customPrimaryColor : '#3A354114'"
                  variant="flat"
                  style="border-radius: 0.375rem;"
                >
                  <VIcon
                    size="22"
                    icon="mdi-eyedropper-variant"
                    :color="vuetifyTheme.current.value.colors.primary === customPrimaryColor ? 'rgb(var(--v-theme-on-primary))' : ''"
                  />
                  <VMenu
                    activator="parent"
                    :close-on-content-click="false"
                  >
                    <VList>
                      <VListItem>
                        <VColorPicker
                          v-model="customPrimaryColor"
                          @update:model-value="setPrimaryColor"
                        />
                      </VListItem>
                    </VList>
                  </VMenu>
                </VBtn>
              </div>
            </div>
          </div>

          <!-- 👉 Theme -->
          <div class="d-flex flex-column gap-3">
            <h6 class="text-base font-weight-medium">
              Theme
            </h6>

            <CustomRadiosWithImage
              :key="theme"
              v-model:selected-radio="theme"
              :radio-content="themeMode"
              :grid-column="{ cols: '4' }"
            />
          </div>

          <!-- 👉 Skin -->
          <div class="d-flex flex-column gap-3">
            <h6 class="text-base font-weight-medium">
              Skins
            </h6>

            <CustomRadiosWithImage
              :key="skin"
              v-model:selected-radio="skin"
              :radio-content="themeSkin"
              :grid-column="{ cols: '4' }"
            />

            <VRow>
              <VCol
                v-for="i in ['Default', 'Border']"
                :key="i"
                cols="4"
                class="pt-0 text-sm text-medium-emphasis"
              >
                {{ i }}
              </VCol>
            </VRow>
          </div>

          <!-- 👉 Navbar blur -->
          <div
            class="align-center justify-space-between"
            :class="vuetifyTheme.global.name.value === 'light' && appContentLayoutNav === AppContentLayoutNav.Vertical ? 'd-flex' : 'd-none'"
          >
            <VLabel
              for="customizer-semi-dark"
              class="text-high-emphasis"
            >
              Semi Dark Menu
            </VLabel>

            <div>
              <VSwitch
                id="customizer-semi-dark"
                v-model="isVerticalNavSemiDark"
                class="ms-2"
              />
            </div>
          </div>
        </CustomizerSection>
        <!-- !SECTION -->

        <!-- SECTION LAYOUT -->
        <CustomizerSection title="Layout">
          <!-- 👉 Layouts -->
          <div class="d-flex flex-column gap-3">
            <h6 class="text-base font-weight-medium">
              Layouts
            </h6>

            <CustomRadiosWithImage
              :key="currentLayout"
              v-model:selected-radio="currentLayout"
              :radio-content="layouts"
              :grid-column="{ cols: '4' }"
            />

            <VRow>
              <VCol
                v-for="i in ['Vertical', 'Collapsed', 'Horizontal']"
                :key="i"
                cols="4"
                class="pt-0 text-sm text-medium-emphasis"
              >
                {{ i }}
              </VCol>
            </VRow>
          </div>

          <!-- 👉 Content Width -->
          <div class="d-flex flex-column gap-3">
            <h6 class="text-base font-weight-medium">
              Content
            </h6>

            <CustomRadiosWithImage
              :key="appContentWidth"
              v-model:selected-radio="appContentWidth"
              :radio-content="contentWidth"
              :grid-column="{ cols: '4' }"
            />

            <VRow>
              <VCol
                v-for="i in ['Compact', 'Wide']"
                :key="i"
                cols="4"
                class="pt-0 text-sm text-medium-emphasis"
              >
                {{ i }}
              </VCol>
            </VRow>
          </div>

          <!-- 👉 Direction -->
          <div class="d-flex flex-column gap-3">
            <h6 class="text-base font-weight-medium">
              Direction
            </h6>

            <CustomRadiosWithImage
              :key="currentDir"
              v-model:selected-radio="currentDir"
              :radio-content="direction"
              :grid-column="{ cols: '4' }"
            />

            <VRow>
              <VCol
                v-for="i in ['Left to right', 'Right to left']"
                :key="i"
                cols="4"
                class="pt-0 text-sm text-medium-emphasis"
              >
                {{ i }}
              </VCol>
            </VRow>
          </div>

          <!-- 👉 Router Transition -->
          <div class="d-flex flex-column gap-4">
            <h6 class="text-base font-weight-medium">
              Router Transition
            </h6>

            <VSelect
              id="route-transition"
              v-model="appRouteTransition"
              label="Animation"
              :items="Object.entries(RouteTransitions).map(([key, value]) => ({ key, value }))"
              item-title="key"
              item-value="value"
            />
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
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    gap: 1.5rem;
  }

  .customizer-heading {
    padding-block: 1.125rem;
    padding-inline: 1.25rem;
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }
}

.app-customizer-toggler {
  position: fixed !important;
  inset-block-start: 50%;
  inset-inline-end: 0;
  transform: translateY(-50%);
}
</style>
