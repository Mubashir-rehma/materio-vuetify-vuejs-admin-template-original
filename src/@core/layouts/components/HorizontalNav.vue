<script lang="ts" setup>
import { HorizontalNavGroup, HorizontalNavLink } from '@layouts/components'
import type { HorizontalNavItems, NavGroup, NavLink } from '@layouts/types'

const resolveNavItemComponent = (item: NavLink|NavGroup) => {
  if ('children' in item) return HorizontalNavGroup

  return HorizontalNavLink
}

defineProps<{
  navItems: HorizontalNavItems
}>()
</script>

<template>
  <ul class="nav-items">
    <component :is="resolveNavItemComponent(item)" v-for="(item, index) in navItems" :key="index" :item="item" />
  </ul>
</template>

<style lang="scss">
.layout-wrapper.layout-nav-type-horizontal {
  .nav-items {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
