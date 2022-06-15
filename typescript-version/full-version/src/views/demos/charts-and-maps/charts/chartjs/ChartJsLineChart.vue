<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { getLineChartConfig } from '@core/libs/chartjs/chartjsConfig'
import LineChart from '@core/libs/chartjs/components/LineChart'

const { isDark } = useThemeConfig()
const theme = useTheme()
const themeColors = theme.current.value

const data = {
  labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
  datasets: [
    {
      fill: false,
      tension: 0.5,
      pointRadius: 1,
      label: 'Europe',
      pointHoverRadius: 5,
      pointStyle: 'circle',
      borderColor: themeColors.colors.primary,
      backgroundColor: themeColors.colors.primary,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: themeColors.colors.primary,
      data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
    },
    {
      fill: false,
      tension: 0.5,
      label: 'Asia',
      pointRadius: 1,
      pointHoverRadius: 5,
      pointStyle: 'circle',
      borderColor: themeColors.colors.warning,
      backgroundColor: themeColors.colors.warning,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: themeColors.colors.warning,
      data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
    },
    {
      fill: false,
      tension: 0.5,
      pointRadius: 1,
      label: 'Africa',
      pointHoverRadius: 5,
      pointStyle: 'circle',
      borderColor: themeColors.colors.success,
      backgroundColor: themeColors.colors.success,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: themeColors.colors.success,
      data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
    },
  ],
}

const chartConfig = controlledComputed(isDark, () => getLineChartConfig(theme.current.value))
</script>

<template>
  <LineChart
    :chart-options="chartConfig"
    :height="400"
    :chart-data="data"
  />
</template>
