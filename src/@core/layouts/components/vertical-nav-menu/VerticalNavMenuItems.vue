<template>
  <v-list
    expand
    shaped
    dense
  >
    <component
      :is="resolveNavItemComponent(item)"
      v-for="item in items"
      :key="item.subheader || item.title"
      :item="item"
    />
  </v-list>
</template>

<script>
import useNav from '@/@core/layouts/composable/useNav'
import themeConfig from '@themeConfig'
import VerticalNavMenuSubheader from './VerticalNavMenuSubheader.vue'
import VerticalNavMenuLink from './VerticalNavMenuLink.vue'
import VerticalNavMenuGroup from './VerticalNavMenuGroup.vue'

export default {
  components: {
    VerticalNavMenuSubheader,
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const { resolveNavItemComponent } = useNav()

    return {
      verticalMenuExpand: themeConfig.menu.verticalMenuExpand,
      resolveNavItemComponent,
    }
  },
  watch: {
    '$route.name': function (to, from) {
      console.log('to :>> ', to)
      console.log('from :>> ', from)
    },
  },
}
</script>
