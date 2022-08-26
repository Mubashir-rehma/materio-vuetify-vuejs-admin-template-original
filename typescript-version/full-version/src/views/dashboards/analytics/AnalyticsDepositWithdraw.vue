<script setup lang="ts">
const deposits = [
  {
    title: 'Gumroad Account',
    subtitle: 'Sell UI Kit',
    amount: '+$4,650',
    logo: dynamicImgImport('@/assets/images/logos/gumroad.png'),
  },
  {
    title: 'Mastercard',
    subtitle: 'Wallet deposit',
    amount: '+$92,705',
    logo: dynamicImgImport('@/assets/images/logos/mastercard-label.png'),
  },
  {
    title: 'Stripe Account',
    subtitle: 'iOS Application',
    amount: '+$957',
    logo: dynamicImgImport('@/assets/images/logos/stripe.png'),
  },
  {
    title: 'American Bank',
    subtitle: 'American Bank',
    amount: '+$6,837',
    logo: dynamicImgImport('@/assets/images/logos/american-bank.png'),
  },
  {
    title: 'Bank Account',
    subtitle: 'Wallet deposit',
    amount: '+$8,934',
    logo: dynamicImgImport('@/assets/images/logos/citi-bank.png'),
  },
]

const withdraws = [
  {
    title: 'Google Adsense',
    subtitle: 'Paypal deposit',
    amount: '-$145',
    logo: dynamicImgImport('@/assets/images/logos/google.png'),
  },
  {
    title: 'Github Enterprise',
    subtitle: 'Security & compliance',
    amount: '-$1870',
    logo: dynamicImgImport('@/assets/images/logos/github.png'),
  },
  {
    title: 'Upgrade Slack Plan',
    subtitle: 'Debit card deposit',
    amount: '-$450',
    logo: dynamicImgImport('@/assets/images/logos/slack.png'),
  },
  {
    title: 'Digital Ocean',
    subtitle: 'Cloud Hosting',
    amount: '-$540',
    logo: dynamicImgImport('@/assets/images/logos/digital-ocean.png'),
  },
  {
    title: 'AWS Account',
    subtitle: 'Choosing a Cloud Platform',
    amount: '-$21',
    logo: dynamicImgImport('@/assets/images/logos/aws.png'),
  },
]
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        md="6"
      >
        <VCardItem>
          <VCardTitle>Deposit</VCardTitle>

          <template #append>
            <a
              href="javascript:void(0)"
              class="text-sm font-weight-medium"
            >View All</a>
          </template>
        </VCardItem>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="deposit in deposits"
              :key="deposit.logo"
            >
              <template #prepend>
                <VAvatar
                  start
                  rounded
                >
                  <VImg
                    :height="29"
                    :width="28"
                    :src="deposit.logo"
                  />
                </VAvatar>
              </template>

              <VListItemTitle class="text-sm font-weight-semibold mb-1">
                {{ deposit.title }}
              </VListItemTitle>
              <VListItemSubtitle class="text-xs">
                {{ deposit.subtitle }}
              </VListItemSubtitle>

              <template #append>
                <VListItemAction class="text-success font-weight-semibold">
                  {{ deposit.amount }}
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCol>

      <VDivider
        :vertical="$vuetify.display.mdAndUp"
        :inset="$vuetify.display.mdAndUp"
      />

      <VCol
        cols="12"
        md="6"
      >
        <VCardItem>
          <VCardTitle>Withdraw</VCardTitle>

          <template #append>
            <a
              href="javascript:void(0)"
              class="text-sm font-weight-medium"
            >View All</a>
          </template>
        </VCardItem>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="withdraw in withdraws"
              :key="withdraw.logo"
            >
              <template #prepend>
                <VAvatar
                  start
                  rounded
                >
                  <VImg
                    :height="29"
                    :width="28"
                    :src="withdraw.logo"
                  />
                </VAvatar>
              </template>

              <VListItemTitle class="text-sm font-weight-semibold mb-1">
                {{ withdraw.title }}
              </VListItemTitle>
              <VListItemSubtitle class="text-xs">
                {{ withdraw.subtitle }}
              </VListItemSubtitle>

              <template #append>
                <VListItemAction class="text-error font-weight-semibold">
                  {{ withdraw.amount }}
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1.5rem;
}
</style>
