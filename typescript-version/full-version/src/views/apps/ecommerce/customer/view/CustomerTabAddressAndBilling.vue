<script setup lang="ts">
import americanExpress from '@images/icons/payments/img/american-express.png'
import mastercard from '@images/icons/payments/img/mastercard.png'
import visa from '@images/icons/payments/img/visa-light.png'

const show = ref([true, false, false])
const paymentShow = ref([true, false, false])
const isEditAddressDialogVisible = ref(false)
const isCardAddDialogVisible = ref(false)

const addressData = [
  {
    title: 'Home',
    subtitle: '23 Shatinon Mekalan',
    owner: 'Violet Mendoza',
    defaultAddress: true,
    address: ` 23 Shatinon Mekalan,
    <br>
    Melbourne, VIC 3000,
    <br>
    LondonUK`,
  },
  {
    title: 'Office',
    subtitle: '45 Rocker Terrace',
    owner: 'Violet Mendoza',
    defaultAddress: false,
    address: ` 45 Rocker Terrace,
    <br>
    Latheronwheel,
    <br>
    KW5 8NW, London,
    <br>
    UK`,
  },
  {
    title: 'Family',
    subtitle: '512 Water Plant',
    owner: 'Violet Mendoza',
    defaultAddress: false,
    address: ` 512 Water Plant,
    <br>
    Melbourne, VIC 3000,
    <br>
    LondonUK`,
  },
]

