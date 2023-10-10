<script setup lang="ts">
import paperImg from '@images/svg/paper.svg?raw'
import rocketImg from '@images/svg/rocket.svg?raw'
import userInfoImg from '@images/svg/userInfo.svg?raw'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { VDataTableServer } from 'vuetify/labs/VDataTable'

const rocketIcon = h('div', { innerHTML: rocketImg, style: 'font-size: 2.625rem;color: rgb(var(--v-theme-primary))' })
const userInfoIcon = h('div', { innerHTML: paperImg, style: 'font-size: 2.625rem;color: rgb(var(--v-theme-primary))' })
const paperIcon = h('div', { innerHTML: userInfoImg, style: 'font-size: 2.625rem;color: rgb(var(--v-theme-primary))' })

const widgetData = [
  { title: 'Total Earning', value: '$24,983', icon: 'mdi-currency-usd', color: 'primary' },
  { title: 'Total Orders', value: '$8,647', icon: 'mdi-wallet-giftcard', color: 'success' },
  { title: 'Total Products', value: '$2,367', icon: 'mdi-account-outline', color: 'error' },
  { title: 'Total Customers', value: '4.5%', icon: 'mdi-refresh', color: 'info' },
]

const stepsData = [
  { icon: rocketIcon, desc: 'Create & validate your referral link and get', value: '$50' },
  { icon: userInfoIcon, desc: 'For every new signup you get', value: '10%' },
  { icon: paperIcon, desc: 'Get other friends to generate link and get', value: '$100' },
]

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Data Table Headers
const headers = [
  { title: 'Users', key: 'users' },
  { title: 'Referred ID', key: 'referred-id' },
  { title: 'Status', key: 'status' },
  { title: 'Value', key: 'value' },
  { title: 'Earnings', key: 'earning' },
]

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// Fetching Referral Data
const { data: referralData } = await useApi<any>(createUrl('/apps/ecommerce/referrals', {
  query: {
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}))

const referrals = computed(() => referralData.value.referrals)
const totalReferrals = computed(() => referralData.value.total)

const resolveStatus = (status: string) => {
  if (status === 'Rejected')
    return { text: 'Rejected', color: 'error' }
  if (status === 'Unpaid')
    return { text: 'Unpaid', color: 'warning' }
  if (status === 'Paid')
    return { text: 'Paid', color: 'success' }
}
</script>

<template>
  <div>
    <!-- 👉 Header -->
    <VRow class="match-height">
      <!-- 👉 Widgets -->
      <VCol
        v-for="(data, index) in widgetData"
        :key="index"
        cols="12"
        md="3"
        sm="6"
      >
        <VCard>
          <VCardText>
            <div class="d-flex justify-space-between">
              <div class="d-flex flex-column">
                <span class="text-h6">{{ data.value }}</span>
                <span class="text-caption">{{ data.title }}</span>
              </div>
              <VAvatar
                :icon="data.icon"
                variant="tonal"
                :color="data.color"
              />
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <!-- 👉 Icon Steps -->
      <VCol
        cols="12"
        md="6"
      >
        <VCard>
          <VCardItem>
            <VCardTitle> How to use</VCardTitle>
            <VCardSubtitle>
              Integrate your referral code in 3 easy steps.
            </VCardSubtitle>
          </VCardItem>

          <VCardText>
            <div class="d-flex gap-x-4 justify-center flex-wrap gap-4 gap-y-8">
              <div
                v-for="(step, index) in stepsData"
                :key="index"
                class="d-flex flex-column align-center gap-y-2"
                style="max-inline-size: 185px;"
              >
                <div class="icon-container">
                  <VNodeRenderer :nodes="step.icon" />
                </div>
                <span class="text-body-2 text-wrap text-center">
                  {{ step.desc }}
                </span>
                <span class="text-primary text-h6">{{ step.value }}</span>
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <!-- 👉 Invite -->
      <VCol
        cols="12"
        md="6"
      >
        <VCard>
          <VCardText>
            <div class="mb-11">
              <h6 class="text-h6 mb-5">
                Invite your friends
              </h6>
              <div class="d-flex align-center flex-wrap gap-4">
                <VTextField
                  placeholder="Email Addresss"
                  density="compact"
                />
                <VBtn>Submit</VBtn>
              </div>
            </div>

            <div>
              <h6 class="text-h6 mb-5">
                Share the referral link
              </h6>
              <div class="d-flex align-center flex-wrap gap-4">
                <VTextField
                  placeholder="pixinvent.com/?ref=6478"
                  density="compact"
                />
                <div class="d-flex gap-x-4">
                  <VBtn
                    icon
                    class="rounded"
                    color="#3B5998"
                    size="40"
                  >
                    <VIcon
                      color="white"
                      icon="mdi-facebook"
                    />
                  </VBtn>

                  <VBtn
                    icon
                    class="rounded"
                    color="#55ACEE"
                    size="40"
                  >
                    <VIcon
                      color="white"
                      icon="mdi-twitter"
                    />
                  </VBtn>
                </div>
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <!-- 👉 Referral Table -->

      <VCol cols="12">
        <VCard>
          <VCardText>
            <div class="d-flex justify-space-between align-center flex-wrap gap-4">
              <h5 class="text-h5">
                Referred Users
              </h5>
              <div class="d-flex flex-wrap gap-4">
                <div class="d-flex gap-4 align-center flex-wrap">
                  <VSelect
                    v-model="itemsPerPage"
                    :items="[10, 25, 50, 100]"
                    style="max-inline-size: 250px;min-inline-size: 200px;"
                    density="compact"
                  />
                  <VBtn prepend-icon="mdi-export-variant">
                    Export
                  </VBtn>
                </div>
              </div>
            </div>
          </VCardText>

          <VDataTableServer
            v-model:items-per-page="itemsPerPage"
            v-model:page="page"
            :items="referrals"
            :headers="headers"
            :items-length="totalReferrals"
            show-select
            @update:options="updateOptions"
          >
            <template #item.users="{ item }">
              <div class="d-flex align-center gap-x-3">
                <VAvatar
                  :image="item.avatar"
                  :size="34"
                />
                <div>
                  <div class="font-weight-medium text-sm text-high-emphasis">
                    <RouterLink :to="{ name: 'apps-ecommerce-customer-details-id', params: { id: 478426 } }">
                      {{ item.user }}
                    </RouterLink>
                  </div>
                  <div class="text-sm">
                    {{ item.email }}
                  </div>
                </div>
              </div>
            </template>

            <template #item.referred-id="{ item }">
              {{ item.referredId }}
            </template>

            <template #item.status="{ item }">
              <VChip
                v-bind="resolveStatus(item.status)"
                density="comfortable"
              />
            </template>
          </VDataTableServer>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgb(var(--v-theme-primary));
  border-radius: 50%;
  block-size: 70px;
  inline-size: 70px;
}

.icon {
  color: #000;
  font-size: 42px;
}
</style>
