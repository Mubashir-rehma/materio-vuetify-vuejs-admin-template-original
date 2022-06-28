<script lang="ts" setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import ConfirmDialog from '@core/components/ConfirmDialog.vue'

const accountData = {
  avatarImg: avatar1,
  firstName: 'john',
  lastName: 'Doe',
  email: 'johnDoe@example.com',
  org: 'ThemeSelection',
  phone: '+1 (917) 543-9876',
  address: '123 Main St, New York, NY 10001',
  state: 'New York',
  zip: '10001',
  country: 'USA',
  language: 'English',
  timezone: '(GMT-11:00) International Date Line West',
  currency: 'USD',
}

const refInputEl = ref<HTMLElement>()

const isConfirmDialogOpen = ref(false)

const accountDataLocal = ref(structuredClone(accountData))
const isAccountDeactivated = ref(false)

const validateAccountDeactivation = [(v: string) => !!v || 'Please confirm account deactivation']

const resetForm = () => {
  accountDataLocal.value = structuredClone(accountData)
}

// changeAvatar function
const changeAvatar = (file: Event) => {
  const fileReader = new FileReader()
  const { files } = file.target as HTMLInputElement

  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.avatarImg = fileReader.result
    }
  }
}

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountData.avatarImg
}

const timezones = [
  '(GMT-11:00) International Date Line West',
  '(GMT-11:00) Midway Island',
  '(GMT-10:00) Hawaii',
  '(GMT-09:00) Alaska',
  '(GMT-08:00) Pacific Time (US & Canada)',
  '(GMT-08:00) Tijuana',
  '(GMT-07:00) Arizona',
  '(GMT-07:00) Chihuahua',
  '(GMT-07:00) La Paz',
  '(GMT-07:00) Mazatlan',
  '(GMT-07:00) Mountain Time (US & Canada)',
  '(GMT-06:00) Central America',
  '(GMT-06:00) Central Time (US & Canada)',
  '(GMT-06:00) Guadalajara',
  '(GMT-06:00) Mexico City',
  '(GMT-06:00) Monterrey',
  '(GMT-06:00) Saskatchewan',
  '(GMT-05:00) Bogota',
  '(GMT-05:00) Eastern Time (US & Canada)',
  '(GMT-05:00) Indiana (East)',
  '(GMT-05:00) Lima',
  '(GMT-05:00) Quito',
  '(GMT-04:00) Atlantic Time (Canada)',
  '(GMT-04:00) Caracas',
  '(GMT-04:00) La Paz',
  '(GMT-04:00) Santiago',
  '(GMT-03:30) Newfoundland',
  '(GMT-03:00) Brasilia',
  '(GMT-03:00) Buenos Aires',
  '(GMT-03:00) Georgetown',
  '(GMT-03:00) Greenland',
  '(GMT-02:00) Mid-Atlantic',
  '(GMT-01:00) Azores',
  '(GMT-01:00) Cape Verde Is.',
  '(GMT+00:00) Casablanca',
  '(GMT+00:00) Dublin',
  '(GMT+00:00) Edinburgh',
  '(GMT+00:00) Lisbon',
  '(GMT+00:00) London',
]

const currencies = [
  'USD',
  'EUR',
  'GBP',
  'AUD',
  'BRL',
  'CAD',
  'CNY',
  'CZK',
  'DKK',
  'HKD',
  'HUF',
  'INR',
]
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-card title="Profile Details">
        <v-card-text class="d-flex">
          <!-- 👉 Avatar -->
          <v-avatar
            rounded="lg"
            size="100"
            class="me-6"
            :image="accountDataLocal.avatarImg"
          />

          <!-- 👉 Upload Photo -->
          <div>
            <v-btn
              color="primary"
              class="me-3 mt-5"
              @click="refInputEl?.click()"
            >
              <v-icon
                icon="mdi-cloud-upload-outline"
                class="d-sm-none"
              />
              <span class="d-none d-sm-block">Upload new photo</span>
            </v-btn>

            <input
              ref="refInputEl"
              type="file"
              accept=".jpeg,.png,.jpg,GIF"
              :hidden="true"
              @change="changeAvatar"
            >

            <v-btn
              color="error"
              variant="tonal"
              class="mt-5"
              @click="resetAvatar"
            >
              Reset
            </v-btn>

            <p class="text-sm mt-5">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </v-card-text>

        <v-divider />

        <v-card-text>
          <!-- 👉 Form -->
          <v-form class="mt-6">
            <v-row>
              <!-- 👉 First Name -->
              <v-col
                md="6"
                cols="12"
              >
                <v-text-field
                  v-model="accountDataLocal.firstName"
                  label="First Name"
                />
              </v-col>

              <!-- 👉 Last Name -->
              <v-col
                md="6"
                cols="12"
              >
                <v-text-field
                  v-model="accountDataLocal.lastName"
                  label="Last Name"
                />
              </v-col>

              <!-- 👉 Email -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="accountDataLocal.email"
                  label="E-mail"
                  type="email"
                />
              </v-col>

              <!-- 👉 Organization -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="accountDataLocal.org"
                  label="Organization"
                />
              </v-col>

              <!-- 👉 Phone -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="accountDataLocal.phone"
                  label="Phone Number"
                />
              </v-col>

              <!-- 👉 Address -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="accountDataLocal.address"
                  label="Address"
                />
              </v-col>

              <!-- 👉 State -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="accountDataLocal.state"
                  label="State"
                />
              </v-col>

              <!-- 👉 Zip Code -->
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="accountDataLocal.zip"
                  label="Zip Code"
                />
              </v-col>

              <!-- 👉 Country -->
              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  v-model="accountDataLocal.country"
                  label="Country"
                  :items="['USA', 'Canada', 'UK', 'India', 'Australia']"
                />
              </v-col>

              <!-- 👉 Language -->
              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  v-model="accountDataLocal.language"
                  label="Language"
                  :items="['English', 'Spanish', 'Arabic', 'Hindi', 'Urdu']"
                />
              </v-col>

              <!-- 👉 Timezone -->
              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  v-model="accountDataLocal.timezone"
                  label="Timezone"
                  :items="timezones"
                />
              </v-col>

              <!-- 👉 Currency -->
              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  v-model="accountDataLocal.currency"
                  label="Currency"
                  :items="currencies"
                />
              </v-col>

              <!-- 👉 Form Actions -->
              <v-col cols="12">
                <v-btn class="me-3">
                  Save changes
                </v-btn>

                <v-btn
                  color="secondary"
                  variant="tonal"
                  type="reset"
                  @click.prevent="resetForm"
                >
                  Reset
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Delete Account -->
      <v-card title="Delete Account">
        <v-card-text>
          <!-- 👉 Alert Account delete -->
          <v-alert
            color="warning"
            variant="tonal"
          >
            <p class="text-body-1 text-warning font-weight-medium mb-1">
              Are you sure you want to delete your account?
            </p>
            <span>Once you delete your account, there is no going back. Please be certain.</span>
          </v-alert>

          <!-- 👉 Checkbox and Button  -->
          <v-checkbox
            v-model="isAccountDeactivated"
            :rules="validateAccountDeactivation"
            label="I confirm my account deactivation"
          />

          <v-btn
            :disabled="!isAccountDeactivated"
            color="error"
            class="mt-3"
            @click="isConfirmDialogOpen = true"
          >
            Deactivate Account
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <!-- Confirm Dialog -->
  <ConfirmDialog
    v-model="isConfirmDialogOpen"
    confirmation-msg="Are you sure you want to delete your account?"
  />
</template>
