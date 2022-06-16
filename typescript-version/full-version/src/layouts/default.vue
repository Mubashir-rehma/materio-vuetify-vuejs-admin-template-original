<script lang="ts" setup>
import DefaultLayoutWithHorizontalNav from './components/DefaultLayoutWithHorizontalNav.vue'
import DefaultLayoutWithVerticalNav from './components/DefaultLayoutWithVerticalNav.vue'

// Composable
import { useSkins } from '@core/composable/useSkins'

// @layouts plugin
import { useDynamicVhCssProperty, useLayouts } from '@layouts'
import { EnumAppContentLayoutNav } from '@layouts/enums'

const { width: windowWidth } = useWindowSize()
const { useValidSkin } = useSkins()
const { appContentLayoutNav, _switchToVerticalNavOnLtOverlayNavBreakpoint } = useLayouts()

// NOTE: You have to use this to prevent invalid theme configuration (skin & theme combination)
useValidSkin()

// ℹ️ This is useful for calculating vh based CSS value correctly on mobile devices
useDynamicVhCssProperty()

// ℹ️ This will switch to vertical nav when define breakpoint is reached when in horizontal nav layout
// Remove below composable usage if you are not using horizontal nav layout in your app
_switchToVerticalNavOnLtOverlayNavBreakpoint(windowWidth)
</script>

<template>
  <template v-if="appContentLayoutNav === EnumAppContentLayoutNav.Horizontal">
    <DefaultLayoutWithHorizontalNav />
  </template>
  <template v-else>
    <DefaultLayoutWithVerticalNav />
  </template>
</template>

<style lang="scss">
// As we are using `layouts` plugin we need its styles to be imported
@use "@layouts/styles/default-layout";
</style>
