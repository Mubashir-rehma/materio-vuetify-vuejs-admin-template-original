<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { getHeatMapChartConfig } from '@core/libs/apex-chart/apexCharConfig'

const chartConfig = getHeatMapChartConfig()

const generateDataHeatMap = (count: number, yRange: { min: number; max: number }) => {
  let i = 0
  const series = []

  while (i < count) {
    const x = `w${(i + 1).toString()}`
    const y = Math.floor(Math.random() * (yRange.max - yRange.min + 1)) + yRange.min
    series.push({ x, y })
    i++
  }

  return series
}

const series = [
  {
    name: 'SUN',
    data: generateDataHeatMap(24, {
      min: 0,
      max: 60,
    }),
  },
  {
    name: 'MON',
    data: generateDataHeatMap(24, {
      min: 0,
      max: 60,
    }),
  },
  {
    name: 'TUE',
    data: generateDataHeatMap(24, {
      min: 0,
      max: 60,
    }),
  },
  {
    name: 'WED',
    data: generateDataHeatMap(24, {
      min: 0,
      max: 60,
    }),
  },
  {
    name: 'THU',
    data: generateDataHeatMap(24, {
      min: 0,
      max: 60,
    }),
  },
  {
    name: 'FRI',
    data: generateDataHeatMap(24, {
      min: 0,
      max: 60,
    }),
  },
  {
    name: 'SAT',
    data: generateDataHeatMap(24, {
      min: 0,
      max: 60,
    }),
  },
]
</script>

<template>
  <VueApexCharts
    type="heatmap"
    height="350"
    :options="chartConfig"
    :series="series"
  />
</template>