const paymentData = [
  {
    title: 'Mastercard',
    subtitle: 'Expries Apr 2028',
    isDefaultMethod: false,
    image: mastercard,
  },
  {
    title: 'American Express',
    subtitle: 'Expries Apr 2028',
    isDefaultMethod: false,
    image: americanExpress,
  },
  {
    title: 'Visa',
    subtitle: '45 Roker Terrace',
    isDefaultMethod: true,
    image: visa,
  },
]
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <!-- 👉 Address Book -->
  <VCard class="mb-6">
    <VCardText>
      <div class="d-flex justify-space-between mb-5 flex-wrap align-center gap-y-4 gap-x-6">
        <h5 class="text-h5">
          Address Book
        </h5>
        <VBtn
          variant="outlined"
          size="small"
          @click="isEditAddressDialogVisible = !isEditAddressDialogVisible"
        >
          Add new Address
        </VBtn>
      </div>
      <template
        v-for="(address, index) in addressData"
        :key="index"
      >
        <div class="d-flex justify-space-between mb-3 gap-y-2 flex-wrap align-center">
          <div class="d-flex align-center gap-x-2">
            <IconBtn
              density="comfortable"
              @click="show[index] = !show[index]"
            >
              <VIcon
                :icon="show[index] ? 'ri-arrow-down-s-line' : 'ri-arrow-right-s-line'"
                class="flip-in-rtl"
              />
            </IconBtn>

            <div>
              <div class="d-flex align-center mb-1">
                <h6 class="text-h6 me-2">
                  {{ address.title }}
                </h6>
                <VChip
                  v-if="address.defaultAddress"
                  color="success"
                  size="small"
                >
                  Default Address
                </VChip>
              </div>
              <span class="text-body-1">{{ address.subtitle }}</span>
            </div>
          </div>

          <div class="ms-5">
            <IconBtn>
              <VIcon
                icon="ri-edit-box-line"
                class="flip-in-rtl"
              />
            </IconBtn>
            <IconBtn>
              <VIcon
                icon="ri-delete-bin-7-line"
                class="flip-in-rtl"
              />
            </IconBtn>
            <IconBtn>
              <VIcon
                icon="ri-more-2-fill"
                class="flip-in-rtl"
              />
            </IconBtn>
          </div>
        </div>
        <VExpandTransition>
          <div
            v-show="show[index]"
            class="px-10"
          >
            <div class="mb-1 font-weight-medium text-high-emphasis">
              {{ address.owner }}
            </div>
            <div v-html="address.address" />
          </div>
        </VExpandTransition>
        <VDivider
          v-if="index !== addressData.length - 1"
          class="my-3"
        />
      </template>
    </VCardText>
  </VCard>

  <!-- 👉 Payment Methods -->
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between mb-5 flex-wrap align-center gap-y-4 gap-x-6">
        <h5 class="text-h5">
          Payment Methods
        </h5>
        <VBtn
          variant="outlined"
          size="small"
          @click="isCardAddDialogVisible = !isCardAddDialogVisible"
        >
          Add Payment Methods
        </VBtn>
      </div>
      <template
        v-for="(payment, index) in paymentData"
        :key="index"
      >
        <div class="d-flex justify-space-between mb-4 gap-y-2 flex-wrap align-center">
          <div class="d-flex align-center gap-2">
            <IconBtn
              density="comfortable"
              @click="paymentShow[index] = !paymentShow[index]"
            >
              <VIcon
                :icon="paymentShow[index] ? 'ri-arrow-down-s-line' : 'ri-arrow-right-s-line'"
                class="flip-in-rtl"
              />
            </IconBtn>

            <VImg
              :src="payment.image"
              height="30"
              width="50"
              class="me-4"
            />

            <div>
              <div class="mb-1">
                <h6 class="text-h6 me-2">
                  {{ payment.title }}
                </h6>
                <VChip
                  v-if="payment.isDefaultMethod"
                  color="success"
                  density="comfortable"
                >
                  Default Method
                </VChip>
              </div>
              <span class="text-body-1">{{ payment.subtitle }}</span>
            </div>
          </div>

          <div class="ms-5">
            <IconBtn>
              <VIcon
                icon="ri-edit-box-line"
                class="flip-in-rtl"
              />
            </IconBtn>
            <IconBtn>
              <VIcon
                icon="ri-delete-bin-7-line"
                class="flip-in-rtl"
              />
            </IconBtn>
            <IconBtn>
              <VIcon
                icon="ri-more-2-fill"
                class="flip-in-rtl"
              />
            </IconBtn>
          </div>
        </div>
        <VExpandTransition>
          <div
            v-show="paymentShow[index]"
            class="px-10"
          >
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTable>
                  <tr>
                    <td class="text-sm pb-1">
                      Name
                    </td>
                    <td class="text-sm text-high-emphasis font-weight-medium">
                      Violet Mendoza
                    </td>
                  </tr>
                  <tr>
                    <td class="text-sm pb-1">
                      Number
                    </td>
                    <td class="text-sm text-high-emphasis font-weight-medium">
                      **** 4487
                    </td>
                  </tr>
                  <tr>
                    <td class="text-sm pb-1">
                      Expires
                    </td>
                    <td class="text-sm text-high-emphasis font-weight-medium">
                      08/2028
                    </td>
                  </tr>
                  <tr>
                    <td class="text-sm pb-1">
                      Type
                    </td>
                    <td class="text-sm text-high-emphasis font-weight-medium">
                      Master Card
                    </td>
                  </tr>
                  <tr>
                    <td class="text-sm pb-1">
                      Issuer
                    </td>
                    <td class="text-sm text-high-emphasis font-weight-medium">
                      VICBANK
                    </td>
                  </tr>
                  <tr>
                    <td class="text-sm pb-1">
                      ID
                    </td>
                    <td class="text-sm text-high-emphasis font-weight-medium">
                      DH73DJ8
                    </td>
                  </tr>
                </VTable>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTable>
                  <tr>
                    <td class="text-sm pb-1">
                      Billing
                    </td>
                    <td class="text-sm text-high-emphasis font-weight-medium">
                      United Kingdom
                    </td>
                  </tr>
                  <tr>
                    <td class="text-sm pb-1">
                      Number
                    </td>
                    <td class="text-sm text-high-emphasis font-weight-medium">
                      +7634 983 637
                    </td>
                  </tr>
                  <tr>
                    <td class="text-sm pb-1">
                      Email
                    </td>
                    <td class="text-sm text-high-emphasis font-weight-medium">
                      vafgot@vultukir.org
                    </td>
                  </tr>
                  <tr>
                    <td class="text-sm pb-1">
                      Origin
                    </td>
                    <td class="text-sm text-high-emphasis font-weight-medium">
                      United States
                    </td>
                  </tr>
                  <tr>
                    <td class="text-sm pb-1">
                      CVC Check
                    </td>
                    <td class="text-sm text-high-emphasis font-weight-medium">
                      Passed
                    </td>
                  </tr>
                </VTable>
              </VCol>
            </VRow>
          </div>
        </VExpandTransition>
        <VDivider
          v-if="index !== paymentData.length - 1"
          class="my-4"
        />
      </template>
    </VCardText>
  </VCard>
  <AddEditAddressDialog v-model:isDialogVisible="isEditAddressDialogVisible" />
  <CardAddEditDialog v-model:isDialogVisible="isCardAddDialogVisible" />
</template>
