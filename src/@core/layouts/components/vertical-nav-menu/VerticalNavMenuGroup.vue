<template>
  <v-list-group
    ref="refVListGroup"
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
// eslint-disable-next-line object-curly-newline
import { computed, inject, onMounted, ref, watch } from '@vue/composition-api'
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
  setup(props) {
    const { resolveNavItemComponent, isNavGroupActive } = useNav()
    const { menuIsVerticalNavMini } = useAppConfig()
    const isMouseOver = inject('isMouseOver')

    // Template ref
    const refVListGroup = ref(null)

    // VNavigationDrawer Internal API
    const isGroupExpanded = computed({
      get: () => (refVListGroup.value ? refVListGroup.value.isActive : false),
      set: value => {
        refVListGroup.value.isActive = value
      },
    })
    const setGroupExpanded = val => {
      isGroupExpanded.value = val
    }

    // Manual Control of Opening and closing group
    const isGroupActive = computed(() => isNavGroupActive(props.item.children))

    watch(menuIsVerticalNavMini, val => {
      if (val) isGroupExpanded.value = false
      else {
        isGroupExpanded.value = isGroupActive.value
      }
    })

    watch(isMouseOver, value => {
      if (menuIsVerticalNavMini.value) {
        if (value) isGroupExpanded.value = isGroupActive.value
        else isGroupExpanded.value = false
      }
    })

    onMounted(() => {
      setGroupExpanded(isGroupActive.value)
    })

    return {
      resolveNavItemComponent,
      isNavGroupActive,
      menuIsVerticalNavMini,
      refVListGroup,
      isMouseOver,
    }
  },
}
</script>
