<script lang="ts" setup>
import { config } from '@layouts/config'
import type { NavLink } from '@layouts/types'
import { getComputedNavLinkToProp } from '@layouts/utils'

interface Props {
  item: NavLink

  // ℹ️ We haven't added this prop in vertical nav because we don't need such differentiation in vertical nav for styling
  isSubItem?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isSubItem: false,
})
</script>

<template>
  <li class="nav-link" :class="{'sub-item': isSubItem}">
    <component
      :is="item.to ? 'RouterLink' : 'a'"
      v-bind="getComputedNavLinkToProp(item)"
    >
      <div
        :class="item.icon || config.verticalNav.defaultNavItemIconClass"
        class="nav-item-icon"
      />
      <span class="nav-item-title">{{ item.title }}</span>
    </component>
  </li>
</template>

<style lang="scss">
.layout-horizontal-nav {
  .nav-link a {
    display: flex;
    align-items: center;
  }
}
</style>
