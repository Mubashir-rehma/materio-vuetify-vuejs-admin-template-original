<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = useClamp(0, 0, 100) // useClamp(value, min, max)
</script>

<template>
  <v-slider
    v-model="mediaSlider"
    prepend-icon="mdi-volume-high"
  />

  <v-slider
    v-model="alarmSlider"
    append-icon="mdi-alarm"
  />

  <v-slider
    v-model="zoomInOut"
    append-icon="mdi-magnify-plus-outline"
    prepend-icon="mdi-magnify-minus-outline"
    hide-details
    @click:append="zoomInOut += 10"
    @click:prepend="zoomInOut -= 10"
  />
</template>
