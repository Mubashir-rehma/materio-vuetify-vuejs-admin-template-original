<template>
  <v-card>
    <v-card-title class="font-weight-semibold">
      {{ statistics }}
    </v-card-title>
    <v-card-text>
      <vue-apex-charts
        type="line"
        :options="chartOptionsComputed"
        :series="chartSeries"
      ></vue-apex-charts>
    </v-card-text>
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
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      grid: {
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: -30,
          bottom: -10,
        },
      },
      stroke: {
        width: 3,
      },

      colors: ['#56ca00'],
      markers: {
        size: 2,
        colors: '#56ca00',
        strokeColors: '#56ca00',
        strokeWidth: 2,
        strokeOpacity: 1,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: '#ffffff',
            strokeColor: '#56ca00',
            size: 5,
          },
        ],
        shape: 'circle',
        radius: 2,
        hover: {
          size: 3,
        },
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontSize: '0px',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        x: {
          show: false,
        },
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
