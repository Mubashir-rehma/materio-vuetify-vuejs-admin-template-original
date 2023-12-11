<script setup lang="ts">
interface Props {
  title: string
}
interface Emit {
  (e: 'cancel', el: MouseEvent): void
}
const props = defineProps<Props>()

defineEmits<Emit>()
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
      @click="(event:MouseEvent) => $emit('cancel', event)"
    >
      <VIcon icon="ri-close-line" />
    </IconBtn>
  </div>
</template>
