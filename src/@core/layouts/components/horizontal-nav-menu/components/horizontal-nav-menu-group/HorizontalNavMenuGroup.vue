<template>
  <v-menu
    offset-x
    attach
    absolute
  >
    <template v-slot:activator="{ on, attrs }">
      <v-list-item
        ref="refActivator"
        v-bind="attrs"
        v-on="on"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon v-text="icons.mdiChevronRight"></v-icon>
        </v-list-item-icon>
      </v-list-item>
    </template>
    <v-list ref="refContent">
      <v-list-item-group
        color="primary"
      >
        <component
          :is="resolveNavComponent(child)"
          v-for="child in item.children"
          :key="child.subheader || child.title"
          :item="child"
        ></component>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import HorizontalNavMenuLink from '@core/layouts/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue'

// import useHorizontalNavMenu from '@core/layouts/composable/horizontal-nav/useHorizontalNavMenu'

// Composition Function
import { mdiChevronRight } from '@mdi/js'
import { ref, computed, inject } from '@vue/composition-api'
import { useMouseInElement } from '@vueuse/core'
import useHorizontalNavMenuGroup from './useHorizontalNavMenuGroup'

export default {
  name: 'HorizontalNavMenuGroup',
  components: {
    HorizontalNavMenuLink,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const {
      refChildDropdown,
      isActive,
      isOpen,
      updateGroupOpen,
      updateIsActive,
      openChildDropdownOnLeft,
    } = useHorizontalNavMenuGroup(props.item)

    const resolveNavComponent = item => {
      if (item.children) return 'horizontal-nav-menu-group'

      return 'horizontal-nav-menu-link'
    }

    const refActivator = ref(null)
    const refContent = ref(null)
    const { isOutside: isMouseOutsideOfActivator } = useMouseInElement(refActivator)
    const { isOutside: isMouseOutsideOfContent } = useMouseInElement(refContent)

    const isParentMenuOpen = inject('isParentMenuOpen')

    const isMenuOpen = computed(
      () => !(isMouseOutsideOfContent.value && isMouseOutsideOfActivator.value) || isParentMenuOpen.value,
    )

    return {
      refChildDropdown,
      openChildDropdownOnLeft,
      resolveNavComponent,
      isOpen,
      isActive,
      updateGroupOpen,
      updateIsActive,

      // Mouse
      refActivator,
      refContent,
      isMenuOpen,
      isParentMenuOpen,

      // icons
      icons: {
        mdiChevronRight,
      },
    }
  },
}
</script>

<style>
</style>
