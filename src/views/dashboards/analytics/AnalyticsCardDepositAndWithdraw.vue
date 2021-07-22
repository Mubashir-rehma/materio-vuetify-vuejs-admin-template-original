<template>
  <v-card class="d-flex justify-space-between">
    <div class="width-50">
      <v-card-title>
        <span>Deposit</span>
        <v-spacer></v-spacer>
        <span class="text-xs text--disabled">View All</span>
      </v-card-title>

      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(data,index) in deposit"
            :key="data.img"
            :class="`d-flex align-center px-0 ${index > 0 ? 'mt-4':''}`"
          >
            <v-img
              contain
              max-height="30"
              max-width="30"
              :src="data.img"
              class="me-3"
            ></v-img>

            <div class="d-flex align-center flex-grow-1 flex-wrap">
              <div class="me-2">
                <v-list-item-title class="text-sm font-weight-semibold">
                  {{ data.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-xs">
                  {{ data.subtitle }}
                </v-list-item-subtitle>
              </div>

              <v-spacer></v-spacer>
              <span class="font-weight-semibold success--text">{{ data.amount }}</span>
            </div>
          </v-list-item>
        </v-list>
      </v-card-text>
    </div>

    <v-divider
      vertical
      class="mx-sm-5"
    ></v-divider>

    <div class="width-50">
      <v-card-title>
        <span>Withdraw</span>
        <v-spacer></v-spacer>
        <span class="text-xs text--disabled">View All</span>
      </v-card-title>

      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(data,index) in withdraw"
            :key="data.img"
            :class="`d-flex align-center px-0 ${index > 0 ? 'mt-4':''}`"
          >
            <v-img
              max-height="30"
              max-width="30"
              :src="data.img"
              class="me-3"
            ></v-img>

            <div class="d-flex align-center flex-grow-1 flex-wrap">
              <div class="me-2">
                <v-list-item-title class="text-sm font-weight-semibold">
                  {{ data.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-xs">
                  {{ data.subtitle }}
                </v-list-item-subtitle>
              </div>

              <v-spacer></v-spacer>
              <span class="font-weight-semibold error--text">{{ data.amount }}</span>
            </div>
          </v-list-item>
        </v-list>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  setup() {
    const deposit = [
      {
        img: '/images/logos/gumroad.png',
        title: 'Gumroad Account',
        subtitle: 'Sell UI Kit',
        amount: '+$4,650',
      },
      {
        img: '/images/logos/master.png',
        title: 'Mastercard',
        subtitle: 'Wallet deposit',
        amount: '+$92,705',
      },
      {
        img: '/images/logos/stripe-account.png',
        title: 'Stripe Account',
        subtitle: 'iOS Application',
        amount: '+$957',
      },
      {
        img: '/images/logos/american-bank.png',
        title: 'American Bank',
        subtitle: 'Bank Transfer',
        amount: '+$6,837',
      },
      {
        img: '/images/logos/bank-account.png',
        title: 'Bank Account',
        subtitle: 'Wallet deposit',
        amount: '+$446',
      },
    ]
    const withdraw = [
      {
        img: '/images/logos/google.png',
        title: 'Google Adsense',
        subtitle: 'Paypal deposit',
        amount: '-$145',
      },
      {
        img: '/images/logos/github.png',
        title: 'Github Enterprise',
        subtitle: 'Security & compliance',
        amount: '-$1870',
      },
      {
        img: '/images/logos/slack.png',
        title: 'Upgrade Slack Plan',
        subtitle: 'Debit card deposit',
        amount: '-$450',
      },
      {
        img: '/images/logos/digital-ocean-logo.png',
        title: 'Digital Ocean',
        subtitle: 'Cloud Hosting',
        amount: '-$540',
      },
      {
        img: '/images/logos/amazon-web-services-logo.png',
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
.width-50 {
  width: 50%;
}
</style>
