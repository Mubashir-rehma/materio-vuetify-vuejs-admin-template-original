<template>
  <vue-apex-charts
    type="bar"
    height="350"
    :options="apexChatData.barChart.chartOptions"
    :series="apexChatData.barChart.series"
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
    return { apexChatData }
  },
})
</script>
