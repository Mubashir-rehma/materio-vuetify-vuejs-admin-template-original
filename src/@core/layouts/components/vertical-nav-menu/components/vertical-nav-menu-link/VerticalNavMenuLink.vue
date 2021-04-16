<template>
  <v-list-item
    v-bind="navLinkProps(item)"
    class="vertical-nav-menu-link"
    active-class="gradient-primary"
  >
    <v-list-item-icon>
      <v-icon :small="!item.icon">
        {{ item.icon || alternateIcon }}
      </v-icon>
    </v-list-item-icon>

    <v-list-item-title>{{ t(item.title) }}</v-list-item-title>
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
import { useUtils } from '@core/libs/i18n'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { navLinkProps } = useNav()
    const { t } = useUtils()

    return {
      navLinkProps,
      alternateIcon: themeConfig.menu.groupChildIcon,

      // i18n
      t,
    }
  },
}
</script>

<style lang="scss">
.vertical-nav-menu-link.v-list-item--active {
  box-shadow: 0 5px 10px -4px rgba(94, 86, 105, 0.42);
}
</style>
