<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

defineEmits<{
  (e: 'cancel', el: MouseEvent): void
}>()
</script>

<template>
  <div class="pa-5 d-flex align-center">
    <h3 class="font-weight-medium text-lg">
      {{ props.title }}
    </h3>
    <VSpacer />

    <slot name="beforeClose" />

    <IconBtn
      class="text-medium-emphasis"
      size="x-small"
      @click="$emit('cancel', $event)"
    >
      <VIcon icon="ri-close-line" />
    </IconBtn>
  </div>
</template>
