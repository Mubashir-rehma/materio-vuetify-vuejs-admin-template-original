<template>
  <div>
    <v-slider
      v-model="slider"
      thumb-label
      hint="Show thumb when using slider"
      persistent-hint
    ></v-slider>

    <v-slider
      v-model="slider"
      thumb-label="always"
      hint="Always show thumb label"
      persistent-hint
    ></v-slider>

    <v-slider
      v-model="slider"
      :thumb-size="24"
      thumb-label="always"
      hint="Custom thumb size"
      persistent-hint
    ></v-slider>

    <v-slider
      v-model="slider"
      :thumb-size="24"
      thumb-label="always"
      hint="Custom thumb label"
      persistent-hint
    >
      <template #thumb-label="{ value }">
        {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
      </template>
    </v-slider>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const satisfactionEmojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
    const slider = ref(45)

    return { satisfactionEmojis, slider }
  },
}
</script>
