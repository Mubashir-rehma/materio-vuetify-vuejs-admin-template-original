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
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: '2022-06-20', to: '2022-06-25' }] }"
  />
</template>
