<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { getPolarChartConfig } from '@core/libs/chartjs/chartjsConfig'
import PolarAreaChart from '@core/libs/chartjs/components/PolarAreaChart'

const vuetifyTheme = useTheme()
const { theme } = useThemeConfig()

const themeColors = vuetifyTheme.current.value

const chartConfig = controlledComputed(theme, () => getPolarChartConfig(vuetifyTheme.current.value))

// custom colors
const chartCustomColor = {
  primaryColorShade: '#836AF9',
  yellowColor: '#ffe800',
  greyColor: '#4F5D70',
}

const data = {
  labels: ['Africa', 'Asia', 'Europe', 'America', 'Antarctica', 'Australia'],
  datasets: [
    {
      label: 'Population (millions)',
      backgroundColor: [
        chartCustomColor.primaryColorShade,
        chartCustomColor.yellowColor,
        themeColors.colors.primary,
        chartCustomColor.greyColor,
        themeColors.colors.info,
        themeColors.colors.success,
      ],
      data: [19, 17.5, 15, 13.5, 11, 9],
      borderWidth: 0,
    },
  ],
}
</script>

<template>
  <PolarAreaChart
    :height="400"
    :chart-data="data"
    :chart-options="chartConfig"
  />
</template>
