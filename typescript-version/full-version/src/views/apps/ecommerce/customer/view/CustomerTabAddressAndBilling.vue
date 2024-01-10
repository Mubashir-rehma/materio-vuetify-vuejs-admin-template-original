<script setup lang="ts">
import usFlag from '@images/icons/countries/us.png'
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
    defaultAdderss: true,
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
    defaultAdderss: false,
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
    defaultAdderss: false,
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
      <div class="d-flex justify-space-between mb-6 flex-wrap align-center gap-y-4 gap-x-6">
        <h5 class="text-h5">
          Address Book
        </h5>
        <VBtn
          variant="outlined"
          @click="isEditAddressDialogVisible = !isEditAddressDialogVisible"
        >
          Add new Address
        </VBtn>
      </div>
      <template
        v-for="(address, index) in addressData"
        :key="index"
      >
        <div class="d-flex justify-space-between mb-4 gap-y-2 flex-wrap align-center">
          <div class="d-flex align-center gap-x-1">
            <IconBtn
              density="comfortable"
              @click="show[index] = !show[index]"
            >
              <VIcon
                :icon="show[index] ? 'mdi-chevron-down' : 'mdi-chevron-right'"
                class="flip-in-rtl"
              />
            </IconBtn>
            <div>
              <div>
                <span class="text-subtitle-2 text-high-emphasis me-2">{{ address.title }}</span>
                <VChip
                  v-if="address.defaultAdderss"
                  color="success"
                  density="comfortable"
                >
                  Default Address
                </VChip>
              </div>
              <span class="text-body-2">{{ address.subtitle }}</span>
            </div>
          </div>

          <div class="ms-5">
            <IconBtn>
              <VIcon
                icon="mdi-pencil-outline"
                class="flip-in-rtl"
              />
            </IconBtn>
            <IconBtn>
              <VIcon
                icon="mdi-delete-outline"
                class="flip-in-rtl"
              />
            </IconBtn>
            <IconBtn>
              <VIcon
                icon="mdi-dots-vertical"
                class="flip-in-rtl"
              />
            </IconBtn>
          </div>
        </div>
        <VExpandTransition>
          <div
            v-show="show[index]"
            class="px-8"
          >
            <div class="mb-1 font-weight-medium text-high-emphasis">
              {{ address.owner }}
            </div>
            <div v-html="address.address" />
          </div>
        </VExpandTransition>
        <VDivider
          v-if="index !== addressData.length - 1"
          class="my-4"
        />
      </template>
    </VCardText>
  </VCard>

  <!-- 👉 Payment Methods -->
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between mb-6 flex-wrap align-center gap-y-4 gap-x-6">
        <h5 class="text-h5">
          Payment Methods
        </h5>
        <VBtn
          variant="outlined"
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
          <div class="d-flex align-center">
            <IconBtn
              density="comfortable"
              @click="paymentShow[index] = !paymentShow[index]"
            >
              <VIcon
                :icon="paymentShow[index] ? 'mdi-chevron-down' : 'mdi-chevron-right'"
                class="flip-in-rtl"
              />
            </IconBtn>

            <VImg
              :src="payment.image"
              height="30"
              width="50"
              class="me-3"
            />

            <div>
              <div>
                <span class="text-subtitle-2 me-2">{{ payment.title }}</span>
                <VChip
                  v-if="payment.isDefaultMethod"
                  color="success"
                  density="comfortable"
                >
                  Default Method
                </VChip>
              </div>
              <span class="text-body-2">{{ payment.subtitle }}</span>
            </div>
          </div>

          <div class="ms-5">
            <IconBtn>
              <VIcon
                icon="mdi-pencil-outline"
                class="flip-in-rtl"
              />
            </IconBtn>
            <IconBtn>
              <VIcon
                icon="mdi-delete-outline"
                class="flip-in-rtl"
              />
            </IconBtn>
            <IconBtn>
              <VIcon
                icon="mdi-dots-vertical"
                class="flip-in-rtl"
              />
            </IconBtn>
          </div>
        </div>
        <VExpandTransition>
          <div
            v-show="paymentShow[index]"
            class="px-8"
          >
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTable>
                  <tr>
                    <td>Name: </td>
                    <td>Violet Mendoza</td>
                  </tr>
                  <tr>
                    <td>Number: </td>
                    <td>**** 4487</td>
                  </tr>
                  <tr>
                    <td>Expires: </td>
                    <td>08/2028</td>
                  </tr>
                  <tr>
                    <td>Type: </td>
                    <td>Master Card</td>
                  </tr>
                  <tr>
                    <td>Issuer: </td>
                    <td>VICBANK</td>
                  </tr>
                  <tr>
                    <td>ID: </td>
                    <td>DH73DJ8</td>
                  </tr>
                </VTable>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTable>
                  <tr>
                    <td>Billing: </td>
                    <td>United Kingdom</td>
                  </tr>
                  <tr>
                    <td>Number</td>
                    <td>+7634 983 637</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>vafgot@vultukir.org</td>
                  </tr>
                  <tr>
                    <td>Origin</td>
                    <td class="d-flex">
                      <div class="me-2">
                        United States
                      </div>
                      <img
                        :src="usFlag"
                        height="20"
                        width="20"
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>CVC Check</td>
                    <td class="d-flex">
                      <div class="me-2">
                        Passed
                      </div>
                      <VAvatar
                        variant="tonal"
                        color="success"
                        size="20"
                        inline
                      >
                        <VIcon
                          icon="mdi-check"
                          color="success"
                          size="12"
                        />
                      </VAvatar>
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
