<script setup lang="ts">
import { useThemeConfig } from '@core/composable/useThemeConfig'
const { syncInitialLoaderTheme, syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme, isAppRtl } = useThemeConfig()

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme()

syncConfigThemeWithVuetifyTheme()

// ℹ️ TODO: Remove once vuetify provides an API to change RTL classes in VApp
const vApp = ref()
const changeVuetiyDirClasses = () => {
  const elVApp: HTMLDivElement = vApp.value.$el

  if (isAppRtl.value) {
    elVApp.classList.remove('v-locale--is-ltr')
    elVApp.classList.add('v-locale--is-rtl')
  }
  else {
    elVApp.classList.add('v-locale--is-ltr')
    elVApp.classList.remove('v-locale--is-rtl')
  }
}
watch(isAppRtl, changeVuetiyDirClasses)
</script>

<template>
  <!-- TODO: Remove this and use vuetify API for Adding RTL initial value -->
  <VApp
    ref="vApp"
    :style="{ direction: isAppRtl ? 'rtl' : 'ltr', overflow: 'unset' }"
  >
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>
