<template>
  <v-list-item
    v-bind="navLinkProps(item)"
    class="vertical-nav-menu-link"
  >
    <v-list-item-icon>
      <v-icon :small="!item.icon">
        {{ item.icon || alternateIcon }}
      </v-icon>
    </v-list-item-icon>

    <v-list-item-title>{{ item.title }}</v-list-item-title>
    <v-list-item-action v-if="item.badge">
      <v-badge
        :color="item.badgeColor"
        inline
        :content="item.badge"
      >
      </v-badge>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import useNav from '@/@core/layouts/composable/useNav'
import themeConfig from '@themeConfig'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { navLinkProps } = useNav()

    return {
      navLinkProps,
      alternateIcon: themeConfig.menu.groupChildIcon,
    }
  },
}
</script>
