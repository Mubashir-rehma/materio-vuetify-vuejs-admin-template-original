<script lang="ts" setup>
import { useLayouts } from '@layouts'
import { HorizontalNav } from '@layouts/components'
import type { HorizontalNavItems } from '@layouts/types'

const { _layoutClasses: layoutClasses } = useLayouts()
const { width: windowWidth } = useWindowSize()

defineProps<{
  navItems: HorizontalNavItems
}>()
</script>

<template>
  <div
    class="layout-wrapper"
    :class="layoutClasses(windowWidth)"
  >
    <div class="layout-navbar-and-nav-container">
      <!-- 👉 Navbar -->
      <div class="layout-navbar">
        <div class="navbar-content-container">
          <!-- <slot
              name="navbar"
              :toggleVerticalOverlayNavActive="toggleVerticalOverlayNavActive"
            /> -->
          <slot name="navbar" />
        </div>
      </div>
      <!-- 👉 Navigation -->
      <div class="layout-horizontal-nav">
        <div class="horizontal-nav-content-container">
          <HorizontalNav :nav-items="navItems" />
        </div>
      </div>
    </div>

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
</template>

<style lang="scss">
@use "@configured-variables" as variables;
@use "@layouts/styles/placeholders";

.layout-wrapper {
  flex-direction: column;

  &.layout-nav-type-horizontal {
    // TODO(v2): Check why we need height in vertical nav & min-height in horizontal nav
    min-height: 100%;
  }

  // If both navbar & horizontal nav sticky
  &.layout-navbar-sticky.horizontal-nav-sticky {
    .layout-navbar-and-nav-container {
      position: sticky;
      top: 0;
      will-change: transform;
    }
  }

  &.layout-navbar-hidden.horizontal-nav-hidden {
    .layout-navbar-and-nav-container {
      display: none;
    }
  }
}

.layout-navbar {
  z-index: variables.$layout-horizontal-nav-layout-navbar-z-index;

  // ℹ️ For now we are not independently managing navbar and horizontal nav so we won't use below style to avoid conflicting with combo style of navbar and horizontal nav
  // If we add independent style of navbar & horizontal nav then we have to add :not for avoiding conflict with combo styles
  // .layout-navbar-sticky & {
  //   @extend %layout-navbar-sticky;
  // }

  // ℹ️ For now we are not independently managing navbar and horizontal nav so we won't use below style to avoid conflicting with combo style of navbar and horizontal nav
  // If we add independent style of navbar & horizontal nav then we have to add :not for avoiding conflict with combo styles
  // .layout-navbar-hidden & {
  //   @extend %layout-navbar-hidden;
  // }
}

// 👉 Horizontal nav nav
.layout-horizontal-nav {
  z-index: variables.$layout-horizontal-nav-z-index;

  // .horizontal-nav-sticky & {
  //   width: 100%;
  //   will-change: transform;
  //   position: sticky;
  //   top: 0;
  // }

  // .horizontal-nav-hidden & {
  //   display: none;
  // }

  .layout-content-width-boxed & {
    .horizontal-nav-content-container {
      @extend %boxed-content;
    }
  }
}
</style>
