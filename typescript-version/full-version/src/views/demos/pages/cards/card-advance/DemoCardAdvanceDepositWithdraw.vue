<script setup lang="ts">
import gumroad from '@/assets/images/logos/gumroad.png'
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        md="6"
      >
        <VCardHeader>
          <VCardHeaderText>
            <VCardTitle>Deposit</VCardTitle>
          </VCardHeaderText>

          <a
            href="javascript:void(0)"
            class="text-caption"
          >View All</a>
        </VCardHeader>

        <VList class="px-1">
          <VListItem>
            <VListItemAvatar
              start
              rounded
            >
              <VImg
                :height="29"
                :width="28"
                :src="gumroad"
              />
            </VListItemAvatar>

            <VListItemHeader>
              <VListItemTitle>Gumroad Account</VListItemTitle>
              <VListItemSubtitle>Sell UI Kit</VListItemSubtitle>
            </VListItemHeader>

            <VListItemAction class="text-body-2 text-success font-weight-semibold">
              +$4,650
            </VListItemAction>
          </VListItem>
        </VList>
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VCardHeader>
          <VCardHeaderText>
            <VCardTitle>Withdraw</VCardTitle>
          </VCardHeaderText>

          <a
            href="javascript:void(0)"
            class="text-caption"
          >View All</a>
        </VCardHeader>

        <VList class="px-1">
          <VListItem>
            <VListItemAvatar
              start
              rounded
            >
              <VImg
                :height="29"
                :width="28"
                :src="gumroad"
              />
            </VListItemAvatar>

            <VListItemHeader>
              <VListItemTitle>Google Adsense</VListItemTitle>
              <VListItemSubtitle>Paypal deposit</VListItemSubtitle>
            </VListItemHeader>

            <VListItemAction class="text-body-2 text-error font-weight-semibold">
              +$4,650
            </VListItemAction>
          </VListItem>
        </VList>
      </VCol>
    </VRow>
  </VCard>
</template>
