<template>
  <v-list-item v-bind="linkProps">
    <v-list-item-icon>
      <v-icon v-text="item.icon"></v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title v-text="item.title"></v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import useHorizontalNavMenuLink from '@core/layouts/composable/horizontal-nav/useHorizontalNavMenuLink'

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

    return {
      isActive,
      linkProps,
      updateIsActive,
    }
  },
}
</script>
