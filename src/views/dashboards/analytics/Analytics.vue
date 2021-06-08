<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <demo-congratulation-john></demo-congratulation-john>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <demo-statistics-card></demo-statistics-card>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <demo-weekly-overview></demo-weekly-overview>
    </v-col>

    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <demo-card-total-earning></demo-card-total-earning>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-row class="match-height">
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-profit-line-chart
            :stat-title="profitLineChart.statTitle"
            :statistics="profitLineChart.statistics"
            :chart-series="profitLineChart.series"
            :chart-color="$vuetify.theme.currentTheme.success"
            chart-height="85"
          ></statistics-card-profit-line-chart>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="totalProfitOptions.change"
            :color="totalProfitOptions.color"
            :icon="totalProfitOptions.icon"
            :statistics="totalProfitOptions.statistics"
            :stat-title="totalProfitOptions.statTitle"
            :subtitle="totalProfitOptions.subtitle"
          ></statistics-card-vertical>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="newProjectOptions.change"
            :color="newProjectOptions.color"
            :icon="newProjectOptions.icon"
            :statistics="newProjectOptions.statistics"
            :stat-title="newProjectOptions.statTitle"
            :subtitle="newProjectOptions.subtitle"
          ></statistics-card-vertical>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-session-bar-chart
            :stat-title="sessionBarChart.statTitle"
            :statistics="sessionBarChart.statistics"
            :chart-series="sessionBarChart.series"
            :chart-color="[
              $vuetify.theme.currentTheme.error,
              $vuetify.theme.currentTheme.primary,
              $vuetify.theme.currentTheme.error,
              $vuetify.theme.currentTheme.primary,
              $vuetify.theme.currentTheme.primary
            ]"
            chart-height="80"
          ></statistics-card-session-bar-chart>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <demo-performance></demo-performance>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <demo-card-deposit-and-withdraw></demo-card-deposit-and-withdraw>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <demo-card-sales-by-countries></demo-card-sales-by-countries>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <demo-user-table></demo-user-table>
    </v-col>
  </v-row>
</template>

<script>
import { mdiPoll, mdiLabelVariantOutline } from '@mdi/js'
import StatisticsCardProfitLineChart from '@core/components/statistics-card/StatisticsCardProfitLineChart.vue'
import StatisticsCardVertical from '@/@core/components/statistics-card/StatisticsCardVertical.vue'
import StatisticsCardSessionBarChart from '@core/components/statistics-card/StatisticsCardSessionBarChart.vue'

// demos
import DemoCongratulationJohn from './demos/DemoCongratulationJohn.vue'
import DemoStatisticsCard from './demos/DemoStatisticsCard.vue'
import DemoWeeklyOverview from './demos/DemoWeeklyOverview.vue'
import DemoCardTotalEarning from './demos/DemoCardTotalEarning.vue'
import DemoPerformance from './demos/DemoPerformance.vue'
import DemoCardDepositAndWithdraw from './demos/DemoCardDepositAndWithdraw.vue'
import DemoCardSalesByCountries from './demos/DemoCardSalesByCountries.vue'
import DemoUserTable from './demos/DemoUserTable.vue'

export default {
  components: {
    StatisticsCardProfitLineChart,
    StatisticsCardVertical,
    StatisticsCardSessionBarChart,
    DemoCongratulationJohn,
    DemoStatisticsCard,
    DemoWeeklyOverview,
    DemoCardTotalEarning,
    DemoPerformance,
    DemoCardDepositAndWithdraw,
    DemoCardSalesByCountries,
    DemoUserTable,
  },
  setup() {
    const profitLineChart = {
      statTitle: 'Total Profit',
      statistics: '$86.4k',
      series: [
        {
          data: [0, 20, 5, 30, 15, 45],
        },
      ],
    }

    const totalProfitOptions = {
      statTitle: 'Total Profit',
      icon: mdiPoll,
      color: 'secondary',
      subtitle: 'Weekly Project',
      statistics: '$25.6k',
      change: '+42%',
    }

    // vertical card options
    const newProjectOptions = {
      statTitle: 'New Project',
      icon: mdiLabelVariantOutline,
      color: 'primary',
      subtitle: 'Yearly Project',
      statistics: '862',
      change: '-18%',
    }

    const sessionBarChart = {
      statTitle: 'Sessions',
      statistics: '2,856',
      series: [
        {
          name: '2020',
          data: [45, 85, 65, 50, 70],
        },
      ],
    }

    return {
      profitLineChart,
      totalProfitOptions,
      newProjectOptions,
      sessionBarChart,
    }
  },
}
</script>
