<script lang="ts" setup>
const toggleExclusive = ref(1)
</script>

<template>
  <v-btn-toggle
    v-model="toggleExclusive"
    divided
  >
    <v-btn
      flat
      variant="outlined"
    >
      <v-icon>mdi-format-align-left</v-icon>
    </v-btn>
    <v-btn
      flat
      variant="outlined"
    >
      <v-icon>mdi-format-align-center</v-icon>
    </v-btn>
    <v-btn
      flat
      variant="outlined"
    >
      <v-icon>mdi-format-align-right</v-icon>
    </v-btn>
    <v-btn
      flat
      variant="outlined"
    >
      <v-icon>mdi-format-align-justify</v-icon>
    </v-btn>
  </v-btn-toggle>
</template>
