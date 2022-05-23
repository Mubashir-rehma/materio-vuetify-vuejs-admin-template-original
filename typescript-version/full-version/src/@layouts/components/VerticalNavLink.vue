<script lang="ts" setup>
import { useLayouts } from '@layouts'
import { config } from '@layouts/config'
import { can } from '@layouts/plugins/casl'
import type { NavLink } from '@layouts/types'
import { getComputedNavLinkToProp } from '@layouts/utils'

defineProps<{
  item: NavLink
}>()

const { width: windowWidth } = useWindowSize()
const { isVerticalNavMini, dynamicI18nProps, isLessThanOverlayNavBreakpoint } = useLayouts()

const hideTitleAndBadge = computed(() => isVerticalNavMini().value && !isLessThanOverlayNavBreakpoint.value(windowWidth.value))
</script>

<template>
  <li
    v-if="can(item.action, item.subject)"
    class="nav-link"
    :class="{ disabled: item.disable }"
  >
    <component
      :is="item.to ? 'RouterLink' : 'a'"
      v-bind="getComputedNavLinkToProp(item)"
    >
      <div
        :class="item.icon || config.verticalNav.defaultNavItemIconClass"
        class="nav-item-icon"
      />
      <transition-group name="vertical-nav-item">
        <!-- 👉 Title -->
        <component
          :is="config.app.enableI18n ? 'i18n-t' : 'span'"
          v-show="!hideTitleAndBadge"
          key="title"
          class="nav-item-title"
          v-bind="dynamicI18nProps(item.title, 'span')"
        >
          {{ item.title }}
        </component>

        <!-- 👉 Badge -->
        <component
          :is="config.app.enableI18n ? 'i18n-t' : 'span'"
          v-if="item.badgeContent"
          v-show="!hideTitleAndBadge"
          key="badge"
          class="nav-item-badge"
          :class="item.badgeClass"
          v-bind="dynamicI18nProps(item.badgeContent, 'span')"
        >
          {{ item.badgeContent }}
        </component>
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
