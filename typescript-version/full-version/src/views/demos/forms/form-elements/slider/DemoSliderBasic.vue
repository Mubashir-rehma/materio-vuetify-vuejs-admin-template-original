<script setup lang="ts">
const sliderValue = ref(30)
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-slider />
    </v-col>

    <v-col cols="12">
      <v-slider
        v-model="sliderValue"
      />
    </v-col>
  </v-row>
</template>
