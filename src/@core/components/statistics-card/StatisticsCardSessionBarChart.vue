<template>
  <v-card class="d-flex flex-column">
    <v-card-title class="font-weight-semibold">
      {{ statistics }}
    </v-card-title>
    <v-card-text class="flex-grow-1">
      <vue-apex-charts
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
  setup(props) {
    const chartOptions = {
      chart: {
        type: 'bar',
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
          top: -15,
          bottom: -15,
        },
      },

      colors: ['#ff4c51', '#9155fd', '#ff4c51', '#9155fd', '#9155fd'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          startingShape: 'rounded',
          colors: {
            backgroundBarColors: ['#5e566914'],
            backgroundBarRadius: 5,
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          show: false,
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
      if (props.chartConfig === null) {
        const options = JSON.parse(JSON.stringify(chartOptions))

        return options
      }

      return props.chartConfig
    })

    return {
      chartOptionsComputed,
    }
  },
}
</script>
