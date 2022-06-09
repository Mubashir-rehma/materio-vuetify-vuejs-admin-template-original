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
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
