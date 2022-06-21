<script setup lang="ts">
import type { ThemeSwitcherTheme } from '@layouts/types'

const themes: ThemeSwitcherTheme[] = [
  {
    name: 'light',
    icon: 'mdi-weather-sunny',
  },
  {
    name: 'dark',
    icon: 'mdi-weather-night',
  },
  {
    name: 'retro',
    icon: 'mdi-gamepad-variant-outline',
  },
]
</script>

<template>
  <ThemeSwitcher :themes="themes" />
</template>
