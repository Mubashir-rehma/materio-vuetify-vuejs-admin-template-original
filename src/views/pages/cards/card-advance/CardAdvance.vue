<template>
  <v-row class="match-height">
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <demo-card-transaction></demo-card-transaction>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
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
      md="5"
      sm="6"
    >
      <demo-card-team-members></demo-card-team-members>
    </v-col>
    <v-col
      cols="12"
      md="7"
    >
      <demo-card-deposit-and-withdraw></demo-card-deposit-and-withdraw>
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
      md="5"
      sm="6"
    >
      <demo-card-finance-summary></demo-card-finance-summary>
    </v-col>
    <v-col
      cols="12"
      md="3"
      sm="6"
    >
      <demo-card-social-analytics></demo-card-social-analytics>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <demo-card-website-statistics></demo-card-website-statistics>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <demo-card-developer-meetup></demo-card-developer-meetup>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <demo-card-sales-by-countries></demo-card-sales-by-countries>
    </v-col>
    <v-col
      cols="12"
      md="6"
      sm="6"
    >
      <demo-card-activity-timeline></demo-card-activity-timeline>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <demo-card-cafe-badilico></demo-card-cafe-badilico>
    </v-col>
  </v-row>
</template>

<script>
import DemoCardTransaction from './demos/DemoCardTransaction.vue'
import DemoCardUpgradePlan from './demos/DemoCardUpgradePlan.vue'
import DemoCardMeetingSchedule from './demos/DemoCardMeetingSchedule.vue'
import DemoCardTeamMembers from './demos/DemoCardTeamMembers.vue'
import DemoCardDepositAndWithdraw from './demos/DemoCardDepositAndWithdraw.vue'
import DemoCardTotalEarning from './demos/DemoCardTotalEarning.vue'
import DemoCardFinanceSummary from './demos/DemoCardFinanceSummary.vue'
import DemoCardSocialAnalytics from './demos/DemoCardSocialAnalytics.vue'
import DemoCardWebsiteStatistics from './demos/DemoCardWebsiteStatistics.vue'
import DemoCardDeveloperMeetup from './demos/DemoCardDeveloperMeetup.vue'
import DemoCardSalesByCountries from './demos/DemoCardSalesByCountries.vue'
import DemoCardActivityTimeline from './demos/DemoCardActivityTimeline.vue'
import DemoCardCafeBadilico from './demos/DemoCardCafeBadilico.vue'

export default {
  components: {
    DemoCardTransaction,
    DemoCardUpgradePlan,
    DemoCardMeetingSchedule,
    DemoCardTeamMembers,
    DemoCardDepositAndWithdraw,
    DemoCardTotalEarning,
    DemoCardFinanceSummary,
    DemoCardSocialAnalytics,
    DemoCardWebsiteStatistics,
    DemoCardDeveloperMeetup,
    DemoCardSalesByCountries,
    DemoCardActivityTimeline,
    DemoCardCafeBadilico,
  },
}
</script>
