<template>
  <v-menu
    offset-y
    eager
    attach
    open-on-hover
    class="horizontal-nav-header-group"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        ref="refActivator"
        :color="isActive ? 'primary' : null"
        depressed
        large
        rounded
        v-bind="attrs"
        :class="isActive ? 'gradient-primary' : null"
        v-on="on"
      >
        <v-icon
          dark
          left
        >
          {{ item.icon }}
        </v-icon>
        {{ t(item.title) }}
        <v-icon>
          {{ icons.mdiChevronDown }}
        </v-icon>
      </v-btn>
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
import { mdiChevronDown } from '@mdi/js'
import { computed, provide, ref } from '@vue/composition-api'
import { useMouseInElement } from '@vueuse/core'

import HorizontalNavMenuGroup from '@core/layouts/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue'
import HorizontalNavMenuLink from '@core/layouts/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue'
import { useUtils } from '@core/libs/i18n'
import useHorizontalNavMenuHeaderGroup from './useHorizontalNavMenuHeaderGroup'

export default {
  components: {
    HorizontalNavMenuGroup,
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
    const { isActive, updateIsActive, isOpen, updateGroupOpen } = useHorizontalNavMenuHeaderGroup(props.item)

    const resolveNavComponent = item => {
      if (item.children) return 'horizontal-nav-menu-group'

      return 'horizontal-nav-menu-link'
    }

    const refActivator = ref(null)
    const refContent = ref(null)
    const { isOutside: isMouseOutsideOfActivator } = useMouseInElement(refActivator)
    const { isOutside: isMouseOutsideOfContent } = useMouseInElement(refContent)

    const isMenuOpen = computed(() => !(isMouseOutsideOfContent.value && isMouseOutsideOfActivator.value))
    provide('isParentMenuOpen', isMenuOpen)

    // i18n
    const { t } = useUtils()

    return {
      isOpen,
      isActive,
      updateGroupOpen,
      updateIsActive,

      resolveNavComponent,

      // Mouse
      refActivator,
      refContent,
      isMouseOutsideOfActivator,
      isMouseOutsideOfContent,
      isMenuOpen,

      // i18n
      t,

      // icons
      icons: {
        mdiChevronDown,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

.horizontal-nav-header-group {
  > .v-menu__content {
    padding-top: 11px;
  }

  .v-menu__content {
    contain: none !important;
    overflow: visible !important;
    box-shadow: none;

    > .v-list {
      border-radius: 6px;
      @include elevation(8);
    }
  }
}
</style>
