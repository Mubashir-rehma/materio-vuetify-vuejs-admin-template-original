<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const defaultConfig = {
  variant: 'outlined',
  color: 'primary',
  hideDetails: 'auto',
  density: 'comfortable',

}
</script>

<template>
  <AppDateTimePicker
    v-bind="defaultConfig"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
