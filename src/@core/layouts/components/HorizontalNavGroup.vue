<script lang="ts" setup>
import { HorizontalNavLink, HorizontalNavPopper } from '@layouts/components'
import { config } from '@layouts/config'
import type { NavGroup } from '@layouts/types'
import { isNavGroupActive } from '@layouts/utils'

interface Props {
  item: NavGroup
  childrenOnRight?: boolean

  // ℹ️ We haven't added this prop in vertical nav because we don't need such differentiation in vertical nav for styling
  isSubItem?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  childrenOnRight: false,
  isSubItem: false,
})

const route = useRoute()
const router = useRouter()

const isGroupActive = ref(false)

/*
  Watch for route changes, more specifically route name. Do note that this won't trigger if route's param or query is updated.

  updates isActive & isOpen based on active state of group.
*/
watch(() => route.name, () => {
  const isActive = isNavGroupActive(props.item.children, router)
  isGroupActive.value = isActive
}, { immediate: true })
</script>

<script lang="ts">
export default {
  name: 'HorizontalNavGroup',
}
</script>

<template>
  <HorizontalNavPopper class="nav-group" tag="li" content-container-tag="ul" :class="[{ active: isGroupActive },{'children-on-right': childrenOnRight}, {'sub-item': isSubItem}]" :right="childrenOnRight">
    <div class="nav-group-label">
      <div
        :class="item.icon ? item.icon : config.verticalNav.defaultNavItemIconClass"
        class="nav-item-icon"
      />
      <span class="nav-item-title">{{ item.title }}</span>
      <div class="nav-group-arrow" :class="config.icons.chevronDown" />
    </div>

    <template #content>
      <component
        :is="'children' in child ? 'HorizontalNavGroup' : HorizontalNavLink"
        v-for="child in item.children"
        :key="child.title"
        :item="child"
        children-on-right
        is-sub-item
      />
    </template>
  </HorizontalNavPopper>
</template>

<style lang="scss">
.layout-horizontal-nav {
  .nav-group {
    cursor: pointer;

    .nav-group-label {
      display: flex;
      align-items: center;
    }

    .popper-content {
      z-index: 1;

      > div {
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  }
}
</style>
