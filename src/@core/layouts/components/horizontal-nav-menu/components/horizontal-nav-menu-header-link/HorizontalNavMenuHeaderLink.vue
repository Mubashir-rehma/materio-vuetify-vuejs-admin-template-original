<template>
  <v-btn
    :color="isActive ? 'primary' : null"
    depressed
    rounded
    :to="{ name: item.to }"
  >
    {{ item.title }}
  </v-btn>
</template>

<script>
import useHorizontalNavMenuHeaderLink from '@core/layouts/composable/horizontal-nav/useHorizontalNavMenuHeaderLink'

export default {
  components: {},
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { isActive, updateIsActive } = useHorizontalNavMenuHeaderLink(props.item)

    return {
      isActive,
      updateIsActive,
    }
  },
}
</script>
