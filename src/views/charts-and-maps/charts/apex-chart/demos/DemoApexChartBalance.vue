<template>
  <vue-apex-charts
    type="line"
    height="400"
    :options="apexChatData.lineChartSimple.chartOptions"
    :series="apexChatData.lineChartSimple.series"
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
