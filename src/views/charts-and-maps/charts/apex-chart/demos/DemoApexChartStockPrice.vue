<template>
  <vue-apex-charts
    type="candlestick"
    height="400"
    :options="apexChatData.candlestickChart.chartOptions"
    :series="apexChatData.candlestickChart.series"
  />
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'

export default defineComponent({
  components: {
    VueApexCharts,
  },
  setup() {
    return {
      apexChatData,
    }
  },
})
</script>
