<script setup lang="ts">
import CustomerOrderTable from './CustomerOrderTable.vue'
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-1 flex-column">
          <VAvatar
            variant="tonal"
            color="primary"
            icon="ri-money-dollar-circle-line"
            rounded
          />
          <h6 class="text-h6">
            Account Balance
          </h6>
          <div>
            <span class="text-primary text-h6 me-2">$7480</span>
            <span class="text-body-2">Credit Left</span>
            <p class="mb-0 text-base">
              Account balance for next purchase
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-1 flex-column">
          <VAvatar
            variant="tonal"
            color="success"
            icon="ri-gift-line"
            rounded
          />
          <h6 class="text-h6">
            Loyalty Program
          </h6>
          <div>
            <VChip
              color="success"
              class="mb-1"
              density="comfortable"
            >
              Platinum Member
            </VChip>
            <p class="mb-0 text-base">
              3000 points to next tier
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-1 flex-column">
          <VAvatar
            variant="tonal"
            color="warning"
            icon="ri-star-fill-outline"
            rounded
          />
          <h6 class="text-h6">
            Wishlist
          </h6>
          <div>
            <span class="text-warning text-h6 me-2">15</span>
            <span class="text-body-2">items in wishlist</span>
            <p class="mb-0 text-base">
              Receive notification when items go on sale
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-1 flex-column">
          <VAvatar
            variant="tonal"
            color="info"
            icon="ri-vip-crown-line"
            rounded
          />
          <h6 class="text-h6">
            Coupons
          </h6>
          <div>
            <span class="text-info text-h6 me-2">21</span>
            <span class="text-body-2">Coupons you win</span>
            <p class="mb-0 text-base">
              Use coupon on next purchase
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol>
      <CustomerOrderTable />
    </VCol>
  </VRow>
</template>
