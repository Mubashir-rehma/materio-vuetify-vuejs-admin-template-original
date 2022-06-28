<script setup lang="ts">
import { useThemeConfig } from '@core/composable/useThemeConfig'
const { syncInitialLoaderTheme, syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme, isAppRtl } = useThemeConfig()

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme()

syncConfigThemeWithVuetifyTheme()
</script>

<template>
  <!-- TODO: Remove this and use vuetify API for Adding RTL initial value -->
  <v-app :style="{ direction: isAppRtl ? 'rtl' : 'ltr' }">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
