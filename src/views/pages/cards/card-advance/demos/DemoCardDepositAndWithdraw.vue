<template>
  <v-card class="d-flex justify-space-between">
    <div class="width-50">
      <v-card-title>
        <span>Deposit</span>
        <v-spacer></v-spacer>
        <span class="text-xs light-grey">View All</span>
      </v-card-title>
      <v-card-text>
        <div
          v-for="(data,index) in deposit"
          :key="data.img"
          :class="`d-flex align-center flex-column flex-sm-row ${index > 0 ? 'mt-6':''}`"
        >
          <v-img
            contain
            max-height="30"
            max-width="30"
            :src="data.img"
          ></v-img>
          <div class="ml-3">
            <p class="font-weight-semibold mb-0 text--primary">
              {{ data.title }}
            </p>
            <span class="text-xs">{{ data.subtitle }}</span>
          </div>
          <v-spacer></v-spacer>
          <span class="font-weight-semibold success--text">{{ data.amount }}</span>
        </div>
      </v-card-text>
    </div>

    <v-divider
      vertical
      inset
    ></v-divider>

    <div class="width-50">
      <v-card-title>
        <span>Withdraw</span>
        <v-spacer></v-spacer>
        <span class="text-xs light-grey">View All</span>
      </v-card-title>

      <v-card-text>
        <div
          v-for="(data,index) in withdraw"
          :key="data.img"
          :class="`d-flex align-center flex-column flex-sm-row ${index > 0 ? 'mt-6':''}`"
        >
          <v-img
            max-height="30"
            max-width="30"
            :src="data.img"
          ></v-img>
          <div class="ml-3">
            <p class="font-weight-semibold mb-0 text--primary">
              {{ data.title }}
            </p>
            <span class="text-xs">{{ data.subtitle }}</span>
          </div>
          <v-spacer></v-spacer>
          <span class="font-weight-semibold error--text">{{ data.amount }}</span>
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  setup() {
    const deposit = [
      {
        img: '/images/pages/gumroad.png',
        title: 'Gumroad Account',
        subtitle: 'Sell UI Kit',
        amount: '+$4,650',
      },
      {
        img: '/images/pages/mastercard.jpg',
        title: 'Mastercard',
        subtitle: 'Wallet deposit',
        amount: '+$92,705',
      },
      {
        img: '/images/pages/stripe-account.png',
        title: 'Stripe Account',
        subtitle: 'iOS Application',
        amount: '+$957',
      },
      {
        img: '/images/pages/american-bank.png',
        title: 'American Bank',
        subtitle: 'Bank Transfer',
        amount: '+$6,837',
      },
      {
        img: '/images/pages/bank-account.png',
        title: 'Bank Account',
        subtitle: 'Wallet deposit',
        amount: '+$446',
      },
    ]
    const withdraw = [
      {
        img: '/images/pages/google-adsense.png',
        title: 'Google Adsense',
        subtitle: 'Paypal deposit',
        amount: '-$145',
      },
      {
        img: '/images/pages/github-enterprise.png',
        title: 'Github Enterprise',
        subtitle: 'Security & compliance',
        amount: '-$1870',
      },
      {
        img: '/images/pages/slack-logo.png',
        title: 'Upgrade Slack Plan',
        subtitle: 'Debit card deposit',
        amount: '-$450',
      },
      {
        img: '/images/pages/digital-ocean-logo.png',
        title: 'Digital Ocean',
        subtitle: 'Cloud Hosting',
        amount: '-$540',
      },
      {
        img: '/images/pages/amazon-web-services-logo.png',
        title: 'Bank Account',
        subtitle: 'Choosing a Cloud Platform',
        amount: '-$21',
      },
    ]

    return {
      deposit,
      withdraw,
    }
  },
}
</script>

<style lang="scss" scoped>
.theme--light {
  .light-grey {
    color: rgba(94, 86, 105, 0.34);
  }
}
.width-50 {
  width: 50%;
}
</style>
