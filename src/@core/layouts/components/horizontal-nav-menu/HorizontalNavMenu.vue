<template>
  <ul class="horizontal-nav-menu">
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
    const resolveNavHeaderComponent = item => {
      if (item.children) return 'horizontal-nav-menu-header-group'

      return 'horizontal-nav-menu-header-link'
    }

    return {
      resolveNavHeaderComponent,
    }
  },
}
</script>
