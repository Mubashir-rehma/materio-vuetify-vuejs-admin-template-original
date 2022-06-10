<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
</script>

<template>
  <AppDateTimePicker
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
