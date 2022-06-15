<script lang="ts" setup>
import DefaultLayoutWithHorizontalNav from './components/DefaultLayoutWithHorizontalNav.vue'
import DefaultLayoutWithVerticalNav from './components/DefaultLayoutWithVerticalNav.vue'
import { useSkins } from '@core/composable/useSkins'
import { useDynamicVhCssProperty, useLayouts } from '@layouts'
import { EnumAppContentLayoutNav } from '@layouts/enums'

const { width: windowWidth } = useWindowSize()
const { useValidSkin } = useSkins()
const { appContentLayoutNav, _switchToVerticalNavOnLtOverlayNavBreakpoint } = useLayouts()

// NOTE: You have to use this to prevent invalid theme configuration (skin & theme combination)
useValidSkin()

// TODO: Use lazy imports
// const DefaultLayoutWithHorizontalNav = () => import('@layouts/components').then(({ DefaultLayoutWithHorizontalNav: comp }) => comp)
// const DefaultLayoutWithVerticalNav = () => import('@layouts/components').then(({ DefaultLayoutWithVerticalNav: comp }) => comp)

useDynamicVhCssProperty()
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
@use "@layouts/styles/default-layout";
</style>
