<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="3"
        sm="6"
        order="1"
        class="align-self-end"
      >
        <statistics-card-with-images
          :avatar="ratingsOptions.avatar"
          :avatar-width="ratingsOptions.avatarWidth"
          :change="ratingsOptions.change"
          :chip-color="ratingsOptions.chipColor"
          :chip-text="ratingsOptions.chipText"
          :statistics="ratingsOptions.statistics"
          :stat-title="ratingsOptions.statTitle"
        ></statistics-card-with-images>
      </v-col>

      <v-col
        cols="12"
        md="3"
        sm="6"
        order="2"
        class="align-self-end"
      >
        <statistics-card-with-images
          :avatar="sessionsOptions.avatar"
          :avatar-width="sessionsOptions.avatarWidth"
          :change="sessionsOptions.change"
          :chip-color="sessionsOptions.chipColor"
          :chip-text="sessionsOptions.chipText"
          :statistics="sessionsOptions.statistics"
          :stat-title="sessionsOptions.statTitle"
        ></statistics-card-with-images>
      </v-col>

      <v-col
        cols="12"
        md="6"
        sm="12"
        order="5"
        order-md="3"
      >
        <demo-statistics-card></demo-statistics-card>
      </v-col>

      <v-col
        cols="12"
        md="3"
        sm="6"
        order="3"
        order-md="4"
      >
        <demo-total-sales></demo-total-sales>
      </v-col>

      <v-col
        cols="12"
        md="3"
        sm="6"
        order="4"
        order-md="5"
      >
        <demo-revenue-report></demo-revenue-report>
      </v-col>

      <v-col
        cols="12"
        md="6"
        sm="12"
        order="6"
      >
        <demo-sales-overview></demo-sales-overview>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <demo-activity-timeline></demo-activity-timeline>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <demo-weekly-sales></demo-weekly-sales>
      </v-col>

      <v-col
        cols="12"
        md="2"
      >
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="12"
          >
            <statistics-card-area-chart
              :stat-title="growthAreaChart.statTitle"
              :statistics="growthAreaChart.statistics"
              :chart-series="growthAreaChart.series"
            ></statistics-card-area-chart>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="12"
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
        </v-row>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <demo-card-upgrade-plan></demo-card-upgrade-plan>
      </v-col>

      <v-col
        cols="12"
        md="4"
        sm="6"
      >
        <demo-card-meeting-schedule></demo-card-meeting-schedule>
      </v-col>

      <v-col
        cols="12"
        md="4"
        sm="6"
      >
        <demo-card-developer-meetup></demo-card-developer-meetup>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import StatisticsCardWithImages from '@core/components/statistics-card/StatisticsCardWithImages.vue'
import StatisticsCardAreaChart from '@core/components/statistics-card/StatisticsCardAreaChart.vue'
import StatisticsCardVertical from '@/@core/components/statistics-card/StatisticsCardVertical.vue'

// icons
import { mdiLabelVariantOutline } from '@mdi/js'

// demos
import DemoStatisticsCard from './demos/DemoStatisticsCard.vue'
import DemoTotalSales from './demos/DemoTotalSales.vue'
import DemoRevenueReport from './demos/DemoRevenueReport.vue'
import DemoSalesOverview from './demos/DemoSalesOverview.vue'
import DemoActivityTimeline from './demos/DemoActivityTimeline.vue'
import DemoWeeklySales from './demos/DemoWeeklySales.vue'
import DemoCardUpgradePlan from './demos/DemoCardUpgradePlan.vue'
import DemoCardMeetingSchedule from './demos/DemoCardMeetingSchedule.vue'
import DemoCardDeveloperMeetup from './demos/DemoCardDeveloperMeetup.vue'

export default {
  components: {
    StatisticsCardWithImages,
    StatisticsCardAreaChart,
    StatisticsCardVertical,
    DemoStatisticsCard,
    DemoTotalSales,
    DemoRevenueReport,
    DemoSalesOverview,
    DemoActivityTimeline,
    DemoWeeklySales,
    DemoCardUpgradePlan,
    DemoCardMeetingSchedule,
    DemoCardDeveloperMeetup,
  },
  setup() {
    // card with images
    const ratingsOptions = {
      statTitle: 'Ratings',
      statistics: '13k',
      change: '+38%',
      chipText: 'Year of 2021',
      chipColor: 'primary',
      avatar: '/images/avatars/9.png',
      avatarWidth: '112',
    }
    const sessionsOptions = {
      statTitle: 'Sessions',
      statistics: '24.5k',
      change: '-22%',
      chipText: 'Last Week',
      chipColor: 'secondary',
      avatar: '/images/avatars/10.png',
      avatarWidth: '86',
    }

    const growthAreaChart = {
      statTitle: 'Total Groth',
      statistics: '42.5k',
      series: [
        {
          name: 'Subscribers',
          data: [28, 40, 36, 52, 38, 60, 55],
        },
      ],
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

    return {
      ratingsOptions,
      sessionsOptions,
      growthAreaChart,
      newProjectOptions,
    }
  },
}
</script>

<style>
</style>
