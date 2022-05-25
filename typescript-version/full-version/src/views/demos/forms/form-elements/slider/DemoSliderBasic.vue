<script setup lang="ts">
const sliderValue = ref(30)
</script>

<template>
  <v-slider />

  <v-slider
    v-model="sliderValue"
    hide-details
  />
</template>
