<script lang="ts" setup>
import { useLayouts } from '@layouts'
import { VerticalNav } from '@layouts/components'
import type { VerticalNavItems } from '@layouts/types'

const { _layoutClasses: layoutClasses, isLessThanOverlayNavBreakpoint } = useLayouts()
const { width: windowWidth } = useWindowSize()

const isOverlayNavActive = ref(false)
const isLayoutOverlayVisible = ref(false)
const toggleIsOverlayNavActive = useToggle(isOverlayNavActive)

// ℹ️ This is alternative to below two commented watcher
// We want to show overlay if overlay nav is visible and want to hide overlay if overlay is hidden and vice versa.
biSyncRef(isOverlayNavActive, isLayoutOverlayVisible)

// watch(isOverlayNavActive, value => {
//   // Sync layout overlay with overlay nav
//   isLayoutOverlayVisible.value = value
// })

// watch(isLayoutOverlayVisible, value => {
//   // If overlay is closed via click, close hide overlay nav
//   if (!value) isOverlayNavActive.value = false
// })

// ℹ️ Hide overlay if user open overlay nav in <md and increase the window width without closing overlay nav
watch(windowWidth, value => {
  if (!isLessThanOverlayNavBreakpoint.value(value) && isLayoutOverlayVisible.value) isLayoutOverlayVisible.value = false
})

defineProps<{
  navItems: VerticalNavItems
}>()
</script>

<template>
  <div
    class="layout-wrapper"
    :class="layoutClasses(windowWidth)"
  >
    <!-- 👉 Vertical Nav -->
    <VerticalNav
      :is-overlay-nav-active="isOverlayNavActive"
      :toggle-is-overlay-nav-active="toggleIsOverlayNavActive"
      :nav-items="navItems"
    >
      <!-- TODO: Make it dynamic -->
      <template #nav-header>
        <slot name="vertical-nav-header" />
      </template>
      <template #before-nav-items>
        <slot name="before-vertical-nav-items" />
      </template>
    </VerticalNav>

    <div class="layout-content-wrapper">
      <!-- 👉 Navbar -->
      <header class="layout-navbar">
        <div class="navbar-content-container">
          <slot
            name="navbar"
            :toggleVerticalOverlayNavActive="toggleIsOverlayNavActive"
          />
        </div>
      </header>

      <!-- 👉 Content Area -->
      <main class="layout-page-content">
        <slot />
      </main>

      <!-- 👉 Footer -->
      <footer class="layout-footer">
        <div class="footer-content-container">
          <slot name="footer" />
        </div>
      </footer>
    </div>

    <!-- 👉 Overlay -->
    <div
      class="layout-overlay"
      :class="{'visible': isLayoutOverlayVisible}"
      @click="isLayoutOverlayVisible = !isLayoutOverlayVisible"
    />
  </div>
</template>

<style lang="scss">
@use "@configured-variables" as variables;
@use "@layouts/styles/placeholders";

.layout-wrapper.layout-nav-type-vertical {
  // TODO(v2): Check why we need height in vertical nav & min-height in horizontal nav
  height: 100%;

  .layout-content-wrapper {
    display: flex;
    overflow: auto;
    flex-direction: column;
    flex-grow: 1;
    transition: padding-left 0.2s ease-in-out;
    will-change: padding-left;
  }

  .layout-navbar {
    z-index: variables.$layout-vertical-nav-layout-navbar-z-index;
  }

  &.layout-navbar-sticky .layout-navbar {
    @extend %layout-navbar-sticky;
  }

  &.layout-navbar-hidden .layout-navbar {
    @extend %layout-navbar-hidden;
  }

  // 👉 Layout overlay
  .layout-overlay {
    position: fixed;
    z-index: variables.$layout-overlay-z-index;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0 0 0 / 60%);
    cursor: pointer;
    opacity: 0;
    pointer-events: none;

    // TODO: Improve animation
    transition: opacity 0.25s ease-in-out;
    will-change: transform;

    &.visible {
      opacity: 1;
      pointer-events: auto;
    }
  }

  &:not(.layout-overlay-nav) .layout-content-wrapper {
    padding-left: variables.$layout-vertical-nav-width;
  }

  // Adjust right column pl when vertical nav is collapsed
  &.layout-vertical-nav-collapsed .layout-content-wrapper {
    padding-left: variables.$layout-vertical-nav-collapsed-width;
  }
}
</style>
