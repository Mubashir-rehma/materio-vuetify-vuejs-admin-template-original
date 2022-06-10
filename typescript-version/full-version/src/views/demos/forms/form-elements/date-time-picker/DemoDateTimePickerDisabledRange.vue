<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
</script>

<template>
  <AppDateTimePicker
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: '2022-06-20', to: '2022-06-25' }] }"
  />
</template>
