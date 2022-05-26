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

  <v-row class="mt-5">
    <v-col cols="12">
      <!-- R -->
      <v-slider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-r"
      >
        <template #append>
          <v-text-field
            v-model="redColorValue"
            type="number"
            variant="underlined"
          />
        </template>
      </v-slider>
    </v-col>

    <v-col cols="12">
      <!-- G -->
      <v-slider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-g"
      >
        <template #append>
          <v-text-field
            v-model="greenColorValue"
            type="number"
            variant="underlined"
          />
        </template>
      </v-slider>
    </v-col>

    <v-col cols="12">
      <!-- B -->
      <v-slider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="mdi-alpha-b"
      >
        <template #append>
          <v-text-field
            v-model="blueColorValue"
            type="number"
            variant="underlined"
          />
        </template>
      </v-slider>
    </v-col>
  </v-row>
</template>
