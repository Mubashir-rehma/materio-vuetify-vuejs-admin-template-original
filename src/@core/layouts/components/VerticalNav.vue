<script lang="ts" setup>
import { injectionKeyIsVerticalNavHovered, useLayouts } from '@layouts'
import { VerticalNavGroup, VerticalNavLink, VerticalNavSectionTitle } from '@layouts/components'
import { config } from '@layouts/config'
import type { NavLink, NavSectionTitle, VerticalNavItems } from '@layouts/types'

const refNav = ref()

const { width: windowWidth } = useWindowSize()

const isHovered = useElementHover(refNav)
provide(injectionKeyIsVerticalNavHovered, isHovered)

const { isVerticalNavCollapsed: isCollapsed, isLessThanOverlayNavBreakpoint, isVerticalNavMini } = useLayouts()

const hideTitleAndIcon = isVerticalNavMini(isHovered)

const resolveNavItemComponent = (item: NavLink|NavSectionTitle) => {
  if ('heading' in item) return VerticalNavSectionTitle
  if ('children' in item) return VerticalNavGroup

  return VerticalNavLink
}

defineProps<{
  navItems: VerticalNavItems
  isOverlayNavActive: boolean
  toggleIsOverlayNavActive: (value: boolean) => void
}>()
</script>

<template>
  <aside
    ref="refNav"
    class="layout-vertical-nav"
    :class="[{'overlay-nav': isLessThanOverlayNavBreakpoint(windowWidth)}, { 'hovered': isHovered }, {'visible': isOverlayNavActive}]"
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
          <span v-show="!hideTitleAndIcon" class="app-title">{{ config.app.title }}</span>
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
    <ul class="nav-items">
      <component
        :is="resolveNavItemComponent(item)"
        v-for="(item, index) in navItems"
        :key="index"
        :item="item"
      />
    </ul>
  </aside>
</template>

<style lang="scss">
@use "@configured-variables" as variables;

// 👉 Vertical Nav
.layout-vertical-nav {
  position: fixed;
  z-index: variables.$layout-vertical-nav-z-index;
  left: 0;
  display: flex;
  width: variables.$layout-vertical-nav-width;
  height: 100%;
  flex-direction: column;

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
    margin-right: auto;
  }

  .nav-items {
    overflow-x: hidden;

    // ℹ️ We used `overflow-y` instead of `overflow` to mitigate overflow x. Revert back if any issue found.
    overflow-y: auto;
  }

  .nav-item-title {
    margin-right: auto;
  }

  // 👉 Collapsed
  .layout-vertical-nav-collapsed & {
    &:not(.hovered) {
      width: variables.$layout-vertical-nav-collapsed-width;
    }
  }

  // 👉 Overlay nav
  &.overlay-nav {
    &:not(.visible) {
      transform: translateX(-#{variables.$layout-vertical-nav-width});
    }
  }
}
</style>
