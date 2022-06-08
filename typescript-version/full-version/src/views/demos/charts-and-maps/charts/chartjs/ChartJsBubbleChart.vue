<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { getBubbleChartConfig } from '@core/libs/chartjs/chartjsConfig'
import BubbleChart from '@core/libs/chartjs/components/BubbleChart'

const { isDark } = useThemeConfig()
const { getTheme, current } = useTheme()

const chartConfig = controlledComputed(isDark, () => getBubbleChartConfig(getTheme(current.value)))

const chartColors = {
  primaryColorShade: '#836AF9',
  warningColorShade: '#ffe802',
}

const data = {
  animation: { duration: 10000 },
  datasets: [
    {
      label: 'Dataset 1',
      borderColor: chartColors.primaryColorShade,
      backgroundColor: chartColors.primaryColorShade,
      data: [
        { x: 20, y: 74, r: 10 },
        { x: 10, y: 110, r: 5 },
        { x: 30, y: 165, r: 7 },
        { x: 40, y: 200, r: 20 },
        { x: 90, y: 185, r: 7 },
        { x: 50, y: 240, r: 7 },
        { x: 60, y: 275, r: 10 },
        { x: 70, y: 305, r: 5 },
        { x: 80, y: 325, r: 4 },
        { x: 100, y: 310, r: 5 },
        { x: 110, y: 240, r: 5 },
        { x: 120, y: 270, r: 7 },
        { x: 130, y: 300, r: 6 },
      ],
    },
    {
      label: 'Dataset 2',
      borderColor: chartColors.warningColorShade,
      backgroundColor: chartColors.warningColorShade,
      data: [
        { x: 30, y: 72, r: 5 },
        { x: 40, y: 110, r: 7 },
        { x: 20, y: 135, r: 6 },
        { x: 10, y: 160, r: 12 },
        { x: 50, y: 285, r: 5 },
        { x: 60, y: 235, r: 5 },
        { x: 70, y: 275, r: 7 },
        { x: 80, y: 290, r: 4 },
        { x: 90, y: 250, r: 10 },
        { x: 100, y: 220, r: 7 },
        { x: 120, y: 230, r: 4 },
        { x: 110, y: 320, r: 15 },
        { x: 130, y: 330, r: 7 },
      ],
    },
  ],
}
</script>

<template>
  <BubbleChart
    :height="400"
    :chart-data="data"
    :chart-options="chartConfig"
  />
</template>
