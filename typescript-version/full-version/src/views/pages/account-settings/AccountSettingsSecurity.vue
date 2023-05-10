<script lang="ts" setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import poseFs9 from '@images/pages/pose-fs-9.png'

const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const passwordRequirements = [
  'Minimum 8 characters long - the more, the better',
  'At least one lowercase character',
  'At least one number, symbol, or whitespace character',
]

const serverKeys = [
  {
    name: 'Server Key 1',
    key: '23eaf7f0-f4f7-495e-8b86-fad3261282ac',
    createdOn: '28 Apr 2021, 18:20 GTM+4:10',
    permission: 'Full Access',
  },
  {
    name: 'Server Key 2',
    key: 'bb98e571-a2e2-4de8-90a9-2e231b5e99',
    createdOn: '12 Feb 2021, 10:30 GTM+2:30',
    permission: 'Read Only',
  },
  {
    name: 'Server Key 3',
    key: '2e915e59-3105-47f2-8838-6e46bf83b711',
    createdOn: '28 Dec 2020, 12:21 GTM+4:10',
    permission: 'Full Access',
  },
]

const recentDevicesHeaders = [
  { title: 'BROWSER', key: 'browser' },
  { title: 'DEVICE', key: 'device' },
  { title: 'LOCATION', key: 'location' },
  { title: 'RECENT ACTIVITY', key: 'recentActivity' },
]

const recentDevices = [
  {
    browser: 'Chrome on Windows',
    device: 'HP Spectre 360',
    location: 'New York, NY',
    recentActivity: '28 Apr 2022, 18:20',
    deviceIcon: { icon: 'mdi-microsoft-windows', color: 'info' },
  },
  {
    browser: 'Chrome on iPhone',
    device: 'iPhone 12x',
    location: 'Los Angeles, CA',
    recentActivity: '20 Apr 2022, 10:20',
    deviceIcon: { icon: 'mdi-cellphone', color: 'error' },
  },
  {
    browser: 'Chrome on Android',
    device: 'Oneplus 9 Pro',
    location: 'San Francisco, CA',
    recentActivity: '16 Apr 2022, 04:20',
    deviceIcon: { icon: 'mdi-android', color: 'success' },
  },
  {
    browser: 'Chrome on MacOS',
    device: 'Apple iMac',
    location: 'New York, NY',
    recentActivity: '28 Apr 2022, 18:20',
    deviceIcon: { icon: 'mdi-apple', color: 'secondary' },
  },
  {
    browser: 'Chrome on Windows',
    device: 'HP Spectre 360',
    location: 'Los Angeles, CA',
    recentActivity: '20 Apr 2022, 10:20',
    deviceIcon: { icon: 'mdi-microsoft-windows', color: 'info' },
  },
  {
    browser: 'Chrome on Android',
    device: 'Oneplus 9 Pro',
    location: 'San Francisco, CA',
    recentActivity: '16 Apr 2022, 04:20',
    deviceIcon: { icon: 'mdi-android', color: 'success' },
  },
]

const isOneTimePasswordDialogVisible = ref(false)
</script>

