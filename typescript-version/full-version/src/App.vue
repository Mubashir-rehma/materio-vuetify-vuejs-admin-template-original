<script setup lang="ts">
import { useTheme } from 'vuetify'
import BuyNow from '@core/components/BuyNow.vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { hexToRgb } from '@layouts/utils'

const { syncInitialLoaderTheme, syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme, isAppRtl } = useThemeConfig()

const { global } = useTheme()

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme()
syncConfigThemeWithVuetifyTheme()
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <VMain>
        <RouterView />
        <BuyNow />
      </VMain>
    </VApp>
  </VLocaleProvider>
</template>
