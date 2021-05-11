<template>
  <v-card>
    <v-card-title class="font-weight-semibold">
      {{ statistics }}
    </v-card-title>
    <vue-apex-charts
      :options="chartOptionsComputed"
      :series="chartSeries"
    ></vue-apex-charts>
    <v-card-text class="font-weight-semibold text-center text--primary">
      {{ statTitle }}
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { computed } from '@vue/composition-api'

export default {
  components: { VueApexCharts },
  props: {
    statistics: { type: String, default: '' },
    statTitle: { type: String, default: '' },
    chartSeries: {
      type: Array,
      default: () => [],
    },
    chartConfig: {
      type: Object,
      default: null,
    },
  },
  setup(prop) {
    const chartOptions = {
      grid: {
        show: false,
        padding: {
          top: 10,
          left: 10,
          right: 30,
        },
      },
      chart: {
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 25,
          left: 2,
          blur: 3,
          color: '#9155fd',
          opacity: 0.09,
        },
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      markers: {
        size: 1,
        colors: '#9155fd',
        strokeColors: '#9155fd',
        strokeWidth: 3,
        strokeOpacity: 1,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: '#ffffff',
            strokeColor: '#9155fd',
            size: 5,
          },
        ],
        shape: 'circle',
        radius: 2,
        hover: {
          size: 3,
        },
      },
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      xaxis: {
        type: 'numeric',
      },
      colors: ['#9155fd'],
      tooltip: {
        x: { show: false },
      },
    }

    const chartOptionsComputed = computed(() => {
      if (prop.chartConfig === null) {
        const options = JSON.parse(JSON.stringify(chartOptions))

        return options
      }

      return prop.chartConfig
    })

    return {
      chartOptionsComputed,
    }
  },
}
</script>
