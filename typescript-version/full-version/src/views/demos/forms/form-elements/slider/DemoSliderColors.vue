<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
</script>

<template>
  <v-row>
    <v-col cols="12">
      <div class="text-caption">
        color
      </div>
      <v-slider
        v-model="sliderColorValue"
        color="error"
      />
    </v-col>

    <v-col cols="12">
      <div class="text-caption">
        track-color
      </div>
      <v-slider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </v-col>

    <v-col cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <v-slider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </v-col>
  </v-row>
</template>
