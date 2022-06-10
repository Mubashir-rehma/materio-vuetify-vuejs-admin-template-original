<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
const date = ref<string>()
</script>

<template>
  <AppDateTimePicker
    id="1"
    v-model="date"
    label="Default"
  />
</template>

