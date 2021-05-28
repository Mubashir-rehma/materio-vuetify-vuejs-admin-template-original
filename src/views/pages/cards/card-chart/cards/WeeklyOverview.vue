<template>
  <v-card
    class="chart-card-weekly-overview"
    :class="[rootThemeClasses]"
  >
    <v-card-title>
      Weekly Overview
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
    <v-card-text>
      <!-- Chart -->
      <vue-apex-charts
        id="chart-weekly-overview"
        :options="chartOptions"
        :series="chartData"
      ></vue-apex-charts>

      <div class="d-flex align-center">
        <span class="text--primary text-xl font-weight-semibold mr-4">45%</span>
        <span>Your sales perfomance in 45% 🤩 better compare to last month</span>
      </div>
      <v-btn
        block
        color="primary"
        class="mt-6"
        outlined
      >
        Details
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical } from '@mdi/js'

import { getVuetify } from '@core/utils'
import useVuetify from '@core/utils/vuetify'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()
    const { rootThemeClasses } = useVuetify()

    const chartOptions = {
      colors: ['#eee'],
      chart: {
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
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
        labels: {
          offsetY: 3,
          formatter: value => `$${kFormatter(value, 0)}`,
        },
      },
      grid: {
        strokeDashArray: 12,
      },
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColors: $vuetify.theme.currentTheme.primary,
        hover: {
          size: 4,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          borderRadius: 8,
          startingShape: 'rounded',
          endingShape: 'rounded',
        },
      },
      stroke: {
        width: [2, 2],
      },
    }

    const chartData = [
      {
        name: 'Website Blog',
        type: 'column',
        data: [21000, 30000, 25000, 30000, 35000, 30000, 25000, 32000],
      },
      {
        name: 'Social Media',
        type: 'line',
        data: [12000, 19000, 19000, 21000, 28000, 20000, 21000, 29000],
        color: $vuetify.theme.currentTheme.primary,
      },
    ]

    return {
      chartOptions,
      chartData,
      rootThemeClasses,

      icons: {
        mdiDotsVertical,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/mixins.scss';

@include theme-diff(chart-card-weekly-overview, #f5f5f5, #3b355a) using ($value) {
  .apexcharts-bar-area {
    fill: $value;
    stroke: $value;
  }
}
</style>
