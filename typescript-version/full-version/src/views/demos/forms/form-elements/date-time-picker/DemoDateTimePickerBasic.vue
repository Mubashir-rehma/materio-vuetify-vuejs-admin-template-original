<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
const date = ref<string>()

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
    id="1"
    v-model="date"
    label="Default"
  />
</template>

