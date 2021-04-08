<template>
  <vue-apex-charts
    type="area"
    height="400"
    :options="apexChatData.lineAreaChartSpline.chartOptions"
    :series="apexChatData.lineAreaChartSpline.series"
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
