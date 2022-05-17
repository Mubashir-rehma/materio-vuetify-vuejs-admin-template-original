<script setup lang="ts">
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { useLayouts } from '@layouts'
const { isDark } = useThemeConfig()
const { isAppRtl } = useLayouts()
</script>

<template>
  <!-- TODO: Remove this and use vuetify API for Adding RTL initial value -->
  <v-app
    :theme="isDark ? 'dark' : 'light'"
    :style="{ direction: isAppRtl ? 'rtl' : 'ltr' }"
  >
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">

</style>
