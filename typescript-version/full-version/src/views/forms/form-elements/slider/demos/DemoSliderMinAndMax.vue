<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
</script>

<template>
  <v-slider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
    hide-details
  >
    <template #append>
      <v-text-field
        v-model="slider"
        variant="underlined"
        type="number"
        hide-details
      />
    </template>
  </v-slider>
</template>
