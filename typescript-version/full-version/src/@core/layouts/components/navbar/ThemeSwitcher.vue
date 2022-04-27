<script setup lang="ts">
import { useThemeConfig } from '@core'

const { isDark } = useThemeConfig()
</script>

<template>
  <v-btn
    icon
    variant="text"
    color="default"
    @click="isDark = !isDark"
  >
    <v-icon :icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'" />
  </v-btn>
</template>