<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard title="Change Password">
        <VForm>
          <VCardText class="pt-0">
            <!-- 👉 Current Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 current password -->
                <VTextField
                  v-model="currentPassword"
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="Current Password"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                />
              </VCol>
            </VRow>

            <!-- 👉 New Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 new password -->
                <VTextField
                  v-model="newPassword"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="New Password"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 confirm password -->
                <VTextField
                  v-model="confirmPassword"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="Confirm New Password"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>
            </VRow>
          </VCardText>

          <!-- 👉 Password Requirements -->
          <VCardText>
            <p class="text-base mt-2">
              Password Requirements:
            </p>

            <ul class="d-flex flex-column gap-y-4">
              <li
                v-for="item in passwordRequirements"
                :key="item"
                class="d-flex"
              >
                <div>
                  <VIcon
                    size="7"
                    icon="mdi-circle"
                    class="me-3"
                  />
                </div>
                <span class="text-base">{{ item }}</span>
              </li>
            </ul>
          </VCardText>

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4">
            <VBtn>Save changes</VBtn>

            <VBtn
              type="reset"
              color="secondary"
              variant="outlined"
            >
              Reset
            </VBtn>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION Two-steps verification -->
    <VCol cols="12">
      <VCard title="Two-steps verification">
        <VCardText class="text-base">
          <p>
            Two factor authentication is not enabled yet.
          </p>
          <p class="mb-6">
            Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.
            <a
              href="javascript:void(0)"
              class="text-decoration-none"
            >Learn more.</a>
          </p>

          <VBtn @click="isOneTimePasswordDialogVisible = true">
            Enable 2FA
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <VCol cols="12">
      <!-- SECTION: Create an API key -->
      <VCard title="Create an API key">
        <VRow>
          <!-- 👉 Choose API Key -->
          <VCol
            cols="12"
            md="5"
            order-md="0"
            order="1"
          >
            <VCardText>
              <VForm @submit.prevent="() => {}">
                <VRow>
                  <!-- 👉 Choose API Key -->
                  <VCol cols="12">
                    <VSelect
                      label="Choose the API key type you want to create"
                      :items="['Full Control', 'Modify', 'Read & Execute', 'List Folder Contents', 'Read Only', 'Read & Write']"
                    />
                  </VCol>

                  <!-- 👉 Name the API Key -->
                  <VCol cols="12">
                    <VTextField label="Name the API key" />
                  </VCol>

                  <!-- 👉 Create Key Button -->
                  <VCol cols="12">
                    <VBtn
                      type="submit"
                      block
                    >
                      Create Key
                    </VBtn>
                  </VCol>
                </VRow>
              </VForm>
            </VCardText>
          </VCol>

          <!-- 👉 Lady image -->
          <VCol
            cols="12"
            md="7"
            order="0"
            order-md="1"
            class="d-flex flex-column justify-center align-center"
          >
            <VImg
              :src="poseFs9"
              :width="180"
              :style="$vuetify.display.smAndDown ? '' : 'position: absolute; bottom: 0;'"
            />
          </VCol>
        </VRow>
      </VCard>
    <!-- !SECTION -->
    </VCol>

    <VCol cols="12">
      <!-- SECTION: API Keys List -->
      <VCard title="API Key List &amp; Access">
        <VCardText>
          <span class="text-base">
            An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing.
          </span>
        </VCardText>

        <!-- 👉 Server Status -->
        <VCardText class="d-flex flex-column gap-y-6">
          <div
            v-for="serverKey in serverKeys"
            :key="serverKey.key"
            class="bg-var-theme-background pa-4"
          >
            <div class="d-flex align-center flex-wrap mb-3">
              <h6 class="text-h6 mb-0 me-3">
                {{ serverKey.name }}
              </h6>
              <VChip
                color="primary"
                density="comfortable"
              >
                {{ serverKey.permission }}
              </VChip>
            </div>
            <p class="text-base font-weight-medium">
              <span class="me-3">{{ serverKey.key }}</span>
              <VIcon
                :size="20"
                icon="mdi-content-copy"
                class="cursor-pointer"
              />
            </p>
            <span class="text-disabled">Created on {{ serverKey.createdOn }}</span>
          </div>
        </VCardText>
      </VCard>
      <!-- !SECTION -->
    </VCol>

    <!-- SECTION Recent Devices -->
    <VCol cols="12">
      <!-- 👉 Table -->
      <VCard title="Recent Devices">
        <VDataTable
          :headers="recentDevicesHeaders"
          :items="recentDevices"
          hide-default-footer
          class="text-sm"
        >
          <template #item.browser="{ item }">
            <div class="d-flex">
              <VIcon
                start
                :icon="item.raw.deviceIcon.icon"
                :color="item.raw.deviceIcon.color"
              />
              <span class="text-high-emphasis text-base">
                {{ item.raw.browser }}
              </span>
            </div>
          </template>
          <!-- TODO Refactor this after vuetify provides proper solution for removing default footer -->
          <template #bottom />
        </VDataTable>
      </VCard>
    </VCol>
    <!-- !SECTION -->
  </VRow>

  <!-- SECTION Enable One time password -->
  <TwoFactorAuthDialog v-model:isDialogVisible="isOneTimePasswordDialogVisible" />
  <!-- !SECTION -->
</template>
