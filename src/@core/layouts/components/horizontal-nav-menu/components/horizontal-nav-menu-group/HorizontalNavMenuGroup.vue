<template>
  <v-menu
    ref="refMenu"
    offset-x
    attach
    eager
    :left="openChildMenuLeft"
    max-height="70vh"
    content-class="list-style"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-list-item
        ref="refActivator"
        v-bind="attrs"
        :class="[{'horizontal-nav-menu-group-active': isActive}, { 'menu-open': isMenuActive }, { 'scrollable': isContentScrollable }]"
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
import { ref, computed, inject, watchEffect, nextTick, watch } from '@vue/composition-api'
import { mdiChevronRight } from '@mdi/js'
// eslint-disable-next-line object-curly-newline
import { useMouseInElement, until, useWindowSize, invoke } from '@vueuse/core'
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
    const isContentScrollable = ref(false)
    const openChildMenuLeft = ref(false)
    const { width, height } = useWindowSize()
    const updateMenuDropLeft = async () => {
      invoke(async () => {
        await until(isMenuActive).toBeTruthy()

        nextTick(() => {
          setTimeout(() => {
            const childDropdownWidth = refContent.value.$el.offsetWidth
            const windowContentWidth = window.innerWidth - 16
            const { left: childDropdownLeft } = refContent.value.$el.getBoundingClientRect()
            const shallDropLeft = childDropdownLeft + childDropdownWidth - windowContentWidth
            openChildMenuLeft.value = shallDropLeft > 0

            // Add scroll to child dd if don't have much space

            const refContentTop = refContent.value.$el.getBoundingClientRect().top
            const refContentHeight = refContent.value.$el.getBoundingClientRect().height
            if (window.innerHeight - refContentTop - refContentHeight - 28 < 1) {
              isContentScrollable.value = true
            }
          }, 25)
        })
      })
    }
    watch([width, height], updateMenuDropLeft, { immediate: true, flush: 'post', deep: true })

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
      isContentScrollable,

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
@import '~@core/preset/preset/mixins.scss';

@include theme(horizontal-nav-menu-group) using ($material) {
  color: map-deep-get($material, 'text', 'primary');

  &.horizontal-nav-menu-group-active {
    background: rgba(map-deep-get($shades, 'black'), map-deep-get($material, 'states', 'selected'));
  }

  &:first-child + .v-menu > .v-menu__content {
    top: -8px !important;
  }

  &.scrollable {
    + .v-menu .v-menu__content {
      overflow-y: auto !important;
      @include style-scroll-bar();
      .v-list {
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
      }
    }
  }
}
</style>
