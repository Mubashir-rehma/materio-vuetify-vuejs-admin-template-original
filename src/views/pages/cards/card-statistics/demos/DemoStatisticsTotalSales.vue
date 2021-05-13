<template>
  <v-card>
    <div class="d-flex justify-space-between">
      <div>
        <v-card-title>
          Total Sales
        </v-card-title>
        <v-card-text class="text-no-wrap pb-0">
          <p class="text-xs mb-0">
            Calculated in last 7 days
          </p>
          <span class="text-xl font-weight-semibold text--primary mr-1">$25,980</span>
          <v-icon
            size="20"
            color="success"
          >
            {{ icons.mdiChevronUp }}
          </v-icon>
          <span class="success--text text-xs font-weight-semibold">15.6%</span>
        </v-card-text>
      </div>
      <div>
        <vue-apex-charts
          type="donut"
          height="150"
          width="150"
          :options="totalSalesChart.chartOptions"
          :series="totalSalesChart.series"
        />
      </div>
    </div>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'
import VueApexCharts from 'vue-apexcharts'

import { mdiChevronUp } from '@mdi/js'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    // chart options
    const totalSalesChart = ref({
      series: [85, 20, 30, 50],
      chartOptions: {
        stroke: {
          width: 2,
        },
        legend: {
          show: false,
        },
        colors: ['#9155fd', '#d4d5d7', '#ffb400', '#ff4c51'],
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '80%',
              labels: {
                show: true,
                name: {
                  fontSize: '0.75rem',
                  fontFamily: 'Inter',
                  offsetY: 15,
                  fontWeight: 400,
                },
                value: {
                  fontSize: '1.25rem',
                  fontFamily: 'Inter',
                  fontWeight: 'bold',
                  offsetY: -20,
                  formatter(val) {
                    // eslint-disable-next-line radix
                    return `${parseInt(val)}%`
                  },
                },

                total: {
                  show: true,
                  fontSize: '0.75rem',
                  label: '1 Quarter',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  formatter() {
                    return '18%'
                  },
                },
              },
            },
          },
        },
        labels: ['1 Quarter', '2 Quarter', '3 Quarter', '4 Quarter'],
      },
    })

    return {
      totalSalesChart,

      // icons
      icons: {
        mdiChevronUp,
      },
    }
  },
}
</script>
