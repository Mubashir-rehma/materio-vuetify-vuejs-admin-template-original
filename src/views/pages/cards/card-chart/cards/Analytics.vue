<template>
  <v-card>
    <v-card-title>
      Analytics
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
        :options="chartOptions"
        :series="chartData"
      ></vue-apex-charts>
      <!-- Revenue -->
      <div class="d-flex">
        <span class="text--primary font-weight-semibold">Revenue</span>
        <v-spacer></v-spacer>
        <span>$845k</span>
        <span class="text--primary font-weight-semibold mx-6">82%</span>
        <v-icon color="success">
          {{ icons.mdiChevronUp }}
        </v-icon>
      </div>

      <!-- Transactions -->
      <div class="d-flex my-1">
        <span class="text--primary font-weight-semibold">Transactions</span>
        <v-spacer></v-spacer>
        <span>$12.5k</span>
        <span class="text--primary font-weight-semibold mx-6">52%</span>
        <v-icon color="error">
          {{ icons.mdiChevronDown }}
        </v-icon>
      </div>

      <!-- Total Profile -->
      <div class="d-flex">
        <span class="text--primary font-weight-semibold">Total Profile</span>
        <v-spacer></v-spacer>
        <span>$12.8k</span>
        <span class="text--primary font-weight-semibold mx-6">28%</span>
        <v-icon color="success">
          {{ icons.mdiChevronUp }}
        </v-icon>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical, mdiChevronUp, mdiChevronDown } from '@mdi/js'
import { getVuetify } from '@core/utils'

// import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      colors: [
        $vuetify.theme.currentTheme.success,
        $vuetify.theme.currentTheme.secondary,
        $vuetify.theme.currentTheme.warning,
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '41%',
          startingShape: 'rounded',
          endingShape: 'rounded',
        },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        strokeDashArray: 10,
        padding: {
          left: -10,
          top: -10,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        curve: 'smooth',
        width: 6,
        lineCap: 'round',
        colors: ['#fff'],
      },
      responsive: [
        {
          breakpoint: 1650,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '50%',
              },
            },
          },
        },
      ],
    }

    const chartData = [
      {
        name: 'PRODUCT A',
        data: [16000, 7000, 16000, 18000, 15000, 35000, 16000],
      },
      {
        name: 'PRODUCT B',
        data: [7000, 12000, 10000, 0, 6000, 9000, 4000],
      },
      {
        name: 'PRODUCT C',
        data: [0, 15000, 0, 0, 8000, 0, 5000],
      },
    ]

    return {
      chartOptions,
      chartData,

      icons: {
        mdiDotsVertical,
        mdiChevronUp,
        mdiChevronDown,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/mixins.scss';
@import '~vuetify/src/styles/styles.sass';

@include theme--child(total-profit-chart-col) using ($material) {
  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    border-right: thin solid map-get($material, 'dividers');
  }
}
</style>
