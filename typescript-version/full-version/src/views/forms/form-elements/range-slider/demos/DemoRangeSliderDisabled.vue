<script lang="ts" setup>
const slidersValues = ref([30, 60])
</script>

<template>
  <v-range-slider
    v-model="slidersValues"
    disabled
    value="30"
    label="Disabled"
    hide-details
  />
</template>
