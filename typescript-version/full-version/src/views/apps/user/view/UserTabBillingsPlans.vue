<script setup lang="ts">
interface CardDetail {
  name: string
  number: string
  expiry: string
  isPrimary: boolean
  type: string
  cvv: string
  image: string
}

const isUpgradePlanDialogVisible = ref(false)

const currentCardDetails = ref()
const isCardEditDialogVisible = ref(false)
const isCardAddDialogVisible = ref(false)
const isEditAddressDialogVisible = ref(false)

const openEditCardDialog = (cardDetails: CardDetail) => {
  currentCardDetails.value = cardDetails

  isCardEditDialogVisible.value = true
}

const creditCards: CardDetail[] = [
  {
    name: 'Tom McBride',
    number: '4851234567899865',
    expiry: '12/24',
    isPrimary: true,
    type: 'mastercard',
    cvv: '123',
    image: dynamicImgImport('@/assets/images/icons/payments/mastercard.png'),
  },
  {
    name: 'Mildred Wagner',
    number: '5531234567895678',
    expiry: '02/24',
    isPrimary: false,
    type: 'visa',
    cvv: '456',
    image: dynamicImgImport('@/assets/images/icons/payments/visa.png'),
  },
  {
    name: 'Lester Jennings',
    number: '5531234567890002',
    expiry: '08/20',
    isPrimary: false,
    type: 'visa',
    cvv: '456',
    image: dynamicImgImport('@/assets/images/icons/payments/american-express.png'),
  },
]

const currentBillingAddress = {
  companyName: 'ThemeSelection',
  billingEmail: 'gertrude@gmail.com',
  taxID: 'TAX-875623',
  vatNumber: 'SDF754K77',
  address: '100 Water Plant Avenue, Building 1303 Wake Island',
  contact: '+1(609) 933-44-22',
  country: 'USA',
  state: 'Queensland',
  zipCode: '403114',
}
</script>

