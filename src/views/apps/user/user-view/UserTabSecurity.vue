<template>
  <div class="user-tab-security">
    <!-- change password -->
    <v-card class="mb-7">
      <v-card-title>
        Change Password
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-alert
          color="warning"
          text
        >
          <p class="font-weight-semibold mb-1">
            Ensure that these requirements are met
          </p>
          <p class="text-sm mb-0">
            Minimum 8 characters long, uppercase &amp; symbol
          </p>
        </v-alert>

        <!-- form -->
        <v-form class="multi-col-validation">
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="newPassword"
                outlined
                dense
                label="New Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-icon="isPasswordVisible ? icons.mdiEyeOutline : icons.mdiEyeOffOutline"
                @click:append="isPasswordVisible = !isPasswordVisible"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="confirmPassword"
                outlined
                dense
                label="Confirm New Password"
                :type="isPasswordConfirmVisible ? 'text' : 'password'"
                :append-icon="isPasswordConfirmVisible ? icons.mdiEyeOutline : icons.mdiEyeOffOutline"
                @click:append="isPasswordConfirmVisible = !isPasswordConfirmVisible"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-btn color="primary">
                Change Password
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- two step verification -->
    <v-card class="mb-7">
      <v-card-title>
        Two-step verification
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <p class="font-weight-medium text--primary">
          Keep your account secure with authentication step.
        </p>

        <v-text-field
          v-model="smsVerificationNumber"
          label="SMS"
          :append-icon="icons.mdiSquareEditOutline"
          clearable
          :clear-icon="icons.mdiDeleteOutline"
          hide-details
          @click:append="istwoFactorDialogOpen = !istwoFactorDialogOpen"
        ></v-text-field>
        <p class="mb-0 mt-2">
          Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. Learn more.
        </p>
      </v-card-text>
    </v-card>

    <!-- recent divices -->
    <v-card>
      <v-card-title>
        Recent devices
      </v-card-title>

      <v-data-table
        :headers="tableColumnHeaders"
        :items="recenntDevices"
        hide-default-footer
        class="text-no-wrap"
      >
        <template #[`item.browser`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              size="22"
              class="mr-2"
            >
              <v-img :src="`/images/logos/${item.browser}`"></v-img>
            </v-avatar>
            <span class="text--primary text-no-wrap font-weight-medium">{{ item.name }}</span>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog
      v-model="istwoFactorDialogOpen"
      max-width="650px"
    >
      <v-card class="two-factor-dialog pa-sm-10">
        <v-card-title class="text-sm-h5 justify-center">
          Enable One Time Password
        </v-card-title>
        <v-card-text>
          <h4 class="text-lg font-weight-medium mb-2">
            Verify Your Mobile Number for SMS
          </h4>
          <p>Enter your mobile phone number with country code and we will send you a verification code.</p>

          <v-form>
            <v-text-field
              outlined
              dense
              type="number"
              placeholder="Mobile number with country code"
              label="Mobile number with country code"
            ></v-text-field>

            <div class="d-flex align-center">
              <v-btn
                color="secondary"
                outlined
                class="mr-3 ml-auto"
                @click="istwoFactorDialogOpen = !istwoFactorDialogOpen"
              >
                Cancel
              </v-btn>
              <v-btn
                color="primary"
                @click="istwoFactorDialogOpen = !istwoFactorDialogOpen"
              >
                send
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  mdiSquareEditOutline, mdiDeleteOutline, mdiEyeOutline, mdiEyeOffOutline,
} from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const istwoFactorDialogOpen = ref(false)
    const newPassword = ref('')
    const confirmPassword = ref('')
    const smsVerificationNumber = ref('+1(968) 819-2547')
    const isPasswordVisible = ref(false)
    const isPasswordConfirmVisible = ref(false)

    const tableColumnHeaders = [
      { text: 'BROWSER', value: 'browser' },
      { text: 'DEVICE', value: 'device' },
      { text: 'LOCATION', value: 'location' },
      { text: 'RECENT ACTIVITY', value: 'recentActivity' },
    ]

    const recenntDevices = [
      {
        browser: 'chrome-logo.png',
        name: 'Chrome on Windows',
        device: 'Dell XPS 15',
        location: 'United States',
        recentActivity: '10, Jan 2020 20:07',
      },
      {
        browser: 'chrome-logo.png',
        name: 'Chrome on Android',
        device: 'Google Pixel 3a',
        location: 'Ghana',
        recentActivity: '11, Jan 2020 10:16',
      },
      {
        browser: 'chrome-logo.png',
        name: 'Chrome on MacOS',
        device: 'Apple iMac',
        location: 'Mayotte',
        recentActivity: '11, Jan 2020 12:10',
      },
      {
        browser: 'chrome-logo.png',
        name: 'Chrome on IPhone',
        device: 'Apple iPhone XR',
        location: 'Mauritania',
        recentActivity: '12, Jan 2020 8:29',
      },
    ]

    return {
      tableColumnHeaders,
      recenntDevices,
      istwoFactorDialogOpen,
      newPassword,
      confirmPassword,
      smsVerificationNumber,
      isPasswordVisible,
      isPasswordConfirmVisible,
      icons: {
        mdiSquareEditOutline,
        mdiDeleteOutline,
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
}
</script>
