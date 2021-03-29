<template>
  <v-list-group
    :prepend-icon="item.icon"
    :value="isNavGroupActive(item.children) && !menuIsVerticalNavMini"
  >
    <template #activator>
      <v-list-item-title>{{ item.title }}</v-list-item-title>

      <v-list-item-action v-if="item.badge">
        <v-badge
          :color="item.badgeColor"
          inline
          :content="item.badge"
        >
        </v-badge>
      </v-list-item-action>
    </template>

    <component
      :is="resolveNavItemComponent(child)"
      v-for="child in item.children"
      :key="child.subheader || child.title"
      :item="child"
    ></component>
  </v-list-group>
</template>

<script>
import useNav from '@/@core/layouts/composable/useNav'
import useAppConfig from '@core/@app-config/useAppConfig'
import VerticalNavMenuLink from './VerticalNavMenuLink.vue'
import VerticalNavMenuSubheader from './VerticalNavMenuSubheader.vue'

export default {
  name: 'VerticalNavMenuGroup',
  components: {
    VerticalNavMenuLink,
    VerticalNavMenuSubheader,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { resolveNavItemComponent, isNavGroupActive } = useNav()
    const { menuIsVerticalNavMini } = useAppConfig()

    return {
      resolveNavItemComponent,
      isNavGroupActive,
      menuIsVerticalNavMini,
    }
  },
}
</script>
