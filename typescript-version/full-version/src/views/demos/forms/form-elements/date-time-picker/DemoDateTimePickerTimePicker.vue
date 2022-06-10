<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
</script>

<template>
  <AppDateTimePicker
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
