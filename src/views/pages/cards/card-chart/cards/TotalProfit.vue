<template>
  <v-card>
    <v-card-text class="pt-5">
      <v-row>
        <v-col
          cols="12"
          sm="7"
          class="total-profit-chart-col"
        >
          <v-card-title class="px-0 pt-0">
            Total Profit
          </v-card-title>
          <v-card-text class="px-0">
            <vue-apex-charts
              id="total-profit-chart"
              :options="chartOptions"
              :series="chartData"
            ></vue-apex-charts>
          </v-card-text>
        </v-col>
        <v-col
          cols="12"
          sm="5"
        >
          <v-card elevation="0">
            <!-- Title/Header -->
            <v-card-title class="align-start pt-0">
              <div>
                <p class="mb-0 font-weight-bold text-2xl">
                  $482.85k
                </p>
                <small class="text--secondary text-xs text-no-wrap">Last month balance $234.40k</small>
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

            <v-card-text class="pb-0 pt-5">
              <!-- List -->
              <v-list
                two-line
                subheader
              >
                <!-- List Item: Profit -->
                <v-list-item class="pa-0">
                  <v-list-item-avatar
                    class="v-avatar-light-bg success--text"
                    size="40"
                    rounded
                  >
                    <v-icon
                      size="30"
                      color="success"
                    >
                      {{ icons.mdiTrendingUp }}
                    </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-semibold">
                      $48,568.20
                    </v-list-item-title>
                    <v-list-item-subtitle>Total Profit</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <!-- List Item: Income -->
                <v-list-item class="pa-0">
                  <v-list-item-avatar
                    class="v-avatar-light-bg primary--text"
                    size="40"
                    rounded
                  >
                    <v-icon
                      size="30"
                      color="primary"
                    >
                      {{ icons.mdiCurrencyUsd }}
                    </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-semibold">
                      $38,453.25
                    </v-list-item-title>
                    <v-list-item-subtitle>Total Income</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <!-- List Item: Expense -->
                <v-list-item class="pa-0">
                  <v-list-item-avatar
                    color="primary"
                    class="v-avatar-light-bg secondary--text"
                    size="40"
                    rounded
                  >
                    <v-icon
                      size="30"
                      color="secondary"
                    >
                      {{ icons.mdiChartBar }}
                    </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-semibold">
                      $2,453.45
                    </v-list-item-title>
                    <v-list-item-subtitle>Total Expense</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <!-- Action Button -->
              <v-btn
                block
                color="primary"
              >
                View Report
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical, mdiTrendingUp, mdiCurrencyUsd, mdiChartBar } from '@mdi/js'
import { getVuetify } from '@core/utils'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      colors: [
        $vuetify.theme.currentTheme.primary,
        $vuetify.theme.currentTheme.success,
        $vuetify.theme.currentTheme.secondary,
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
          columnWidth: '38%',
        },
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: value => kFormatter(value, 0),
        },
      },
      grid: {
        strokeDashArray: 7,
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
        data: [29000, 22000, 28000, 19000, 30000, 21000, 35000],
      },
      {
        name: 'PRODUCT B',
        data: [0, 16000, 7000, 15000, 0, 12000, 9000],
      },
      {
        name: 'PRODUCT C',
        data: [0, 0, 0, 14000, 0, 7000, 8000],
      },
    ]

    return {
      chartOptions,
      chartData,

      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiCurrencyUsd,
        mdiChartBar,
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
