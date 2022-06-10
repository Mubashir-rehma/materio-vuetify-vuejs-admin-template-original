<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
</script>

<template>
  <AppDateTimePicker
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
