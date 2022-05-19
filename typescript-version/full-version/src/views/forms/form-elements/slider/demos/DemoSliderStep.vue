<script lang="ts" setup>
const value = ref(0)
</script>

<template>
  <v-slider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
    hide-details
  />
</template>
