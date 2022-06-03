<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { getRadarChartConfig } from '@core/libs/apex-chart/apexCharConfig'

const series = [
  {
    name: 'iPhone 11',
    data: [41, 64, 81, 60, 42, 42, 33, 23],
  },
  {
    name: 'Samsung s20',
    data: [65, 46, 42, 25, 58, 63, 76, 43],
  },
]
const chartConfig = getRadarChartConfig()
</script>

<template>
  <VueApexCharts
    type="radar"
    height="400"
    :options="chartConfig"
    :series="series"
  />
</template>
