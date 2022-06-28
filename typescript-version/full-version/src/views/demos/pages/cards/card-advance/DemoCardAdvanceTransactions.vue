<script setup lang="ts">
import arrowGrowth from '@/assets/images/cards/arrow-growth.png'
import atmCard from '@/assets/images/cards/atm-card.png'
import creditCard from '@/assets/images/cards/credit-card.png'
import paypal from '@/assets/images/cards/paypal.png'
import wallet from '@/assets/images/cards/wallet.png'
import { kFormatter } from '@core/utils/formatters'

interface Colors {
  'Paypal': string
  'Credit Card': string
  'Mastercard': string
  'Wallet': string
  'Transfer': string
}

interface Transactions {
  gateway: keyof Colors
  for: string
  amount: number
  img: string
}

const transactions: Transactions[] = [
  {
    gateway: 'Paypal',
    for: 'Freelance Work',
    amount: 2482,
    img: paypal,
  },
  {
    gateway: 'Credit Card',
    for: 'Digital Ocean',
    amount: -1250,
    img: creditCard,
  },
  {
    gateway: 'Mastercard',
    for: 'Netflix',
    amount: -99,
    img: atmCard,
  },
  {
    gateway: 'Wallet',
    for: 'Mac\'D',
    amount: -82,
    img: wallet,
  },
  {
    gateway: 'Transfer',
    for: 'Refund',
    amount: 8934,
    img: arrowGrowth,
  },
  {
    gateway: 'Wallet',
    for: 'Buy Watch',
    amount: -124,
    img: wallet,
  },
]

const transactionsColors: Colors = {
  'Paypal': 'error',
  'Credit Card': 'success',
  'Mastercard': 'warning',
  'Wallet': 'primary',
  'Transfer': 'info',
}

const formateAmount = (amount: number) => {
  return Math.sign(amount) === 1 ? `+$${kFormatter(amount)}` : `-$${Math.abs(amount)}`
}
</script>

<template>
  <v-card>
    <!-- SECTION Card Header and Menu -->
    <v-card-header>
      <v-card-header-text>
        <!-- 👉 Title -->
        <v-card-title>Transactions</v-card-title>
      </v-card-header-text>

      <!-- 👉 menu -->

      <v-btn
        size="x-small"
        variant="text"
        icon="mdi-dots-vertical"
        color="secondary"
        class="me-n3"
      />
    </v-card-header>
    <!-- !SECTION -->

    <!-- SECTION Transactions List -->
    <v-list
      class="pt-0"
      lines="two"
    >
      <v-list-item
        v-for="transaction in transactions"
        :key="transaction.for"
      >
        <!-- 👉 Avatar -->
        <v-list-item-avatar
          rounded
          start
          :class="`v-avatar-light-bg px-2 text-${transactionsColors[transaction.gateway]}`"
        >
          <v-img
            height="20"
            :src="transaction.img"
          />
        </v-list-item-avatar>

        <!-- 👉 Title and subtitle  -->
        <v-list-item-header>
          <v-list-item-title>{{ transaction.gateway }}</v-list-item-title>
          <v-list-item-subtitle class="text-caption">
            {{ transaction.for }}
          </v-list-item-subtitle>
        </v-list-item-header>

        <!-- 👉 Amounts -->
        <v-list-item-action class="font-weight-semibold">
          <span>{{ formateAmount(transaction.amount) }}</span>
          <v-icon
            :size="20"
            :color="Math.sign(transaction.amount) === 1 ? 'success' : 'error'"
            :icon="Math.sign(transaction.amount) === 1 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          />
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <!-- !SECTION -->
  </v-card>
</template>
