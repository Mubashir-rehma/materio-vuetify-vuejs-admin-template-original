<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref('')
const language = ref('')
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean']
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')

const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
</script>

<template>
  <v-tabs v-model="tab">
    <v-tab value="personal-info">
      Personal Info
    </v-tab>
    <v-tab value="account-details">
      Account Details
    </v-tab>
    <v-tab value="social-links">
      Social Links
    </v-tab>
  </v-tabs>

  <v-card>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="personal-info">
          <v-form class="mt-2">
            <v-row>
              <v-col
                md="6"
                cols="12"
              >
                <v-text-field
                  v-model="firstName"
                  variant="outlined"
                  density="compact"
                  label="First name"
                  hide-details
                />
              </v-col>

              <v-col
                md="6"
                cols="12"
              >
                <v-text-field
                  v-model="lastName"
                  variant="outlined"
                  density="compact"
                  label="Last name"
                  hide-details
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  v-model="language"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  density="compact"
                  variant="outlined"
                  hide-details
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="birthDate"
                  type="number"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-form>
        </v-window-item>

        <v-window-item value="account-details">
          <v-form class="mt-2">
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="username"
                  label="Username"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="email"
                  label="Email"
                  variant="outlined"
                  density="compact"
                  suffix="@example.com"
                  hide-details
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="password"
                  label="Password"
                  variant="outlined"
                  density="compact"
                  hide-details
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="cPassword"
                  label="Confirm Password"
                  variant="outlined"
                  density="compact"
                  hide-details
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-window-item>

        <v-window-item value="social-links">
          <v-form class="mt-2">
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="twitterLink"
                  label="Twitter"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="facebookLink"
                  label="Facebook"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="googlePlusLink"
                  label="Google+"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="linkedInLink"
                  label="LinkedIn"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="instagramLink"
                  label="Instagram"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="quoraLink"
                  label="Quora"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-form>
        </v-window-item>
      </v-window>
    </v-card-text>

    <v-divider />

    <v-card-text>
      <v-btn class="me-3">
        Submit
      </v-btn>
      <v-btn
        color="secondary"
        variant="outlined"
      >
        Cancel
      </v-btn>
    </v-card-text>
  </v-card>
</template>
