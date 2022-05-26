<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = useClamp(0, 0, 100) // useClamp(value, min, max)
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-slider
        v-model="mediaSlider"
        prepend-icon="mdi-volume-high"
      />
    </v-col>

    <v-col cols="12">
      <v-slider
        v-model="alarmSlider"
        append-icon="mdi-alarm"
      />
    </v-col>

    <v-col cols="12">
      <v-slider
        v-model="zoomInOut"
        append-icon="mdi-magnify-plus-outline"
        prepend-icon="mdi-magnify-minus-outline"
        @click:append="zoomInOut += 10"
        @click:prepend="zoomInOut -= 10"
      />
    </v-col>
  </v-row>
</template>
