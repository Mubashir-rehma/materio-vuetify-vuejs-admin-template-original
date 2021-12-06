<script lang="ts" setup>
import { useLayouts } from '@layouts'
import { config } from '@layouts/config'
import type { NavLink } from '@layouts/types'
import { getComputedNavLinkToProp } from '@layouts/utils'

const { isVerticalNavMini } = useLayouts()

const hideTitleAndBadge = isVerticalNavMini()

defineProps<{
  item: NavLink
}>()
</script>

<template>
  <li class="nav-link">
    <component
      :is="item.to ? 'RouterLink' : 'a'"
      v-bind="getComputedNavLinkToProp(item)"
    >
      <div
        :class="item.icon || config.verticalNav.defaultNavItemIconClass"
        class="nav-item-icon"
      />
      <transition-group name="vertical-nav-item">
        <span v-show="!hideTitleAndBadge" key="title" class="nav-item-title">{{ item.title }}</span>
        <span
          v-if="item.badgeContent"
          v-show="!hideTitleAndBadge"
          key="badge"
          class="nav-item-badge"
          :class="item.badgeClass"
        >{{ item.badgeContent }}</span>
      </transition-group>
    </component>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
  }
}
</style>
