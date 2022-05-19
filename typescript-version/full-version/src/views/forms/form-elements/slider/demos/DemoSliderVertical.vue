<script lang="ts" setup>
const value = ref(10)
</script>

<template>
  <v-slider
    v-model="value"
    direction="vertical"
  />
</template>
