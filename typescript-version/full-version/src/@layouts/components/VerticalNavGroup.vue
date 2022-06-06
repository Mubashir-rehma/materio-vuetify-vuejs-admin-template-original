<script lang="ts" setup>
import { injectionKeyIsVerticalNavHovered, useLayouts } from '@layouts'
import { TransitionExpand, VerticalNavLink } from '@layouts/components'
import { config } from '@layouts/config'
import { canViewNavMenuGroup } from '@layouts/plugins/casl'
import type { NavGroup } from '@layouts/types'
import { isNavGroupActive, openGroups } from '@layouts/utils'

const props = defineProps<{
  item: NavGroup
}>()

const route = useRoute()
const router = useRouter()
const { width: windowWidth } = useWindowSize()
const { isVerticalNavCollapsed, isVerticalNavMini, dynamicI18nProps, isLessThanOverlayNavBreakpoint } = useLayouts()
const hideTitleAndBadge = computed(() => isVerticalNavMini().value && !isLessThanOverlayNavBreakpoint.value(windowWidth.value))

/*
  ℹ️[id=tempIsOpen] This will allow us to store temporary group state when menu is collapsed & not hovered
  Loosely speaking this is the open state of nav group when menu is not collapsed

  Initial we might have collapsed nav menu and we want to keep active group collapsed.
  In this scenario `tempIsOpen` should be true because when mouse is hovered we will assign `isOpen` value to `isGroupOpen`.
*/
let tempIsOpen = false

/*
  ℹ️ We provided default value `ref(false)` because inject will return `T | undefined`
  Docs: https://vuejs.org/api/composition-api-dependency-injection.html#inject
*/
const isVerticalNavHovered = inject(injectionKeyIsVerticalNavHovered, ref(false))
watch(isVerticalNavHovered, val => {
  // If menu is not collapsed ignore
  if (!(isVerticalNavCollapsed.value && !isLessThanOverlayNavBreakpoint.value(windowWidth.value)))
    return

  // If mouse is dragged out of nav menu
  if (!val) {
    tempIsOpen = isGroupOpen.value
    isGroupOpen.value = false
  }

  // If mouse is dragged in nav menu
  else {
    isGroupOpen.value = tempIsOpen && isGroupActive.value
    tempIsOpen = false
  }
})

/*
  ℹ️ We have to add watcher for `isVerticalNavCollapsed` to open & close the group when menu collapse state is changed
  We can't rely on watcher for `isVerticalNavHovered` because nav menu can be collapsed via customizer (basically without entering mouse inside nav menu)
  Hence, watcher for `isVerticalNavHovered` won't get triggered and there will no change in open state of nav group when menu is collapsed via customizer.
*/
watch(isVerticalNavCollapsed, value => {
  // If mouse in nav menu `isVerticalNavHovered` watcher will take care of open/close group
  if (isVerticalNavHovered.value)
    return

  // If nav menu is collapsed => collapse group and assign the current state to `tempIsOpen`
  if (value) {
    tempIsOpen = isGroupOpen.value
    isGroupOpen.value = false
  }

  // If nav menu is expanded => expand group and assign the current state to `tempIsOpen`
  else {
    isGroupOpen.value = tempIsOpen && isGroupActive.value
    tempIsOpen = false
  }
})

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

const collapseChildren = (children: NavGroup['children']) => {
  children.forEach(child => {
    if ('children' in child)
      collapseChildren(child.children)

    openGroups.value = openGroups.value.filter(group => group !== child.title)
  })
}

/*
  Watch for route changes, more specifically route path. Do note that this won't trigger if route's query is updated.

  updates isActive & isOpen based on active state of group.
*/
watch(() => route.path, () => {
  const isActive = isNavGroupActive(props.item.children, router)

  // Don't open group if vertical nav is collapsed and window size is more than overlay nav breakpoint
  isGroupOpen.value = isActive && !(isVerticalNavCollapsed.value && !isLessThanOverlayNavBreakpoint.value(windowWidth.value))
  isGroupActive.value = isActive

  // Why? => LINK src/@layouts/components/VerticalNavGroup.vue#tempIsOpen
  tempIsOpen = isActive
}, { immediate: true })

/*
  Watch for isGroupOpen

    1. Find group index for adding/removing group from openGroups array
    2. update openGroups array for addition/removal of current group

  We need `immediate: true` because without it initially opened group is not added in openGroups array
*/
watch(isGroupOpen, (val: boolean) => {
  // Find group index for adding/removing group from openGroups array
  const grpIndex = openGroups.value.indexOf(props.item.title)

  // update openGroups array for addition/removal of current group

  // If group is opened => Add it to `openGroups` array
  if (val && grpIndex === -1) { openGroups.value.push(props.item.title) }

  // If group is closed remove itself and its children from the `openGroups`
  else if (!val && grpIndex !== -1) {
    openGroups.value.splice(grpIndex, 1)
    collapseChildren(props.item.children)
  }
}, { immediate: true })

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
  // Prevent closing recently opened inactive group.
  const lastOpenedGroup = val[val.length - 1]
  if (lastOpenedGroup === props.item.title)
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

/*
  ℹ️ We need this watcher to
    - Collapse the group when going to `lgAndUp` if vertical nav is collapsed (else block)
    - Expand the group if it's active and screen is `mdAndDown`. Because in this screen vertical nav will be overlay nav
*/
watch(() => isLessThanOverlayNavBreakpoint.value(windowWidth.value), isLessThanOverlayNavBreakpoint_ => {
  // If window size is more than overlay nav breakpoint => expand group if its active
  if (isLessThanOverlayNavBreakpoint_) { isGroupOpen.value = isGroupActive.value }

  else {
    if (isVerticalNavCollapsed.value)
      isGroupOpen.value = false
  }
})
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
    :class="[
      {
        active: isGroupActive,
        open: isGroupOpen,
        disabled: item.disable,
      },
    ]"
  >
    <div
      class="nav-group-label"
      @click="isGroupOpen = !isGroupOpen"
    >
      <div
        :class="item.icon ? item.icon : config.verticalNav.defaultNavItemIconClass"
        class="nav-item-icon"
      />
      <transition-group name="transition-slide-x">
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
    <TransitionExpand>
      <ul
        v-show="isGroupOpen"
        class="nav-group-children"
      >
        <component
          :is="'children' in child ? 'VerticalNavGroup' : VerticalNavLink"
          v-for="child in item.children"
          :key="child.title"
          :item="child"
        />
      </ul>
    </TransitionExpand>
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
  }
}
</style>
