<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import paperImg from '@images/svg/paper.svg?raw'
import rocketImg from '@images/svg/rocket.svg?raw'
import userInfoImg from '@images/svg/userInfo.svg?raw'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

import type { Options } from '@core/types'

const rocketIcon = h('div', { innerHTML: rocketImg, style: 'font-size: 2.625rem;color: rgb(var(--v-theme-primary))' })
const userInfoIcon = h('div', { innerHTML: paperImg, style: 'font-size: 2.625rem;color: rgb(var(--v-theme-primary))' })
const paperIcon = h('div', { innerHTML: userInfoImg, style: 'font-size: 2.625rem;color: rgb(var(--v-theme-primary))' })

const options = ref<Options>({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const referrals = ref([])
const totalReferrals = ref(0)

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

const headers = [
  { title: 'Users', key: 'users' },
  { title: 'Referred ID', key: 'referred-id' },
  { title: 'Status', key: 'status' },
  { title: 'Value', key: 'value' },
  { title: 'Earnings', key: 'earning' },
]

const fetchReferrals = async () => {
  const { data, error } = await useApi<any>(createUrl('/apps/ecommerce/referrals', {
    ...options.value,
    ...(options.value.sortBy
     && {
       sortBy: (options.value.sortBy)[0]?.key,
       orderBy: (options.value.sortBy)[0]?.order,
     }
    ),
  }))

  if (error.value) {
    console.log(error.value)
  }
  else {
    referrals.value = data.value.referrals
    totalReferrals.value = data.value.total
  }
}

const resolveStatus = (status: string) => {
  if (status === 'Rejected')
    return { text: 'Rejected', color: 'error' }
  if (status === 'Unpaid')
    return { text: 'Unpaid', color: 'warning' }
  if (status === 'Paid')
    return { text: 'Paid', color: 'success' }
}

watch(options, fetchReferrals)
</script>

<template>
  <div>
    <!-- 👉 Header -->
    <VRow>
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
          <VCardText>
            <div class="mb-6">
              <h6 class="text-h6">
                How to use
              </h6>
              <span class="text-body-1">Integrate your referral code in 3 easy steps.</span>
            </div>

            <div class="d-flex gap-x-4 justify-center">
              <div
                v-for="(step, index) in stepsData"
                :key="index"
                class="d-flex flex-column align-center gap-y-2"
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
              <div class="d-flex gap-x-4 align-center">
                <VTextField
                  label="Enter friend's email address and invite them"
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
              <div class="d-flex gap-x-4 align-center">
                <VTextField
                  label="Share referral link in social media"
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
            <div class="d-flex flex-wrap gap-4">
              <h6 class="text-h6">
                Referred Users
              </h6>
              <VSpacer />
              <div class="d-flex gap-4 align-center flex-wrap">
                <VSelect
                  v-model="options.itemsPerPage"
                  :items="[10, 25, 50, 100]"
                  style="max-inline-size: 250px;min-inline-size: 200px;"
                  density="compact"
                />
                <VBtn prepend-icon="mdi-export-variant">
                  Export
                </VBtn>
              </div>
            </div>
          </VCardText>

          <VDataTableServer
            v-model:items-per-page="options.itemsPerPage"
            v-model:page="options.page"
            :items="referrals"
            :headers="headers"
            :items-length="totalReferrals"
            show-select
            @update:options="options = $event"
          >
            <template #item.users="{ item }">
              <div class="d-flex align-center gap-x-3">
                <VAvatar
                  :image="item.raw.avatar"
                  :size="34"
                />
                <div>
                  <div class="font-weight-medium text-sm text-high-emphasis">
                    {{ item.raw.user }}
                  </div>
                  <div class="text-sm">
                    {{ item.raw.email }}
                  </div>
                </div>
              </div>
            </template>

            <template #item.referred-id="{ item }">
              {{ item.raw.referred_id }}
            </template>

            <template #item.status="{ item }">
              <VChip
                v-bind="resolveStatus(item.raw.status)"
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
