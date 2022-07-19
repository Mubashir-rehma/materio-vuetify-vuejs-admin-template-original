<script setup lang="ts">
const savedCards = [
  {
    logo: dynamicImgImport('@/assets/images/cards/logo-mastercard-small.png'),
    type: 'Credit card',
    number: '2566 xxxx xxxx 8908',
  },
  {
    logo: dynamicImgImport('@/assets/images/cards/logo-credit-card-2.png'),
    type: 'Credit card',
    number: '8990 xxxx xxxx 6852',
  },
]
</script>

<template>
  <VCard>
    <!-- SECTION Card Header and Menu -->
    <VCardItem>
      <!-- 👉 Title -->
      <VCardTitle>Upgrade Your Plan</VCardTitle>

      <!-- 👉 menu -->
      <template #append>
        <VBtn
          size="x-small"
          variant="text"
          icon="mdi-dots-vertical"
          color="secondary"
          class="me-n3"
        />
      </template>
    </VCardItem>
    <!-- !SECTION -->

    <VCardText>
      <span class="text-caption">Please make the payment to start enjoying all the features of our premium plan as soon as possible.</span>

      <!-- SECTION Upgrade plan banner -->
      <VList class="plan-upgrade-banner">
        <VListItem
          active-color="primary"
          active
          rounded
        >
          <!-- 👉 Avatar -->
          <VListItemAvatar
            start
            rounded
            :size="44"
            :image="dynamicImgImport('@/assets/images/cards/briefcase.png')"
            class="plan-details pa-2"
          />
          <!-- 👉 Title and subtitle -->
          <VListItemHeader>
            <VListItemTitle class="text-body-2 font-weight-medium">
              Platinum
            </VListItemTitle>
            <VListItemSubtitle class="text-caption font-weight-medium">
              Upgrade Plan
            </VListItemSubtitle>
          </VListItemHeader>

          <!-- 👉 Actions -->
          <VListItemAction>
            <sup class="text-caption text-secondary">$</sup>
            <span class="text-h5 font-weight-semibold">5250</span>
            <sub class="text-secondary">/year</sub>
          </VListItemAction>
        </VListItem>
      </VList>
      <!-- !SECTION -->

      <!-- SECTION Payment Details -->
      <VList
        class="mx-n4 pt-0"
      >
        <VListSubheader>
          Payment details
        </VListSubheader>

        <VListItem
          v-for="card in savedCards"
          :key="card.logo"
        >
          <!-- 👉 Avatar -->
          <VListItemAvatar
            rounded
            start
            :size="45"
            :image="card.logo"
          />

          <!-- 👉 Title and Subtitle -->
          <VListItemHeader>
            <VListItemTitle class="text-body-2 font-weight-medium">
              {{ card.type }}
            </VListItemTitle>
            <VListItemSubtitle class="text-caption">
              {{ card.number }}
            </VListItemSubtitle>
          </VListItemHeader>

          <!-- 👉 Action -->
          <VListItemAction>
            <VTextField
              density="compact"
              placeholder="CVV"
            />
          </VListItemAction>
        </VListItem>

        <!-- 👉 Add Payment  -->
        <VListItem>
          <a
            href="javascript:void(0)"
            class="text-primary text-caption"
          >Add Payment Method</a>
        </VListItem>
      </VList>
      <!-- !SECTION -->

      <!-- 👉 Email -->
      <VForm>
        <VRow>
          <VCol cols="12">
            <VTextField placeholder="Email Address" />
          </VCol>

          <VCol cols="12">
            <VBtn
              block
              append-icon="mdi-arrow-right"
            >
              Process To Payment
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.plan-upgrade-banner {
  .plan-details {
    border: 1px solid rgb(var(--v-theme-primary));
  }
}
</style>
