<template>
  <v-card>
    <v-card-title>
      <div>
        <p class="mb-2">
          Sales State
        </p>
        <small class="text--secondary text-base">Total $42,580 Sales</small>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
      >
        <v-icon size="22">
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <!-- Chart -->
    <vue-apex-charts
      :options="chartOptions"
      :series="chartData"
    ></vue-apex-charts>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical, mdiTrendingUp, mdiCurrencyUsd } from '@mdi/js'

import { getVuetify } from '@core/utils'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      grid: {
        show: false,
        padding: {
          left: -10,
        },
      },
      chart: {
        type: 'line',
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          top: 18,
          left: 0,
          blur: 5,
          opacity: 0.2,
          color: $vuetify.theme.currentTheme.primary,
        },
      },
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      colors: [$vuetify.theme.currentTheme.primary],
      legend: {
        show: false,
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
        labels: {
          show: false,
        },
        min: 0,
      },
      markers: {
        size: 1,
        colors: ['transparent'],
        strokeColors: 'transparent',
        strokeWidth: 4,
        offsetX: -6,
        offsetY: 5,
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: '#fff',
            strokeColor: $vuetify.theme.currentTheme.primary,
            size: 7,
          },
        ],
      },
    }

    const chartData = [
      {
        name: 'Traffic Rate',
        data: [150, 300, 200, 600, 500, 800],
      },
    ]

    return {
      chartOptions,
      chartData,

      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiCurrencyUsd,
      },
    }
  },
}
</script>