<template>
  <VRow>
    <!-- 👉 Current Plan -->
    <VCol cols="12">
      <VCard title="Current Plan">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <p class="heading-color font-weight-medium 7mb-1">
                Your Current Plan is <strong>Basic</strong>
              </p>
              <p>A simple start for everyone</p>
              <p class="heading-color font-weight-medium mb-1">
                Active until Dec 09, 2021
              </p>
              <p>We will send you a notification upon Subscription expiration</p>
              <p class="heading-color font-weight-medium mb-1">
                <span class="me-3">$199 Per Month</span>
                <VChip
                  color="primary"
                  size="small"
                  label
                >
                  popular
                </VChip>
              </p>
              <p>Standard plan for small to medium businesses</p>
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <!-- 👉 Alert -->
              <VAlert
                color="warning"
                variant="tonal"
              >
                <p class="text-body-1 text-warning font-weight-semibold mb-1">
                  We need your attention!
                </p>
                <span>Your plan requires update</span>
              </VAlert>

              <!-- 👉 Progress -->
              <div class="d-flex justify-space-between font-weight-bold mt-8 mb-2">
                <span>Days</span>
                <span>26 of 30 Days</span>
              </div>

              <VProgressLinear
                rounded
                color="primary"
                :height="10"
                :model-value="75"
              />
              <p class="mt-2">
                Your plan requires update
              </p>
            </VCol>

            <VCol cols="12">
              <div class="d-flex flex-wrap gap-4">
                <VBtn @click="isUpgradePlanDialogVisible = true">
                  upgrade plan
                </VBtn>

                <VBtn
                  color="error"
                  variant="tonal"
                >
                  Cancel Subscription
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Payment Methods -->
    <VCol cols="12">
      <VCard>
        <VCardItem>
          <VCardTitle class="d-flex flex-wrap gap-4">
            <span>Payment Methods</span>

            <VSpacer />

            <VBtn
              prepend-icon="mdi-plus"
              @click="isCardAddDialogVisible = !isCardAddDialogVisible"
            >
              Add Card
            </VBtn>
          </VCardTitle>
        </VCardItem>

        <VCardText class="d-flex flex-column gap-y-4">
          <VCard
            v-for="card in creditCards"
            :key="card.name"
            border
            flat
          >
            <VCardText class="d-flex flex-sm-row flex-column">
              <div class="text-no-wrap">
                <VImg
                  :src="card.image"
                  :width="60"
                />
                <h4 class="my-3">
                  {{ card.name }}
                  <VChip
                    v-if="card.isPrimary"
                    label
                    color="primary"
                    size="small"
                  >
                    Primary
                  </VChip>
                </h4>
                <span class="text-body-1">**** **** **** {{ card.number.substring(card.number.length - 4) }}</span>
              </div>

              <VSpacer />

              <div class="d-flex flex-column text-sm-end">
                <div class="order-sm-0 order-1">
                  <VBtn
                    variant="tonal"
                    class="me-2"
                    @click="openEditCardDialog(card)"
                  >
                    Edit
                  </VBtn>
                  <VBtn
                    color="secondary"
                    variant="tonal"
                  >
                    Delete
                  </VBtn>
                </div>
                <span class="mt-sm-auto mb-sm-0 my-5 order-sm-1 order-0">Card expires at {{ card.expiry }}</span>
              </div>
            </VCardText>
          </VCard>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Billing Address -->
      <VCard>
        <VCardItem>
          <VCardTitle>Billing Address</VCardTitle>

          <template #append>
            <VBtn @click="isEditAddressDialogVisible = !isEditAddressDialogVisible">
              Edit Address
            </VBtn>
          </template>
        </VCardItem>

        <VCardText>
          <VRow>
            <VCol
              cols="12"
              lg="6"
            >
              <VTable class="billing-address-table">
                <tr>
                  <td>
                    <p class="text-no-wrap font-weight-medium">
                      Company Name:
                    </p>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.companyName }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="text-no-wrap font-weight-medium">
                      Billing Email:
                    </p>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.billingEmail }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="text-no-wrap font-weight-medium">
                      Tax ID:
                    </p>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.taxID }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="text-no-wrap font-weight-medium">
                      VAT Number:
                    </p>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.vatNumber }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="d-flex align-baseline">
                    <p class="text-no-wrap font-weight-medium mb-0">
                      Billing Address:
                    </p>
                  </td>
                  <td>
                    <p class="text-body-2 mb-0">
                      {{ currentBillingAddress.address }}
                    </p>
                  </td>
                </tr>
              </VTable>
            </VCol>

            <VCol
              cols="12"
              lg="6"
            >
              <VTable class="billing-address-table">
                <tr>
                  <td>
                    <p class="text-no-wrap font-weight-medium">
                      Contact:
                    </p>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.contact }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="text-no-wrap font-weight-medium">
                      Country:
                    </p>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.country }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="text-no-wrap font-weight-medium">
                      State:
                    </p>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.state }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="text-no-wrap font-weight-medium">
                      Zip Code:
                    </p>
                  </td>
                  <td>
                    <p class="text-body-2">
                      {{ currentBillingAddress.zipCode }}
                    </p>
                  </td>
                </tr>
              </VTable>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <!-- 👉 Edit Card Dialog -->
  <CardAddEditDialog
    v-model:isDialogVisible="isCardEditDialogVisible"
    :card-details="currentCardDetails"
    class="v-dialog-lg"
  />

  <!-- 👉 Add Card Dialog -->
  <CardAddEditDialog
    v-model:isDialogVisible="isCardAddDialogVisible"
    class="v-dialog-lg"
  />

  <!-- 👉 Edit Address dialog -->
  <EditAddressDialog
    v-model:isDialogVisible="isEditAddressDialogVisible"
    :billing-address="currentBillingAddress"
  />

  <!-- 👉 Upgrade plan dialog -->
  <UserUpgradePlanDialog v-model:isDialogVisible="isUpgradePlanDialogVisible" />
</template>

<style lang="scss">
.heading-color {
  /* stylelint-disable-next-line color-function-notation */
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}

.billing-address-table {
  tr {
    td:first-child {
      inline-size: 9.25rem;
    }
  }
}
</style>
