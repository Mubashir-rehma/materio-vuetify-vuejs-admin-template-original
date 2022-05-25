<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['mdi-snowflake', 'mdi-leaf', 'mdi-fire', 'mdi-water']
</script>

<template>
  <v-range-slider
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label="focus"
    tick-size="4"
  >
    <template #thumb-label="{modelValue }">
      <v-icon :icon="icons[modelValue]" />
    </template>
  </v-range-slider>
</template>
