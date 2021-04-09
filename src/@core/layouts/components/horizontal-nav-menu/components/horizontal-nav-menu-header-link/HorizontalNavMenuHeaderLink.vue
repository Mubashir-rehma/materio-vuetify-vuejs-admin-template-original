<template>
  <v-btn
    :color="isActive ? 'primary' : null"
    depressed
    rounded
    :to="{ name: item.to }"
    active-class="gradient-primary"
  >
    {{ t(item.title) }}
  </v-btn>
</template>

<script>
import useHorizontalNavMenuHeaderLink from '@core/layouts/composable/horizontal-nav/useHorizontalNavMenuHeaderLink'
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
    const { isActive, updateIsActive } = useHorizontalNavMenuHeaderLink(props.item)

    // i18n
    const { t } = useUtils()

    return {
      isActive,
      updateIsActive,

      // i18n
      t,
    }
  },
}
</script>
