<script setup lang="ts">
import type { CheckoutData } from './types'

interface Props {
  currentStep?: number
  checkoutData: CheckoutData
}
interface Emit {
  (e: 'update:currentStep', value: number): void
  (e: 'update:checkout-data', value: CheckoutData): void
}
const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const checkoutAddressDataLocal = ref(props.checkoutData)
const isEditAddressDialogVisible = ref(false)

const deliveryOptions = [
  {
    icon: 'ri-user-line',
    title: 'Standard',
    desc: 'Get your product in 1 Week.',
    value: 'free',
  },
  {
    icon: 'ri-vip-crown-line',
    title: 'Express',
    desc: 'Get your product in 3-4 days.',
    value: 'express',
  },
  {
    icon: 'ri-rocket-line',
    title: 'Overnight',
    desc: 'Get your product in 1 day.',
    value: 'overnight',
  },
]

const resolveAddressBadgeColor: any = {
  home: 'primary',
  office: 'success',
}

const resolveDeliveryBadgeData: any = {
  free: { color: 'success', price: 'Free' },
  express: { color: 'secondary', price: 10 },
  overnight: { color: 'secondary', price: 15 },
}

const totalPriceWithDeliveryCharges = computed(() => {
  checkoutAddressDataLocal.value.deliveryCharges = 0
  if (checkoutAddressDataLocal.value.deliverySpeed !== 'free')
    checkoutAddressDataLocal.value.deliveryCharges = resolveDeliveryBadgeData[checkoutAddressDataLocal.value.deliverySpeed].price

  return checkoutAddressDataLocal.value.orderAmount + checkoutAddressDataLocal.value.deliveryCharges
})

const updateAddressData = () => {
  emit('update:checkout-data', checkoutAddressDataLocal.value)
}

const nextStep = () => {
  updateAddressData()
  emit('update:currentStep', props.currentStep ? props.currentStep + 1 : 1)
}

watch(() => props.currentStep, updateAddressData)
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="8"
    >
      <!-- 👉 Address options -->
      <h6 class="text-base font-weight-regular mb-4">
        Select your preferable address
      </h6>

      <!-- 👉 Address custom input -->
      <CustomRadios
        v-model:selected-radio="checkoutAddressDataLocal.deliveryAddress"
        :radio-content="checkoutAddressDataLocal.addresses"
        :grid-column="{ cols: '12', sm: '6' }"
      >
        <template #default="{ item }">
          <div class="w-100">
            <div class="d-flex justify-space-between mb-3">
              <h6 class="text-base font-weight-medium">
                {{ item.title }}
              </h6>

              <VChip
                :color="resolveAddressBadgeColor[item.value]"
                density="comfortable"
                class="text-capitalize"
              >
                {{ item.value }}
              </VChip>
            </div>

            <p class="text-sm mb-0">
              {{ item.desc }}
            </p>
            <p>
              Mobile: {{ item.subtitle }}
            </p>
            <VDivider />
            <div class="pt-4">
              <a
                href="#"
                class="me-3"
              >Edit</a>
              <a href="#">Remove</a>
            </div>
          </div>
        </template>
      </CustomRadios>

      <!-- 👉 Add New Address -->
      <VBtn
        variant="outlined"
        class="mt-4 mb-6"
        size="small"
        @click="isEditAddressDialogVisible = !isEditAddressDialogVisible"
      >
        Add New Address
      </VBtn>

      <!-- 👉 Delivery options -->
      <h6 class="text-base font-weight-regular mb-4">
        Choose Delivery Speed
      </h6>

      <!-- 👉 Delivery options custom input -->
      <CustomRadiosWithIcon
        v-model:selected-radio="checkoutAddressDataLocal.deliverySpeed"
        :radio-content="deliveryOptions"
        :grid-column="{ cols: '12', sm: '4' }"
      >
        <template #default="{ item }">
          <div class="d-flex flex-column align-center gap-2 w-100">
            <div class="d-flex justify-end w-100 mb-n3">
              <VChip
                :color="resolveDeliveryBadgeData[item.value].color"
                size="small"
              >
                {{
                  resolveDeliveryBadgeData[item.value].price === 'Free'
                    ? resolveDeliveryBadgeData[item.value].price : `$${resolveDeliveryBadgeData[item.value].price}`
                }}
              </VChip>
            </div>

            <VIcon
              size="28"
              :icon="item.icon"
            />

            <h6 class="text-base font-weight-medium">
              {{ item.title }}
            </h6>
            <p class="text-sm text-center mb-0">
              {{ item.desc }}
            </p>
          </div>
        </template>
      </CustomRadiosWithIcon>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VCard
        flat
        variant="outlined"
      >
        <!-- 👉 Delivery estimate date -->
        <VCardText>
          <h6 class="text-base font-weight-medium mb-4">
            Estimated Delivery Date
          </h6>

          <VList class="card-list">
            <VListItem
              v-for="product in checkoutAddressDataLocal.cartItems"
              :key="product.name"
            >
              <template #prepend>
                <VImg
                  width="60"
                  :src="product.image"
                  class="me-2"
                />
              </template>

              <VListItemSubtitle>{{ product.name }}</VListItemSubtitle>
              <span class="font-weight-medium text-sm">
                {{ product.estimatedDelivery }}
              </span>
            </VListItem>
          </VList>
        </VCardText>

        <VDivider />

        <!-- 👉 Price details -->
        <VCardText>
          <h6 class="text-base font-weight-medium mb-4">
            Price Details
          </h6>

          <div class="d-flex align-center justify-space-between text-sm mb-2">
            <span class="text-high-emphasis">Order Total</span>
            <span>${{ checkoutAddressDataLocal.orderAmount }}</span>
          </div>

          <div class="d-flex align-center justify-space-between text-sm">
            <span class="text-high-emphasis">Delivery Charges</span>
            <div>
              <VChip
                v-if="checkoutAddressDataLocal.deliverySpeed === 'free'"
                density="comfortable"
                color="success"
              >
                Free
              </VChip>
              <span v-else>${{ resolveDeliveryBadgeData[checkoutAddressDataLocal.deliverySpeed ].price }}.00</span>
            </div>
          </div>
        </VCardText>

        <VDivider />

        <VCardText class="d-flex align-center justify-space-between text-high-emphasis py-3">
          <span class="text-base font-weight-medium">Total</span>
          <span class="text-base font-weight-medium">
            ${{ totalPriceWithDeliveryCharges }}
          </span>
        </VCardText>
      </VCard>

      <VBtn
        block
        class="mt-4"
        @click="nextStep"
      >
        Place Order
      </VBtn>
    </VCol>
  </VRow>
  <AddEditAddressDialog v-model:isDialogVisible="isEditAddressDialogVisible" />
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
