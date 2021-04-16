<template>
  <v-menu
    ref="refMenu"
    offset-y
    eager
    open-on-hover
    attach
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
        :class="[{'gradient-primary group-activator-active': isActive}, { 'menu-open': isMenuActive }]"
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
// eslint-disable-next-line object-curly-newline
import { computed, provide, ref, watchEffect } from '@vue/composition-api'
import { mdiChevronDown } from '@mdi/js'
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

    // Templare ref & internal value
    const refMenu = ref(null)
    const isMenuActive = ref(false)
    watchEffect(() => {
      isMenuActive.value = refMenu.value ? refMenu.value.isActive : false
    })

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

      // Template Ref and internal Properties
      refMenu,
      isMenuActive,

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

@include theme(horizontal-nav-menu) using ($material) {
  // ! Below style will also affect HorizontalNavGroup
  // ? If you only want this style of this component than use selector `> .menu-open` instead of `.menu-open`
  .menu-open {
    background: rgba(map-deep-get($shades, 'black'), map-deep-get($material, 'states', 'hover'));
  }
  > .group-activator-active {
    box-shadow: 0 5px 10px -4px rgba(94, 86, 105, 0.42);
    @include elevationTransition();
  }
}

.horizontal-nav-header-group {
  > .v-menu__content {
    padding-top: 13px;
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
