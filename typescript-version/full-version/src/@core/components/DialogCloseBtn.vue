<script setup lang="ts">
interface Props {
  icon?: string
  iconSize?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'tabler-x',
  iconSize: '22',
})
</script>

<template>
  <VBtn
    icon
    class="v-dialog-close-btn"
  >
    <VIcon
      :icon="props.icon"
      :size="props.iconSize"
    />
  </VBtn>
</template>
