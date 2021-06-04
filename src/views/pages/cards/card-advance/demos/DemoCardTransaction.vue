<template>
  <v-card>
    <v-card-title>
      <span>Transaction</span>
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="mr-n1"
      >
        <v-icon>
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-list class="pt-1">
        <v-list-item
          v-for="(data,index) in transactionData"
          :key="data.transaction"
          class="d-flex align-center px-0"
          :class="index > 0 ? 'mt-4':''"
        >
          <v-avatar
            size="40"
            rounded
            :color="data.avatarColor"
            :class="`v-avatar-light-bg ${data.avatarColor}--text`"
          >
            <v-img
              max-height="20"
              max-width="20"
              contain
              :src="data.avatar"
            ></v-img>
          </v-avatar>

          <div class="ml-3">
            <h4 class="font-weight-semibold text-no-wrap">
              {{ data.title }}
            </h4>
            <span class="text-xs text-no-wrap">{{ data.subtitle }}</span>
          </div>
          <v-spacer></v-spacer>

          <div class="d-flex align-center">
            <span class="text-base font-weight-semibold text--primary mr-1">{{ data.transaction }}</span>
            <v-icon
              size="22"
              :color="data.transaction.charAt(0) === '+' ? 'success' :'error'"
            >
              {{ data.transaction.charAt(0) === '+' ? icons.mdiChevronUp :icons.mdiChevronDown }}
            </v-icon>
          </div>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiChevronUp, mdiChevronDown } from '@mdi/js'

export default {
  setup() {
    const transactionData = [
      {
        avatar: '/images/pages/paypal.svg',
        avatarColor: 'error',
        title: 'Paypal',
        subtitle: 'Received Money',
        transaction: '+$2,482',
      },
      {
        avatar: '/images/pages/credit-card.svg',
        avatarColor: 'success',
        title: 'Credit Card',
        subtitle: 'Digital Ocean',
        transaction: '-$1,250',
      },
      {
        avatar: '/images/pages/card-atm.svg',
        avatarColor: 'warning',
        title: 'Mastercard',
        subtitle: 'Netflix',
        transaction: '-$99',
      },
      {
        avatar: '/images/pages/wallet.svg',
        avatarColor: 'primary',
        title: 'Wallet',
        subtitle: "Mac'D",
        transaction: '-$82',
      },
      {
        avatar: '/images/pages/arrow-growth.svg',
        avatarColor: 'info',
        title: 'Trasnfer',
        subtitle: 'Refund',
        transaction: '+$8,934',
      },
      {
        avatar: '/images/pages/wallet.svg',
        avatarColor: 'primary',
        title: 'Wallet',
        subtitle: 'Buy Watch',
        transaction: '-$124',
      },
    ]

    return {
      transactionData,
      icons: {
        mdiDotsVertical,
        mdiChevronUp,
        mdiChevronDown,
      },
    }
  },
}
</script>
