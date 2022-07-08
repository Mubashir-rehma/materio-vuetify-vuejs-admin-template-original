<script lang="ts" setup>
import { useLayouts } from '@layouts'
import { config } from '@layouts/config'
import { can } from '@layouts/plugins/casl'
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

const { dynamicI18nProps } = useLayouts()
</script>

<template>
  <li
    v-if="can(item.action, item.subject)"
    class="nav-link"
    :class="[{ 'sub-item': isSubItem }, { disabled: item.disable }]"
  >
    <Component
      :is="item.to ? 'RouterLink' : 'a'"
      v-bind="getComputedNavLinkToProp(item)"
    >
      <div
        :class="item.icon || config.verticalNav.defaultNavItemIconClass"
        class="nav-item-icon"
      />
      <Component
        :is="config.app.enableI18n ? 'i18n-t' : 'span'"
        class="nav-item-title"
        v-bind="dynamicI18nProps(item.title, 'span')"
        v-text="item.title"
      />
    </Component>
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
