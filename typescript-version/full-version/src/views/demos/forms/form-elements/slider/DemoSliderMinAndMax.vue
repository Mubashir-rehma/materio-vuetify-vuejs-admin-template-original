<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
</script>

<template>
  <div class="d-flex gap-4">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <VTextField
      v-model="slider"
      variant="outlined"
      density="compact"
      hide-details
      type="number"
      style="max-inline-size: 5rem;"
      :max="max"
    />
  </div>
</template>
