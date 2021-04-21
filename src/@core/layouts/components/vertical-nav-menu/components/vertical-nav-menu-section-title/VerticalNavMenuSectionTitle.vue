<template>
  <v-subheader>
    <span class="title-wrapper">
      <span v-show="!menuIsVerticalNavMini || (menuIsVerticalNavMini && isMouseHovered)">{{ t(item.subheader) }}</span>
    </span>
    <v-icon v-show="menuIsVerticalNavMini && !isMouseHovered">
      {{ icons.mdiDotsHorizontal }}
    </v-icon>
  </v-subheader>
</template>

<script>
import useAppConfig from '@core/@app-config/useAppConfig'
import { mdiDotsHorizontal } from '@mdi/js'
import { inject } from '@vue/composition-api'
import { useUtils } from '@core/libs/i18n'

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
    const { t } = useUtils()

    return {
      menuIsVerticalNavMini,
      isMouseHovered,

      // i18n
      t,

      // Icons
      icons: {
        mdiDotsHorizontal,
      },
    }
  },
}
</script>

<style scoped lang="scss">
@include theme(v-subheader) using ($material) {
  white-space: nowrap;
  position: relative;

  .title-wrapper {
    width: 100%;
    // text-align: center;
    position: absolute;
    left: 0;
    border-bottom: 1px solid map-deep-get($material, 'dividers');
    line-height: 0.1em;
    // margin: 10px 0 20px;
  }

  .title-wrapper span {
    background: map-deep-get($material, 'background');
    padding: 0 10px;
    margin-left: 24px;
  }
}
</style>
