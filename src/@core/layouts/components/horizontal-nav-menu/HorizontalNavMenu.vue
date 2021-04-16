<template>
  <ul
    class="horizontal-nav-menu pl-0"
    :class="rootThemeClasses"
  >
    <component
      :is="resolveNavHeaderComponent(item)"
      v-for="item in navMenuItems"
      :key="item.header || item.title"
      :item="item"
    />
  </ul>
</template>

<script>
import HorizontalNavMenuHeaderLink from '@core/layouts/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue'
import HorizontalNavMenuHeaderGroup from '@core/layouts/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue'

import useVuetify from '@core/utils/vuetify'

export default {
  components: {
    HorizontalNavMenuHeaderLink,
    HorizontalNavMenuHeaderGroup,
  },
  props: {
    navMenuItems: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const { rootThemeClasses } = useVuetify()
    const resolveNavHeaderComponent = item => {
      if (item.children) return 'horizontal-nav-menu-header-group'

      return 'horizontal-nav-menu-header-link'
    }

    return {
      resolveNavHeaderComponent,
      rootThemeClasses,
    }
  },
}
</script>

<style lang="scss">
.horizontal-nav-menu {
  // ? As v-menu is sibling of button activator we also have to exclude it
  > *:not(:last-child):not(.v-menu) {
    margin-right: 8px;
  }
}
</style>
