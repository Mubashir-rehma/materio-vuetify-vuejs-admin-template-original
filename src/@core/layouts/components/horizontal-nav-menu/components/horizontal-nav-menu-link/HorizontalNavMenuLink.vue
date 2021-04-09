<template>
  <v-list-item v-bind="linkProps">
    <v-list-item-icon>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ t(item.title) }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import useHorizontalNavMenuLink from '@core/layouts/composable/horizontal-nav/useHorizontalNavMenuLink'
import { useUtils } from '@core/libs/i18n'

export default {
  components: {},
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { isActive, linkProps, updateIsActive } = useHorizontalNavMenuLink(props.item)

    // i18n
    const { t } = useUtils()

    return {
      isActive,
      linkProps,
      updateIsActive,

      // i18n
      t,
    }
  },
}
</script>
