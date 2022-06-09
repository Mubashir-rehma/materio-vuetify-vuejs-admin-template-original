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
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
