<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
</script>

<template>
  <v-responsive
    :style="{ background: `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})` }"
    height="150px"
  />

  <div class="mt-5">
    <!-- R -->
    <v-slider
      v-model="redColorValue"
      :max="255"
      :step="1"
      prepend-icon="mdi-alpha-r"
      hide-details
    >
      <template #append>
        <v-text-field
          v-model="redColorValue"
          type="number"
          variant="underlined"
        />
      </template>
    </v-slider>

    <!-- G -->
    <v-slider
      v-model="greenColorValue"
      :max="255"
      :step="1"
      prepend-icon="mdi-alpha-g"
      hide-details
    >
      <template #append>
        <v-text-field
          v-model="greenColorValue"
          type="number"
          variant="underlined"
        />
      </template>
    </v-slider>

    <!-- B -->
    <v-slider
      v-model="blueColorValue"
      :max="255"
      :step="1"
      prepend-icon="mdi-alpha-b"
      hide-details
    >
      <template #append>
        <v-text-field
          v-model="blueColorValue"
          type="number"
          variant="underlined"
          hide-details
        />
      </template>
    </v-slider>
  </div>
</template>
