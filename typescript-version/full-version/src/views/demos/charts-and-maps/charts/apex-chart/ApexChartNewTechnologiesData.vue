<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { getScatterChartConfig } from '@core/libs/apex-chart/apexCharConfig'

const { isDark } = useThemeConfig()
const { getTheme, current } = useTheme()

const scatterChartConfig = controlledComputed(isDark, () => getScatterChartConfig(getTheme(current.value)),
)

const series = [
  {
    name: 'Angular',
    data: [
      [5.4, 170],
      [5.4, 100],
      [6.3, 170],
      [5.7, 140],
      [5.9, 130],
      [7.0, 150],
      [8.0, 120],
      [9.0, 170],
      [10.0, 190],
      [11.0, 220],
      [12.0, 170],
      [13.0, 230],
    ],
  },
  {
    name: 'Vue',
    data: [
      [14.0, 220],
      [15.0, 280],
      [16.0, 230],
      [18.0, 320],
      [17.5, 280],
      [19.0, 250],
      [20.0, 350],
      [20.5, 320],
      [20.0, 320],
      [19.0, 280],
      [17.0, 280],
      [22.0, 300],
      [18.0, 120],
    ],
  },
  {
    name: 'React',
    data: [
      [14.0, 290],
      [13.0, 190],
      [20.0, 220],
      [21.0, 350],
      [21.5, 290],
      [22.0, 220],
      [23.0, 140],
      [19.0, 400],
      [20.0, 200],
      [22.0, 90],
      [20.0, 120],
    ],
  },
]
</script>

<template>
  <VueApexCharts
    type="scatter"
    height="400"
    :options="scatterChartConfig"
    :series="series"
  />
</template>
