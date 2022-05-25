<script lang="ts" setup>
const alertShadow = ref(5)
</script>

<template>
  <v-slider
    v-model="alertShadow"
    color="primary"
    :max="24"
    :min="0"
    :step="1"
    thumb-label
  />

  <v-alert
    color="primary"
    :elevation="alertShadow"
  >
    I'm an alert with box shadow.
  </v-alert>
</template>
