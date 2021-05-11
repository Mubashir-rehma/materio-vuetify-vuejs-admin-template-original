<template>
  <v-row>
    <!-- line chart -->
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <span>Line Chart</span>
          <v-spacer></v-spacer>
          <span class="subtitle-2">
            <v-icon size="18">
              {{ icons.mdiCalendarBlankOutline }}
            </v-icon>
            2019-05-01 to 2019-05-10
          </span>
        </v-card-title>
        <v-card-subtitle>
          Commercial networks
        </v-card-subtitle>
        <v-card-text>
          <demo-apex-chart-line-chart></demo-apex-chart-line-chart>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- data science -->
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <span>Data Science</span>
          <v-spacer></v-spacer>
          <span class="subtitle-2">
            <v-icon size="18">
              {{ icons.mdiCalendarBlankOutline }}
            </v-icon>
            2019-05-01 to 2019-05-10
          </span>
        </v-card-title>
        <v-card-text>
          <demo-apex-chart-data-science></demo-apex-chart-data-science>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- New technology data -->
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <span>New Technologies Data</span>
          <v-spacer></v-spacer>
          <v-btn-toggle
            dense
            color="primary"
          >
            <v-btn
              outlined
              color="primary"
            >
              Daily
            </v-btn>
            <v-btn
              outlined
              color="primary"
            >
              Monthly
            </v-btn>
            <v-btn
              outlined
              color="primary"
            >
              Yearly
            </v-btn>
          </v-btn-toggle>
        </v-card-title>
        <v-card-text>
          <demo-apex-chart-new-technologies-data></demo-apex-chart-new-technologies-data>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- balance -->
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <span>Balance</span>
          <v-spacer></v-spacer>
          <span class="subtitle-2">$100,000</span>
        </v-card-title>
        <v-card-subtitle>
          Commercial networks & enterprises
        </v-card-subtitle>
        <v-card-text>
          <demo-apex-chart-balance></demo-apex-chart-balance>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- apex chart bar -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title class="pb-0">
          <span>Balance</span>
          <v-spacer></v-spacer>
          <span class="subtitle-2">
            <v-icon size="18">
              {{ icons.mdiCalendarBlankOutline }}
            </v-icon>
            2019-05-01 to 2019-05-10
          </span>
        </v-card-title>
        <v-card-text>
          <h3>$74,382.72</h3>
        </v-card-text>
        <v-card-text>
          <demo-apex-chart-bar></demo-apex-chart-bar>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- apex chart stock price -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>
          Stocks Prices
          <v-spacer></v-spacer>
          <span class="subtitle-2">
            <v-icon size="18">
              {{ icons.mdiCalendarBlankOutline }}
            </v-icon>
            2019-05-01 to 2019-05-10
          </span>
        </v-card-title>
        <v-card-subtitle>
          $50,863.98
        </v-card-subtitle>
        <v-card-text>
          <demo-apex-chart-stock-price></demo-apex-chart-stock-price>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Daily Sales States -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>Daily Sales States</v-card-title>

        <v-card-text>
          <demo-apex-chart-daily-sales-states></demo-apex-chart-daily-sales-states>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Statistics -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>
          Statistics
        </v-card-title>

        <v-card-text>
          <demo-apex-chart-statistics></demo-apex-chart-statistics>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Mobile Comparison -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>
          Mobile Comparison
        </v-card-title>
        <v-card-text>
          <demo-apex-chart-mobile-comparison></demo-apex-chart-mobile-comparison>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Expense Ratio -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>
          Expense Ratio
        </v-card-title>
        <v-card-subtitle>
          Spending on various categories
        </v-card-subtitle>
        <v-card-text>
          <demo-apex-chart-expense-ratio></demo-apex-chart-expense-ratio>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mdiCalendarBlankOutline } from '@mdi/js'

// demos
import DemoApexChartLineChart from './demos/DemoApexChartLineChart.vue'
import DemoApexChartDataScience from './demos/DemoApexChartDataScience.vue'
import DemoApexChartNewTechnologiesData from './demos/DemoApexChartNewTechnologiesData.vue'
import DemoApexChartBalance from './demos/DemoApexChartBalance.vue'
import DemoApexChartStockPrice from './demos/DemoApexChartStockPrice.vue'
import DemoApexChartBar from './demos/DemoApexChartBar.vue'
import DemoApexChartDailySalesStates from './demos/DemoApexChartDailySalesStates.vue'
import DemoApexChartStatistics from './demos/DemoApexChartStatistics.vue'
import DemoApexChartMobileComparison from './demos/DemoApexChartMobileComparison.vue'
import DemoApexChartExpenseRatio from './demos/DemoApexChartExpenseRatio.vue'

export default {
  components: {
    DemoApexChartLineChart,
    DemoApexChartDataScience,
    DemoApexChartNewTechnologiesData,
    DemoApexChartBalance,
    DemoApexChartStockPrice,
    DemoApexChartBar,
    DemoApexChartDailySalesStates,
    DemoApexChartStatistics,
    DemoApexChartMobileComparison,
    DemoApexChartExpenseRatio,
  },
  setup() {
    return {
      icons: {
        mdiCalendarBlankOutline,
      },
    }
  },
}
</script>
