<template>
  <v-menu
    ref="refMenu"
    offset-x
    attach
    open-on-hover
    offset-overflow
    eager
    :left="openChildMenuLeft"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-list-item
        ref="refActivator"
        v-bind="attrs"
        :class="[{'horizontal-nav-menu-group-active': isActive}, { 'menu-open': isMenuActive }]"
        class="horizontal-nav-menu-group"
        v-on="on"
      >
        <v-list-item-icon>
          <v-icon :small="!item.icon">
            {{ item.icon || alternateIcon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ t(item.title) }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon v-text="icons.mdiChevronRight"></v-icon>
        </v-list-item-icon>
      </v-list-item>
    </template>
    <v-list ref="refContent">
      <v-list-item-group color="primary">
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

// eslint-disable-next-line object-curly-newline
import { ref, computed, inject, watchEffect, watch, nextTick } from '@vue/composition-api'
import { mdiChevronRight } from '@mdi/js'
import { useMouseInElement } from '@vueuse/core'
import { useUtils } from '@core/libs/i18n'
import themeConfig from '@themeConfig'
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
    // eslint-disable-next-line object-curly-newline
    const { isActive, isOpen, updateGroupOpen, updateIsActive } = useHorizontalNavMenuGroup(props.item)

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

    // i18n
    const { t } = useUtils()

    // Templare ref & internal value
    const refMenu = ref(null)
    const isMenuActive = ref(false)
    watchEffect(() => {
      isMenuActive.value = refMenu.value ? refMenu.value.isActive : false
    })

    // Template ref Child Menu
    const openChildMenuLeft = ref(false)
    watch(isMenuActive, () => {
      nextTick(() => {
        setTimeout(() => {
          const childDropdownWidth = refContent.value.$el.offsetWidth
          const windowContentWidth = window.innerWidth - 16
          const { left: childDropdownLeft } = refContent.value.$el.getBoundingClientRect()
          const shallDropLeft = childDropdownLeft + childDropdownWidth - windowContentWidth
          openChildMenuLeft.value = shallDropLeft > 0
        }, 20)
      })
    })

    return {
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

      // alternate icons
      alternateIcon: themeConfig.menu.groupChildIcon,

      // i18n
      t,

      // Template Ref and internal Properties
      refMenu,
      isMenuActive,

      // Template ref child menu
      openChildMenuLeft,

      // icons
      icons: {
        mdiChevronRight,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

@include theme(horizontal-nav-menu-group) using ($material) {
  color: map-deep-get($material, 'text', 'primary');

  &.horizontal-nav-menu-group-active {
    background: rgba(map-deep-get($shades, 'black'), map-deep-get($material, 'states', 'selected'));
  }

  + .v-menu .v-menu__content {
    top: -8px !important;
  }
}
</style>
