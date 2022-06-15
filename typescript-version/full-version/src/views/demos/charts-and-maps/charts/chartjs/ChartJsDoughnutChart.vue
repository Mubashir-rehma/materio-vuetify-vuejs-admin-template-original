<script setup lang="ts">
import { useTheme } from 'vuetify'
import { getDoughnutChartConfig } from '@core/libs/chartjs/chartjsConfig'
import DoughnutChart from '@core/libs/chartjs/components/DoughnutChart'

const theme = useTheme()
const themeColors = theme.current.value

const themeConfig = getDoughnutChartConfig()

const chartColors = {
  successColorShade: '#28dac6',
  warningLightColor: '#FDAC34',
}

const data = {
  labels: ['Tablet', 'Mobile', 'Desktop'],
  datasets: [
    {
      data: [10, 10, 80],
      backgroundColor: [chartColors.successColorShade, chartColors.warningLightColor, themeColors.colors.primary],
      borderWidth: 0,
    },
  ],
}
</script>

<template>
  <DoughnutChart
    :height="275"
    :chart-data="data"
    :chart-options="themeConfig"
  />
</template>
