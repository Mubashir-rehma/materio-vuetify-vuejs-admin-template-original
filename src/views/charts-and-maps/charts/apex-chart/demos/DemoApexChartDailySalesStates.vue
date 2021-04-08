<template>
  <vue-apex-charts
    type="heatmap"
    height="350"
    :options="apexChatData.heatMapChart.chartOptions"
    :series="apexChatData.heatMapChart.series"
  />
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'

export default defineComponent({
  components: { VueApexCharts },
  setup() {
    return {
      apexChatData,
    }
  },
})
</script>
