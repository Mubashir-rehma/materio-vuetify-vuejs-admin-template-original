<template>
  <v-card>
    <v-card-title>
      <span>Transaction</span>
      <v-spacer></v-spacer>
      <v-icon class="cursor-pointer">
        {{ icons.mdiDotsVertical }}
      </v-icon>
    </v-card-title>
    <v-card-text>
      <div
        v-for="(data,index) in transactionData"
        :key="data.transaction"
        class="d-flex align-center "
        :class="index !== 0 ? 'mt-6':''"
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
          <p class="text--primary mb-0 text-sm font-weight-semibold">
            {{ data.title }}
          </p>
          <span class="text-xs">{{ data.subtitle }}</span>
        </div>
        <v-spacer></v-spacer>
        <span class="text-base font-weight-semibold mr-1 text--primary">{{ data.transaction }}</span>
        <v-icon
          size="22"
          :color="data.transaction.charAt(0) === '+' ? 'success' :'error'"
        >
          {{ data.transaction.charAt(0) === '+' ? icons.mdiChevronUp :icons.mdiChevronDown }}
        </v-icon>
      </div>
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
        transaction: '+$24,820',
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
