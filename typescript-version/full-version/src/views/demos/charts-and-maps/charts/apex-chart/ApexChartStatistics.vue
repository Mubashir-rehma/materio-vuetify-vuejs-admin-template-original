<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { getRadialBarChartConfig } from '@core/libs/apex-chart/apexCharConfig'

const { isDark } = useThemeConfig()
const { getTheme, current } = useTheme()

const statisticsChartConfig = controlledComputed(isDark, () => getRadialBarChartConfig(getTheme(current.value)))

const series = [80, 50, 35]
</script>

<template>
  <VueApexCharts
    type="radialBar"
    height="400"
    :options="statisticsChartConfig"
    :series="series"
  />
</template>
