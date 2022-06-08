<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { getHorizontalBarChartConfig } from '@core/libs/chartjs/chartjsConfig'
import BarChart from '@core/libs/chartjs/components/BarChart'

const { isDark } = useThemeConfig()
const { getTheme, current } = useTheme()

const chartOptions = controlledComputed(isDark, () => getHorizontalBarChartConfig(getTheme(current.value)))

const themeColors = getTheme(current.value)

const data = {
  labels: ['MON', 'TUE', 'WED ', 'THU', 'FRI'],
  datasets: [
    {
      maxBarThickness: 15,
      label: 'Market Data',
      backgroundColor: themeColors.colors.warning,
      borderColor: 'transparent',
      data: [710, 350, 580, 460, 120],
    },
    {
      maxBarThickness: 15,
      backgroundColor: themeColors.colors.info,
      label: 'Personal Data',
      borderColor: 'transparent',
      data: [430, 590, 510, 240, 360],
    },
  ],
}
</script>

<template>
  <BarChart
    :height="375"
    :chart-data="data"
    :chart-options="chartOptions"
  />
</template>
