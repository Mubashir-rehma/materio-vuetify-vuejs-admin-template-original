<script lang="ts" setup>
import { useLayouts } from '@layouts'
import { HorizontalNavLink, HorizontalNavPopper } from '@layouts/components'
import { config } from '@layouts/config'
import { canViewNavMenuGroup } from '@layouts/plugins/casl'
import type { NavGroup } from '@layouts/types'
import { isNavGroupActive } from '@layouts/utils'

interface Props {
  item: NavGroup
  childrenAtEnd?: boolean

  // ℹ️ We haven't added this prop in vertical nav because we don't need such differentiation in vertical nav for styling
  isSubItem?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  childrenAtEnd: false,
  isSubItem: false,
})

const route = useRoute()
const router = useRouter()
const { dynamicI18nProps } = useLayouts()

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
  <HorizontalNavPopper
    v-if="canViewNavMenuGroup(item)"
    :is-rtl="config.app.isRtl"
    class="nav-group"
    tag="li"
    content-container-tag="ul"
    :class="[{ active: isGroupActive },{'children-at-end': childrenAtEnd}, {'sub-item': isSubItem}, {'disabled': item.disable}]"
    :popper-inline-end="childrenAtEnd"
  >
    <div class="nav-group-label">
      <div
        :class="item.icon ? item.icon : config.verticalNav.defaultNavItemIconClass"
        class="nav-item-icon"
      />
      <component
        :is="config.app.enableI18n ? 'i18n-t': 'span'"
        v-bind="dynamicI18nProps(item.title, 'span')"
        class="nav-item-title"
        v-text="item.title"
      />
      <div class="nav-group-arrow" :class="config.icons.chevronDown" />
    </div>

    <template #content>
      <component
        :is="'children' in child ? 'HorizontalNavGroup' : HorizontalNavLink"
        v-for="child in item.children"
        :key="child.title"
        :item="child"
        children-at-end
        is-sub-item
      />
    </template>
  </HorizontalNavPopper>
</template>

<style lang="scss">
.layout-horizontal-nav {
  .nav-group {
    .nav-group-label {
      display: flex;
      align-items: center;
      cursor: pointer;
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
