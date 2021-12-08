<script lang="ts" setup>
import { useLayouts } from '@layouts'
import { config } from '@layouts/config'
import type { NavLink } from '@layouts/types'
import { getComputedNavLinkToProp } from '@layouts/utils'

const { isVerticalNavMini, dynamicI18nProps } = useLayouts()

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
        <component
          :is="config.app.enableI18n ? 'i18n-t': 'span'"
          v-show="!hideTitleAndBadge"
          key="title"
          class="nav-item-title"
          v-bind="dynamicI18nProps(item.title, 'span')"
          v-text="item.title"
        />
        <component
          :is="config.app.enableI18n ? 'i18n-t': 'span'"
          v-if="item.badgeContent"
          v-show="!hideTitleAndBadge"
          key="badge"
          class="nav-item-badge"
          :class="item.badgeClass"
          v-bind="dynamicI18nProps(item.badgeContent, 'span')"
          v-text="item.badgeContent"
        />
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
