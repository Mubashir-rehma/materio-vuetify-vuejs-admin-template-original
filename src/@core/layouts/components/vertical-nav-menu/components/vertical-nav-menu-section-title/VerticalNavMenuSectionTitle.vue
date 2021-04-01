<template>
  <v-subheader>
    <span v-show="!menuIsVerticalNavMini || (menuIsVerticalNavMini && isMouseHovered)">{{ item.subheader }}</span>
    <v-icon v-show="menuIsVerticalNavMini && !isMouseHovered">
      {{ icons.mdiDotsHorizontal }}
    </v-icon>
  </v-subheader>
</template>

<script>
import useAppConfig from '@core/@app-config/useAppConfig'
import { mdiDotsHorizontal } from '@mdi/js'
import { inject } from '@vue/composition-api'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { menuIsVerticalNavMini } = useAppConfig()
    const isMouseHovered = inject('isMouseHovered')

    return {
      menuIsVerticalNavMini,
      isMouseHovered,
      icons: {
        mdiDotsHorizontal,
      },
    }
  },
}
</script>

<style scoped lang="scss">
.v-subheader {
  white-space: nowrap;
}
</style>
