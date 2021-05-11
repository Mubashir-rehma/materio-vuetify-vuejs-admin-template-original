<template>
  <v-card>
    <v-card-title class="font-weight-semibold">
      {{ statistics }}
    </v-card-title>

    <vue-apex-charts
      type="radialBar"
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
      chart: {
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1,
        },
      },
      colors: ['#16b1ff'],
      plotOptions: {
        radialBar: {
          offsetY: -5,
          startAngle: -90,
          endAngle: 90,
          hollow: {
            size: '65%',
          },
          track: {
            background: '#ebe9f1',
            strokeWidth: '65%',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              color: '#5e5669de',
              fontSize: '1.25rem',
              fontWeight: '600',
            },
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },
      grid: {
        padding: {
          bottom: 30,
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
