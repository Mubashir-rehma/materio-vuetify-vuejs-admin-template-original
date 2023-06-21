<script setup lang="ts">
import rocketImg from '@images/eCommerce/rocket.png'

interface Props {
  customerData: {
    avatar: string
    country: string
    country_code: string
    customer: string
    customer_id: number
    email: string
    id: number
    order: number
    total_spent: string
    status: string
    contact: string
  }
}

const props = defineProps<Props>()
</script>

<template>
  <VRow>
    <!-- SECTION Customer Details -->
    <VCol cols="12">
      <VCard v-if="props.customerData">
        <VCardText class="text-center pt-15">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            :color="!props.customerData.avatar ? 'primary' : undefined"
            :variant="!props.customerData.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="props.customerData.avatar"
              :src="props.customerData.avatar"
            />
            <span
              v-else
              class="text-5xl font-weight-medium"
            >
              {{ avatarText(props.customerData.customer) }}
            </span>
          </VAvatar>

          <!-- 👉 Customer fullName -->
          <h6 class="text-h6 mt-4">
            {{ props.customerData.customer }}
          </h6>
          <span class="text-body-1">Customer ID #{{ props.customerData.customer_id }}</span>

          <div class="d-flex justify-center gap-x-6 mt-6">
            <div class="d-flex align-center">
              <VAvatar
                variant="tonal"
                color="primary"
                rounded
                class="me-3"
              >
                <VIcon icon="mdi-cart-plus" />
              </VAvatar>
              <div class="d-flex flex-column align-start">
                <span class="text-body-1 font-weight-medium text-high-emphasis">{{ props.customerData.order }}</span>
                <span class="text-body-1">Orders</span>
              </div>
            </div>
            <div class="d-flex align-center">
              <VAvatar
                variant="tonal"
                color="primary"
                rounded
                class="me-3"
              >
                <VIcon icon="mdi-currency-usd" />
              </VAvatar>
              <div class="d-flex flex-column align-start">
                <span class="text-body-1 font-weight-medium text-high-emphasis">{{ props.customerData.total_spent }}</span>
                <span class="text-body-1">Spent</span>
              </div>
            </div>
          </div>
        </VCardText>

        <!-- 👉 Customer Details -->
        <VCardText>
          <div class="text-h6">
            Details
          </div>
          <VDivider class="my-4" />

          <VList class="card-list mt-2">
            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium me-2">Username:</span>
                <span class="text-body-2">
                  {{ props.customerData.customer }}
                </span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium me-2">Billing Email:</span>
                <span class="text-body-2">
                  {{ props.customerData.email }}
                </span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium me-2">Status:</span>
                <span class="text-body-2">
                  {{ props.customerData.status }}
                </span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium me-2">Contact:</span>
                <span class="text-body-2">
                  {{ props.customerData.contact }}
                </span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle class="text-sm">
                <span class="font-weight-medium me-2">Country:</span>
                <span class="text-body-2">
                  {{ props.customerData.country }}
                </span>
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>

        <VCardText class="text-center">
          <VBtn>
            Edit Details
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION  Upgrade to Premium -->
    <VCol cols="12">
      <VCard
        flat
        class="current-plan"
        color="primary"
      >
        <VCardText>
          <div class="d-flex align-center">
            <div>
              <div class="text-xl font-weight-medium mb-4">
                Upgrade to premium
              </div>
              <p class="mb-6 text-wrap">
                Upgrade customer to premium membership to access pro features.
              </p>
            </div>
            <div>
              <VImg
                :src="rocketImg"
                height="108"
                width="108"
              />
            </div>
          </div>
          <VBtn
            color="light"
            class="text-primary"
            block
          >
            Upgrade to Premium
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->
  </VRow>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.5rem;
}
</style>
