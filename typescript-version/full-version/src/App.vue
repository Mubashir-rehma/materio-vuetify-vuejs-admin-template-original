<script setup lang="ts">
import BuyNow from '@core/components/BuyNow.vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'
const { syncInitialLoaderTheme, syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme, syncRtlWithLocale } = useThemeConfig()

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme()

syncRtlWithLocale()
syncConfigThemeWithVuetifyTheme()
</script>

<template>
  <VApp>
    <VMain>
      <RouterView />
      <BuyNow />
    </VMain>
  </VApp>
</template>
