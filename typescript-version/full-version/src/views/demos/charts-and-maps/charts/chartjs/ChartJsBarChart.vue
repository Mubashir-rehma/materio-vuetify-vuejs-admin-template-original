<script setup lang="ts">
import { useTheme } from 'vuetify'
import BarChart from '@/@core/libs/chartjs/components/BarChart'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { getLatestBarChartConfig } from '@core/libs/chartjs/chartjsConfig'

const { isDark } = useThemeConfig()
const { getTheme, current } = useTheme()

const chartOptions = controlledComputed(isDark, () => getLatestBarChartConfig(getTheme(current.value)))

const data = {
  labels: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12'],
  datasets: [
    {
      data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
      backgroundColor: '#ffcf5c',
      borderColor: 'transparent',
      borderRadius: { topRight: 15, topLeft: 15 },
      barThickness: 15,
    },
  ],
}
</script>

<template>
  <BarChart
    :height="400"
    :chart-data="data"
    :chart-options="chartOptions"
  />
</template>
