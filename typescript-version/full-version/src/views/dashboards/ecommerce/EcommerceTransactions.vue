<script setup lang="ts">
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
    img: dynamicImgImport('@/assets/images/cards/paypal.png'),
  },
  {
    gateway: 'Credit Card',
    for: 'Digital Ocean',
    amount: -1250,
    img: dynamicImgImport('@/assets/images/cards/credit-card.png'),
  },
  {
    gateway: 'Mastercard',
    for: 'Netflix',
    amount: -99,
    img: dynamicImgImport('@/assets/images/cards/atm-card.png'),
  },
  {
    gateway: 'Wallet',
    for: 'Mac\'D',
    amount: -82,
    img: dynamicImgImport('@/assets/images/cards/wallet.png'),
  },
  {
    gateway: 'Transfer',
    for: 'Refund',
    amount: 8934,
    img: dynamicImgImport('@/assets/images/cards/arrow-growth.png'),
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
  <VCard>
    <!-- SECTION Card Header and Menu -->
    <VCardItem>
      <!-- 👉 Title -->
      <VCardTitle>Transactions</VCardTitle>

      <!-- 👉 menu -->
      <template #append>
        <div class="me-n2">
          <VBtn
            icon
            size="x-small"
            variant="text"
            color="secondary"
          >
            <VIcon
              size="24"
              icon="mdi-dots-vertical"
            />
          </VBtn>
        </div>
      </template>
    </VCardItem>
    <!-- !SECTION -->

    <!-- SECTION Transactions List -->
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="transaction in transactions"
          :key="transaction.for"
        >
          <!-- 👉 Avatar -->
          <template #prepend>
            <VAvatar
              rounded
              :class="`v-avatar-light-bg text-${transactionsColors[transaction.gateway]} me-3`"
            >
              <img
                width="20"
                :src="transaction.img"
              >
            </VAvatar>
          </template>

          <!-- 👉 Title and Subtitle  -->
          <VListItemTitle class="font-weight-semibold text-sm mb-1">
            {{ transaction.gateway }}
          </VListItemTitle>
          <VListItemSubtitle class="text-xs">
            {{ transaction.for }}
          </VListItemSubtitle>

          <!-- 👉 Amounts -->
          <template #append>
            <VListItemAction class="font-weight-semibold">
              <span class="text-base me-3">{{ formateAmount(transaction.amount) }}</span>
              <VIcon
                :size="24"
                :color="Math.sign(transaction.amount) === 1 ? 'success' : 'error'"
                :icon="Math.sign(transaction.amount) === 1 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCardText>
    <!-- !SECTION -->
  </VCard>
</template>

 <style lang="scss" scoped>
  .card-list {
    --v-card-list-gap: 1.625rem;
  }
  </style>
