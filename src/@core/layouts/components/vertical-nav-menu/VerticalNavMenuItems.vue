<template>
  <v-list
    expand
    :shaped="controlledIsListShaped"
    class="vertical-nav-menu-items"
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
// eslint-disable-next-line object-curly-newline
import { computed, inject, ref, watch } from '@vue/composition-api'
import useNav from '@/@core/layouts/composable/useNav'
import themeConfig from '@themeConfig'
import useAppConfig from '@core/@app-config/useAppConfig'
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
    const { menuIsVerticalNavMini } = useAppConfig()
    const isMouseOver = inject('isMouseOver')
    const isListShaped = computed(
      () => !menuIsVerticalNavMini.value || (menuIsVerticalNavMini.value && isMouseOver.value),
    )
    const controlledIsListShaped = ref(isListShaped.value)
    watch(isListShaped, value => {
      if (value) controlledIsListShaped.value = true
      else {
        setTimeout(() => {
          controlledIsListShaped.value = false
        }, 100)
      }
    })

    return {
      verticalMenuExpand: themeConfig.menu.verticalMenuExpand,
      resolveNavItemComponent,
      menuIsVerticalNavMini,
      isMouseOver,
      isListShaped,
      controlledIsListShaped,
    }
  },
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';
@include theme(vertical-nav-menu-items) using ($material) {
  .v-list-item__icon {
    &:first-child {
      margin-top: 12px;
      margin-bottom: 12px;
    }
    margin-right: 12px;
  }

  // Center align small icon
  .v-list-group__items .v-list-item__icon {
    margin-top: 16px;
    margin-left: 3px;
    margin-right: 9px;
  }

  .v-list-item {
    height: 42px;
    // min-height: unset;
    &.v-list-item--active {
      &:not(.v-list-group__header) {
        color: white;
        background-image: linear-gradient(98deg, #c48eff, var(--v-primary-base) 94%);
      }

      // &.v-list-group__header {
      //   background-color: map-get($material, 'states', 'selected') !important;
      // }
    }
  }
}
</style>
