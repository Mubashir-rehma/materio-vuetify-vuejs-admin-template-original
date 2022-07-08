<script setup lang="ts">
interface Props {
  title: string
  divider?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  divider: true,
})
</script>

<template>
  <VDivider v-if="props.divider" />

  <div class="customizer-section">
    <h3 class="mb-3">
      {{ props.title }}
    </h3>

    <slot />
  </div>
</template>
