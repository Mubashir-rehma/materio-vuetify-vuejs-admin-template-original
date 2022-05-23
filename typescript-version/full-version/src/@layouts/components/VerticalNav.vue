<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { injectionKeyIsVerticalNavHovered, useLayouts } from '@layouts'
import { VerticalNavGroup, VerticalNavLink, VerticalNavSectionTitle } from '@layouts/components'
import { config } from '@layouts/config'
import type { NavGroup, NavLink, NavSectionTitle, VerticalNavItems } from '@layouts/types'

const props = defineProps<{
  navItems: VerticalNavItems
  isOverlayNavActive: boolean
  toggleIsOverlayNavActive: (value: boolean) => void
}>()

const refNav = ref()

const { width: windowWidth } = useWindowSize()

const isHovered = useElementHover(refNav)
provide(injectionKeyIsVerticalNavHovered, isHovered)

const { isVerticalNavCollapsed: isCollapsed, isLessThanOverlayNavBreakpoint, isVerticalNavMini } = useLayouts()

const hideTitleAndIcon = computed(() => isVerticalNavMini(isHovered).value && !isLessThanOverlayNavBreakpoint.value(windowWidth.value))

const resolveNavItemComponent = (item: NavLink | NavSectionTitle | NavGroup) => {
  if ('heading' in item)
    return VerticalNavSectionTitle
  if ('children' in item)
    return VerticalNavGroup

  return VerticalNavLink
}

const perfectScrollbarSettings = {
  maxScrollbarLength: 60,
  wheelPropagation: false,
}

/*
  ℹ️ Close overlay side when route is changed
  Close overlay vertical nav when link is clicked
*/
const route = useRoute()
watch(() => route.name, () => {
  props.toggleIsOverlayNavActive(false)
})
</script>

<template>
  <aside
    ref="refNav"
    class="layout-vertical-nav"
    :class="[
      {
        'overlay-nav': isLessThanOverlayNavBreakpoint(windowWidth),
        'hovered': isHovered,
        'visible': isOverlayNavActive,
      },
    ]"
  >
    <!-- 👉 Header -->
    <div class="nav-header">
      <slot name="nav-header">
        <!-- 👉 App logo -->
        <img
          :src="config.app.logo"
          style="color: #9155fd;"
          class="app-logo"
        >
        <!-- 👉 App title -->
        <transition name="vertical-nav-app-title">
          <span
            v-show="!hideTitleAndIcon"
            class="app-title"
          >{{ config.app.title }}</span>
        </transition>
        <!-- 👉 Vertical nav actions -->
        <!-- Show toggle collapsible in >md and close button in <md -->
        <template v-if="!isLessThanOverlayNavBreakpoint(windowWidth)">
          <div
            v-show="isCollapsed && !hideTitleAndIcon"
            class="header-action"
            :class="config.icons.verticalNavUnPinned"
            @click="isCollapsed = !isCollapsed"
          />
          <div
            v-show="!isCollapsed && !hideTitleAndIcon"
            class="header-action"
            :class="config.icons.verticalNavPinned"
            @click="isCollapsed = !isCollapsed"
          />
        </template>
        <template v-else>
          <div
            class="header-action"
            :class="config.icons.close"
            @click="toggleIsOverlayNavActive(false)"
          />
        </template>
      </slot>
    </div>
    <slot name="before-nav-items" />
    <PerfectScrollbar
      tag="ul"
      class="nav-items"
      :options="perfectScrollbarSettings"
    >
      <component
        :is="resolveNavItemComponent(item)"
        v-for="(item, index) in navItems"
        :key="index"
        :item="item"
      />
    </PerfectScrollbar>
  </aside>
</template>

<style lang="scss">
@use "@configured-variables" as variables;
@use "@layouts/styles/mixins";

// 👉 Vertical Nav
.layout-vertical-nav {
  position: fixed;
  z-index: variables.$layout-vertical-nav-z-index;
  display: flex;
  flex-direction: column;
  block-size: 100%;
  inline-size: variables.$layout-vertical-nav-width;
  inset-inline-start: 0;

  // TODO: Improve this transition
  transition: all 0.25s ease-in-out;
  will-change: transform, width;

  .nav-header {
    display: flex;
    align-items: center;

    .header-action {
      cursor: pointer;
    }
  }

  // TODO: Check there is duplicated CSS in future
  .app-title {
    margin-inline-end: auto;
  }

  .nav-items {
    block-size: 100%;

    // ℹ️ We no loner needs this overflow styles as perfect scrollbar applies it
    // overflow-x: hidden;

    // // ℹ️ We used `overflow-y` instead of `overflow` to mitigate overflow x. Revert back if any issue found.
    // overflow-y: auto;
  }

  .nav-item-title {
    overflow: hidden;
    margin-inline-end: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // 👉 Collapsed
  .layout-vertical-nav-collapsed & {
    &:not(.hovered) {
      inline-size: variables.$layout-vertical-nav-collapsed-width;
    }
  }

  // 👉 Overlay nav
  &.overlay-nav {
    &:not(.visible) {
      transform: translateX(-#{variables.$layout-vertical-nav-width});

      @include mixins.rtl {
        transform: translateX(variables.$layout-vertical-nav-width);
      }
    }
  }
}
</style>
