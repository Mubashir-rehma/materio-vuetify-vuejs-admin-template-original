<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { getRadarChartConfig } from '@core/libs/chartjs/chartjsConfig'
import RadarChart from '@core/libs/chartjs/components/RadarChart'

const { isDark } = useThemeConfig()
const theme = useTheme()

const chartConfig = controlledComputed(isDark, () => getRadarChartConfig(theme.current.value))

const chartData = {
  labels: ['STA', 'STR', 'AGI', 'VIT', 'CHA', 'INT'],
  datasets: [
    {
      label: 'Donté Panlin',
      backgroundColor: 'rgba(255,161,161, 0.9)',
      borderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      data: [25, 59, 90, 81, 60, 82],
    },
    {
      label: 'Mireska Sunbreeze',
      backgroundColor: 'rgba(155,136,250, 0.9)',
      borderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      data: [40, 100, 40, 90, 40, 90],
    },
  ],
}
</script>

<template>
  <RadarChart
    :height="400"
    :chart-data="chartData"
    :chart-options="chartConfig"
  />
</template>
