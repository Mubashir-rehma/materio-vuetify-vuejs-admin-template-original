<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { getLineAreaChartConfig } from '@core/libs/chartjs/chartjsConfig'
import LineChart from '@core/libs/chartjs/components/LineChart'

const { isDark } = useThemeConfig()
const { getTheme, current } = useTheme()

const chartColors = {
  blueColor: '#2c9aff',
  blueLightColor: '#84D0FF',
  greyLightColor: '#EDF1F4',
  white: '#fff',
}

const data = {
  labels: [
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12',
    '12/12',
    '13/12',
    '14/12',
    '15/12',
    '16/12',
    '17/12',
    '18/12',
    '19/12',
    '20/12',
    '',
  ],
  datasets: [
    {
      fill: true,
      tension: 0,
      label: 'Africa',
      pointRadius: 0.5,
      pointHoverRadius: 5,
      pointStyle: 'circle',
      backgroundColor: chartColors.blueColor,
      pointHoverBorderWidth: 5,
      borderColor: 'transparent',
      pointHoverBorderColor: chartColors.white,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: chartColors.blueColor,
      data: [40, 55, 45, 75, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
    },
    {
      fill: true,
      tension: 0,
      label: 'Asia',
      pointRadius: 0.5,
      pointHoverRadius: 5,
      pointStyle: 'circle',
      pointHoverBorderWidth: 5,
      borderColor: 'transparent',
      backgroundColor: chartColors.blueLightColor,
      pointHoverBorderColor: chartColors.white,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: chartColors.blueLightColor,
      data: [70, 85, 75, 150, 100, 140, 110, 105, 160, 150, 125, 190, 200, 240, 275],
    },
    {
      fill: true,
      tension: 0,
      label: 'Europe',
      pointRadius: 0.5,
      pointHoverRadius: 5,
      pointStyle: 'circle',
      pointHoverBorderWidth: 5,
      borderColor: 'transparent',
      backgroundColor: chartColors.greyLightColor,
      pointHoverBorderColor: chartColors.white,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: chartColors.greyLightColor,
      data: [240, 195, 160, 215, 185, 215, 185, 200, 250, 210, 195, 250, 235, 300, 315],
    },
  ],
}

const chartConfig = controlledComputed(isDark, () => getLineAreaChartConfig(getTheme(current.value)))
</script>

<template>
  <LineChart
    :chart-options="chartConfig"
    :height="400"
    :chart-data="data"
  />
</template>
