<script lang="ts" setup>
import { useTheme } from 'vuetify'
import sittingGirlDark from '@/assets/images/illustrations/sitting-girl-with-laptop-dark.png'
import sittingGirlLight from '@/assets/images/illustrations/sitting-girl-with-laptop-light.png'

const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const currentPassword = ref('12345678')
const newPassword = ref('87654321')
const confirmPassword = ref('87654321')

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
const recentDevices = [
  {
    browser: 'Chrome on Windows',
    device: 'HP Spectre 360',
    location: 'New York, NY',
    recentActivity: '28 Apr 2022, 18:20',
    deviceIcon: { icon: 'mdi-microsoft-windows', color: 'primary' },
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
    deviceIcon: { icon: 'mdi-microsoft-windows', color: 'primary' },
  },
  {
    browser: 'Chrome on Android',
    device: 'Oneplus 9 Pro',
    location: 'San Francisco, CA',
    recentActivity: '16 Apr 2022, 04:20',
    deviceIcon: { icon: 'mdi-android', color: 'success' },
  },
]

// 👉 Change the image as per theme change
const vuetifyTheme = useTheme()

const isOneTimePasswordDialogVisible = ref(false)
</script>

<template>
  <v-row>
    <!-- SECTION: Change Password -->
    <v-col cols="12">
      <v-card title="Change Password">
        <v-form>
          <v-card-text>
            <!-- 👉 Current Password -->
            <v-row class="mb-3">
              <v-col
                cols="12"
                md="6"
              >
                <!-- 👉 current password -->
                <v-text-field
                  v-model="currentPassword"
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="Current Password"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                />
              </v-col>
            </v-row>

            <!-- 👉 New Password -->
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <!-- 👉 new password -->
                <v-text-field
                  v-model="newPassword"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="New Password"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <!-- 👉 confirm password -->
                <v-text-field
                  v-model="confirmPassword"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="Confirm New Password"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </v-col>
            </v-row>
          </v-card-text>

          <!-- 👉 Password Requirements -->
          <v-card-text>
            <p class="text-body-1 font-weight-medium mt-4">
              Password Requirements:
            </p>

            <ul class="d-flex flex-column gap-y-3 ps-3">
              <li
                v-for="item in passwordRequirements"
                :key="item"
              >
                <v-icon
                  size="7"
                  icon="mdi-circle"
                  class="me-3"
                />
                <span class="font-weight-medium">{{ item }}</span>
              </li>
            </ul>
          </v-card-text>

          <!-- 👉 Action Buttons -->
          <v-card-text>
            <v-btn class="me-3 mt-3">
              Save changes
            </v-btn>

            <v-btn
              type="reset"
              color="secondary"
              variant="tonal"
              class="mt-3"
            >
              Reset
            </v-btn>
          </v-card-text>
        </v-form>
      </v-card>
    </v-col>
    <!-- !SECTION -->

    <!-- SECTION Two-steps verification -->
    <v-col cols="12">
      <v-card title="Two-steps verification">
        <v-card-text>
          <p class="font-weight-semibold">
            Two factor authentication is not enabled yet.
          </p>
          <p>
            Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.
            <a
              href="javascript:void(0)"
              class="text-decoration-none"
            >Learn more.</a>
          </p>

          <v-btn @click="isOneTimePasswordDialogVisible = true">
            Enable two-factor authentication
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- !SECTION -->

    <v-col cols="12">
      <!-- SECTION: Create an API key -->
      <v-card title="Create an API key">
        <v-row>
          <!-- 👉 Choose API Key -->
          <v-col
            cols="12"
            md="5"
            order-md="0"
            order="1"
          >
            <v-card-text>
              <v-form @submit.prevent="() => {}">
                <v-row>
                  <!-- 👉 Choose API Key -->
                  <v-col cols="12">
                    <v-select
                      label="Choose the API key type you want to create"
                      :items="['Full Control', 'Modify', 'Read & Execute', 'List Folder Contents', 'Read Only', 'Read & Write']"
                    />
                  </v-col>

                  <!-- 👉 Name the API Key -->
                  <v-col cols="12">
                    <v-text-field label="Name the API key" />
                  </v-col>

                  <!-- 👉 Create Key Button -->
                  <v-col cols="12">
                    <v-btn
                      type="submit"
                      block
                    >
                      Create Key
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-col>

          <!-- 👉 Lady image -->
          <v-col
            cols="12"
            md="7"
            order="0"
            order-md="1"
            class="d-flex flex-column justify-center align-center"
          >
            <v-img
              :src="vuetifyTheme.current.value.dark ? sittingGirlDark : sittingGirlLight"
              :width="310"
              :style="$vuetify.display.smAndDown ? '' : 'position: absolute; bottom: 0;'"
            />
          </v-col>
        </v-row>
      </v-card>
    <!-- !SECTION -->
    </v-col>

    <v-col cols="12">
      <!-- SECTION: API Keys List -->
      <v-card title="API Key List &amp; Access">
        <v-card-text>
          An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing.
        </v-card-text>

        <!-- 👉 Server Status -->
        <v-card-text class="d-flex flex-column gap-y-4">
          <div
            v-for="serverKey in serverKeys"
            :key="serverKey.key"
            class="account-setting-server bg-var-theme-background rounded-lg"
          >
            <div class="d-flex align-items-center flex-wrap mb-3">
              <h4 class="text-h5 mb-0 me-3">
                {{ serverKey.name }}
              </h4>
              <v-chip
                label
                color="primary"
              >
                {{ serverKey.permission }}
              </v-chip>
            </div>
            <p class="text-body-1 font-weight-semibold">
              <span class="me-3">{{ serverKey.key }}</span>
              <v-icon
                :size="18"
                icon="mdi-content-copy"
                class="cursor-pointer"
              />
            </p>
            <span>Created on {{ serverKey.createdOn }}</span>

            <!-- 👉 Menu for more  -->
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  color="secondary"
                  size="x-small"
                  variant="text"
                  icon="mdi-dots-vertical"
                  class="more-btn"
                />
              </template>

              <v-list>
                <v-list-item href="javascript:void(0)">
                  <v-list-item-icon
                    size="20"
                    class="me-2"
                  >
                    mdi-pencil-outline
                  </v-list-item-icon>

                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item>

                <v-list-item href="#">
                  <v-list-item-icon
                    size="20"
                    class="me-2"
                  >
                    mdi-delete-outline
                  </v-list-item-icon>
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-card-text>
      </v-card>
      <!-- !SECTION -->
    </v-col>

    <!-- SECTION Recent Devices -->
    <v-col cols="12">
      <!-- 👉 Table -->
      <v-card title="Recent Devices">
        <v-table class="text-no-wrap">
          <thead>
            <tr>
              <th>Browser</th>
              <th>Device</th>
              <th>Location</th>
              <th>Recent Activities</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="device in recentDevices"
              :key="device.recentActivity"
            >
              <td>
                <v-icon
                  :icon="device.deviceIcon.icon"
                  :color="device.deviceIcon.color"
                />
                {{ device.browser }}
              </td>
              <td>{{ device.device }}</td>
              <td>{{ device.location }}</td>
              <td>{{ device.recentActivity }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-col>
    <!-- !SECTION -->
  </v-row>

  <!-- SECTION Enable One time password -->
  <EnableOneTimePasswordDialog v-model="isOneTimePasswordDialogVisible" />
  <!-- !SECTION -->
</template>

<style lang="scss">
.account-setting-server {
  position: relative;
  padding: 1rem;

  .more-btn {
    position: absolute;
    inset-block-start: 0.75rem;
    inset-inline-end: 0.5rem;
  }
}
</style>
