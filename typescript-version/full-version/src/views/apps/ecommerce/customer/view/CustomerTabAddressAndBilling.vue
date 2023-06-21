<script setup lang="ts">
import americanExpress from '@images/icons/payments/img/american-express.png'
import mastercard from '@images/icons/payments/img/mastercard.png'
import visa from '@images/icons/payments/img/visa.png'

const show = ref([true, false, false])
const paymentShow = ref([true, false, false])

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
  <!-- 👉 Address Book -->
  <VCard class="mb-6">
    <VCardItem>
      <template #title>
        Address Book
      </template>
      <template #append>
        <VBtn variant="outlined">
          Add new address
        </VBtn>
      </template>
    </VCardItem>

    <VCardText>
      <template
        v-for="(address, index) in addressData"
        :key="index"
      >
        <div class="d-flex justify-space-between mb-2">
          <div class="d-flex align-center gap-x-1">
            <IconBtn
              density="comfortable"
              @click="show[index] = !show[index]"
            >
              <VIcon :icon="show[index] ? 'mdi-chevron-down' : 'mdi-chevron-right'" />
            </IconBtn>
            <div>
              <div>
                <span class="text-subtitle-2 me-2">{{ address.title }}</span>
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
          <div>
            <IconBtn>
              <VIcon icon="mdi-pencil-outline" />
            </IconBtn>
            <IconBtn>
              <VIcon icon="mdi-delete-outline" />
            </IconBtn>
            <IconBtn>
              <VIcon icon="mdi-dots-vertical" />
            </IconBtn>
          </div>
        </div>
        <VExpandTransition>
          <div
            v-show="show[index]"
            class="px-8"
            v-html="address.address"
          />
        </VExpandTransition>
        <VDivider
          v-if="index !== addressData.length - 1"
          class="my-4"
        />
      </template>
    </VCardText>
  </VCard>

  <!-- 👉 Address Book -->
  <VCard>
    <VCardItem>
      <template #title>
        Payment Method
      </template>
      <template #append>
        <VBtn variant="outlined">
          Add new payment method
        </VBtn>
      </template>
    </VCardItem>

    <VCardText>
      <template
        v-for="(payment, index) in paymentData"
        :key="index"
      >
        <div class="d-flex justify-space-between mb-2">
          <div class="d-flex align-center gap-x-1">
            <IconBtn
              density="comfortable"
              @click="paymentShow[index] = !paymentShow[index]"
            >
              <VIcon :icon="paymentShow[index] ? 'mdi-chevron-down' : 'mdi-chevron-right'" />
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

          <div>
            <IconBtn>
              <VIcon icon="mdi-pencil-outline" />
            </IconBtn>
            <IconBtn>
              <VIcon icon="mdi-delete-outline" />
            </IconBtn>
            <IconBtn>
              <VIcon icon="mdi-dots-vertical" />
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
                    <td>Billing Phone: </td>
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
                    <td>United States</td>
                  </tr>
                  <tr>
                    <td>CVC Check</td>
                    <td>Passed</td>
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
</template>
