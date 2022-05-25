<script lang="ts" setup>
const sliderValues = ref([10, 60])
</script>

<template>
  <v-range-slider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
    hide-details
  />
</template>
