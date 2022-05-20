<script lang="ts" setup>
import { injectionKeyIsVerticalNavHovered, useLayouts } from '@layouts'
import { VerticalNavLink } from '@layouts/components'
import { config } from '@layouts/config'
import { canViewNavMenuGroup } from '@layouts/plugins/casl'
import type { NavGroup } from '@layouts/types'
import { isNavGroupActive, openGroups } from '@layouts/utils'

const props = defineProps<{
  item: NavGroup
}>()

const route = useRoute()
const router = useRouter()
const { isVerticalNavCollapsed, isVerticalNavMini, dynamicI18nProps } = useLayouts()
const hideTitleAndBadge = isVerticalNavMini()

// ℹ️ This will allow use to store temporary group state when menu is collapsed & not hovered
let tempIsOpen = null

const isVerticalNavHovered = inject(injectionKeyIsVerticalNavHovered)
watch(isVerticalNavHovered, val => {
  // If menu is not collapsed ignore
  if (!isVerticalNavCollapsed.value)
    return

  // If mouse is dragged out of nav menu
  if (!val) {
    tempIsOpen = isGroupOpen.value
    isGroupOpen.value = false
  }

  // If mouse is dragged in nav menu
  else {
    isGroupOpen.value = tempIsOpen && isGroupActive.value
    tempIsOpen = null
  }
})

// This is group child ul element ref.
const refGroupChildren = ref<HTMLElement>()

// This is the height we are gonna toggle. We set it to 0 because all groups will be closed at first
const groupChildrenDomHeight = ref(0)

// It will hold children (ul) height.
const groupChildrenMaxHeight = ref(0)

const isGroupActive = ref(false)
const isGroupOpen = ref(false)

/**
* Checks if any of children group is open or not.
* This is helpful in preventing closing inactive parent group when inactive child group is opened. (i.e. Do not close "Nav Levels" group if child "Nav Level 2.2" is opened/clicked)
*
* @param {NavGroup['children']} children  - Nav group children
* @return {boolean} returns if any of children is open or not.
*/
const isAnyChildOpen = (children: NavGroup['children']): boolean => {
  return children.some(child => {
    let result = openGroups.value.includes(child.title)

    if ('children' in child)
      result = isAnyChildOpen(child.children) || result

    return result
  })
}

/*
  Watch for route changes, more specifically route path. Do note that this won't trigger if route's query is updated.

  updates isActive & isOpen based on active state of group.
*/
watch(() => route.path, () => {
  const isActive = isNavGroupActive(props.item.children, router)

  isGroupOpen.value = isActive
  isGroupActive.value = isActive
}, { immediate: true })

/*
  Watch for isGroupOpen

    1. Assign height based on open state of group
    2. Find group index for adding/removing group from openGroups array
    3. update openGroups array for addition/removal of current group

  We need `immediate: true` because without it initially opened group is not added in openGroups array
*/
watch(isGroupOpen, (val: boolean) => {
  // Assign height based on open state of group
  // set to 0 if group is closed
  groupChildrenDomHeight.value = val ? groupChildrenMaxHeight.value : 0

  // Find group index for adding/removing group from openGroups array
  const grpIndex = openGroups.value.indexOf(props.item.title)

  // update openGroups array for addition/removal of current group
  if (val && grpIndex === -1)
    openGroups.value.push(props.item.title)
  else if (!val && grpIndex !== -1)
    openGroups.value.splice(grpIndex, 1)
}, { immediate: true })

/*
  Watch for groupChildrenCalculatedMaxHeight
  💡 We will use watchOnce instead of watch because we will calculate height once only.

  Without this watcher active group has height of 0 on initial load but we want to auto open/(assign height) to active group
  It will handle assigning height based on open state of group for the first time when layout is loaded
*/
watch(groupChildrenMaxHeight, val => {
  if (isGroupOpen.value)
    groupChildrenDomHeight.value = val
})

/*
  Watch for openGroups

  It will help in making vertical nav adapting the behavior of accordion.
  If we open multiple groups without navigating to any route we must close the inactive or temporarily opened groups.

  😵‍💫 Gotchas:
    * If we open inactive group then it will auto close that group because we close groups based on active state.
      Goal of this watcher is auto close groups which are not active when openGroups array is updated.
      So, we have to find a way to do not close recently opened inactive group.
      For this we will fetch recently added group in openGroups array and won't perform closing operation if recently added group is current group
*/
watch(openGroups, val => {
  // Prevent closing recently opended inactive group.
  const lastOpendedGroup = val[val.length - 1]
  if (lastOpendedGroup === props.item.title)
    return

  const isActive = isNavGroupActive(props.item.children, router)

  // Goal of this watcher is to close inactive groups. So don't do anything for active groups.
  if (isActive)
    return

  // We won't close group if any of child group is open in current group
  if (isAnyChildOpen(props.item.children))
    return

  isGroupOpen.value = isActive
  isGroupActive.value = isActive
}, { deep: true })

const updateGroupChildrenMaxHeight = () => {
  const height = refGroupChildren.value?.scrollHeight
  if (height)
    groupChildrenMaxHeight.value = height
}

// Set the height of current group for toggling/updating when open state is updated intially
onMounted(updateGroupChildrenMaxHeight)

/*
  We have to add resize observer to calculate maxHeight when inner/nested group is opened.
  This is because onMounted hook will not calculate height including inner groups height.
*/
useResizeObserver(refGroupChildren, updateGroupChildrenMaxHeight)
</script>

<script lang="ts">
export default {
  name: 'VerticalNavGroup',
}
</script>

<template>
  <li
    v-if="canViewNavMenuGroup(item)"
    class="nav-group"
    :class="[{ active: isGroupActive }, { open: isGroupOpen }, { disabled: item.disable }]"
  >
    <div
      class="nav-group-label"
      @click="isGroupOpen = !isGroupOpen"
    >
      <div
        :class="item.icon ? item.icon : config.verticalNav.defaultNavItemIconClass"
        class="nav-item-icon"
      />
      <transition-group name="vertical-nav-item">
        <!-- 👉 Title -->
        <component
          :is=" config.app.enableI18n ? 'i18n-t' : 'span'"
          v-bind="dynamicI18nProps(item.title, 'span')"
          v-show="!hideTitleAndBadge"
          key="title"
          class="nav-item-title"
        >
          {{ item.title }}
        </component>

        <!-- 👉 Badge -->
        <component
          :is="config.app.enableI18n ? 'i18n-t' : 'span'"
          v-bind="dynamicI18nProps(item.badgeContent, 'span')"
          v-show="!hideTitleAndBadge"
          v-if="item.badgeContent"
          key="badge"
          class="nav-item-badge"
          :class="item.badgeClass"
        >
          {{ item.badgeContent }}
        </component>
        <div
          v-show="!hideTitleAndBadge"
          key="arrow"
          class="nav-group-arrow"
          :class="config.icons.chevronRight"
        />
      </transition-group>
    </div>
    <ul
      ref="refGroupChildren"
      :style="{ maxHeight: `${groupChildrenDomHeight}px` }"
      class="nav-group-children"
    >
      <component
        :is="'children' in child ? 'VerticalNavGroup' : VerticalNavLink"
        v-for="child in item.children"
        :key="child.title"
        :item="child"
      />
    </ul>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-group {
    &-label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    &-children {
      will-change: max-height;
    }
  }
}
</style>
