<template>
  <v-row>
    <v-col
      cols="12"
      md="8"
      class="align-self-end mb-3"
    >
      <demo-congratulation-john></demo-congratulation-john>
    </v-col>
    <v-col
      cols="12"
      sm="6"
      md="2"
    >
      <statistics-card-vertical
        :change="transactionsOptions.change"
        :color="transactionsOptions.color"
        :icon="transactionsOptions.icon"
        :statistics="transactionsOptions.statistics"
        :stat-title="transactionsOptions.statTitle"
        :subtitle="transactionsOptions.subtitle"
      ></statistics-card-vertical>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      md="2"
    >
      <statistics-card-vertical
        :change="revenueOptions.change"
        :color="revenueOptions.color"
        :icon="revenueOptions.icon"
        :statistics="revenueOptions.statistics"
        :stat-title="revenueOptions.statTitle"
        :subtitle="revenueOptions.subtitle"
      ></statistics-card-vertical>
    </v-col>

    <v-col
      cols="12"
      md="8"
    >
      <demo-total-profit></demo-total-profit>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-row>
        <v-col cols="12">
          <demo-statistics-total-sales></demo-statistics-total-sales>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-line-chart
            :stat-title="revenueLineChart.statTitle"
            :statistics="revenueLineChart.statistics"
            :chart-series="revenueLineChart.series"
            :chart-color="$vuetify.theme.currentTheme.primary"
          ></statistics-card-line-chart>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-radial-bar-chart
            :stat-title="salesRadialChart.statTitle"
            :statistics="salesRadialChart.statistics"
            :chart-series="salesRadialChart.series"
            :chart-color="$vuetify.theme.currentTheme.info"
          ></statistics-card-radial-bar-chart>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <demo-card-transaction></demo-card-transaction>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="logisticsOptions.change"
            :color="logisticsOptions.color"
            :icon="logisticsOptions.icon"
            :statistics="logisticsOptions.statistics"
            :stat-title="logisticsOptions.statTitle"
            :subtitle="logisticsOptions.subtitle"
          ></statistics-card-vertical>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="reportsOptions.change"
            :color="reportsOptions.color"
            :icon="reportsOptions.icon"
            :statistics="reportsOptions.statistics"
            :stat-title="reportsOptions.statTitle"
            :subtitle="reportsOptions.subtitle"
          ></statistics-card-vertical>
        </v-col>

        <v-col
          cols="12"
          class="mt-3"
        >
          <demo-new-visitor-chart></demo-new-visitor-chart>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <demo-card-website-statistics></demo-card-website-statistics>
    </v-col>

    <v-col
      cols="12"
      md="8"
    >
      <demo-user-table></demo-user-table>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <demo-card-meeting-schedule></demo-card-meeting-schedule>
    </v-col>
  </v-row>
</template>

<script>
import { mdiTrendingUp, mdiCurrencyUsd, mdiCheck } from '@mdi/js'
import StatisticsCardVertical from '@/@core/components/statistics-card/StatisticsCardVertical.vue'
import StatisticsCardLineChart from '@core/components/statistics-card/StatisticsCardLineChart.vue'
import StatisticsCardRadialBarChart from '@core/components/statistics-card/StatisticsCardRadialBarChart.vue'

// demos
import DemoCongratulationJohn from './demos/DemoCongratulationJohn.vue'
import DemoTotalProfit from './demos/DemoTotalProfit.vue'
import DemoStatisticsTotalSales from './demos/DemoStatisticsTotalSales.vue'
import DemoCardTransaction from './demos/DemoCardTransaction.vue'
import DemoNewVisitorChart from './demos/DemoNewVisitorChart.vue'
import DemoCardWebsiteStatistics from './demos/DemoCardWebsiteStatistics.vue'
import DemoUserTable from './demos/DemoUserTable.vue'
import DemoCardMeetingSchedule from './demos/DemoCardMeetingSchedule.vue'

export default {
  components: {
    StatisticsCardVertical,
    StatisticsCardLineChart,
    StatisticsCardRadialBarChart,
    DemoCongratulationJohn,
    DemoTotalProfit,
    DemoStatisticsTotalSales,
    DemoCardTransaction,
    DemoNewVisitorChart,
    DemoCardWebsiteStatistics,
    DemoUserTable,
    DemoCardMeetingSchedule,
  },
  setup() {
    const transactionsOptions = {
      statTitle: 'Transactions',
      icon: mdiTrendingUp,
      color: 'info',
      subtitle: 'Daily Transactions',
      statistics: '1.2k',
      change: '+12%',
    }
    const revenueOptions = {
      statTitle: 'Revenue',
      icon: mdiCurrencyUsd,
      color: 'success',
      subtitle: 'Revenue Increase',
      statistics: '$95.2k',
      change: '+12%',
    }

    const revenueLineChart = {
      statTitle: 'Total Revenue',
      statistics: '$35.4k',
      series: [
        {
          data: [28, 58, 40, 68],
        },
      ],
    }

    const salesRadialChart = {
      statTitle: 'Total Sales',
      statistics: '135k',
      series: [78],
    }

    const logisticsOptions = {
      statTitle: 'Logistics',
      icon: mdiCurrencyUsd,
      color: 'error',
      subtitle: 'Revenue Increase',
      statistics: '44.10k',
      change: '+12%',
    }

    const reportsOptions = {
      statTitle: 'Reports',
      icon: mdiCheck,
      color: 'warning',
      subtitle: 'System Bugs',
      statistics: '268',
      change: '-8%',
    }

    return {
      transactionsOptions,
      revenueOptions,
      revenueLineChart,
      salesRadialChart,
      logisticsOptions,
      reportsOptions,
    }
  },
}
</script>
