<script lang="ts" setup>
interface Props {
  menuList?: unknown[]
  itemProps?: boolean
  iconSize?: string
}

const props = defineProps<Props>()
</script>

<template>
  <IconBtn>
    <VIcon
      icon="ri-more-2-line"
      :size="iconSize"
    />

    <VMenu
      v-if="props.menuList"
      activator="parent"
    >
      <VList
        :items="props.menuList"
        :item-props="props.itemProps"
      />
    </VMenu>
  </IconBtn>
</template>
