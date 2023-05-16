<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
</script>

<template>
  <VResponsive
    :style="{ background: `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex gap-4">
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
          prepend-icon="mdi-alpha-r"
        />
        <VTextField
          v-model="redColorValue"
          type="number"
          variant="outlined"
          density="compact"
          style="max-inline-size: 5rem;"
          :max="255"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex gap-4">
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="mdi-alpha-g"
        />
        <VTextField
          v-model="greenColorValue"
          variant="outlined"
          type="number"
          style="max-inline-size: 5rem;"
          density="compact"
          :max="255"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex gap-4">
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="mdi-alpha-b"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          variant="outlined"
          style="max-inline-size: 5rem;"
          density="compact"
          :max="255"
        />
      </div>
    </VCol>
  </VRow>
</template>
