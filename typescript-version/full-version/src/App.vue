<script setup lang="ts">
import { useThemeConfig } from '@core/composable/useThemeConfig'
const { isDark } = useThemeConfig()
</script>

<template>
  <v-app :theme="isDark ? 'dark' : 'light'">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">

</style>
