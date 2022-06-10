<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
</script>

<template>
  <AppDateTimePicker
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
