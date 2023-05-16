<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

import registrationIllustration from '@images/pages/registration-multistep-illustration.png'

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: '0',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: '99',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: '499',
  },
]

const items = [
  {
    title: 'Account',
    subtitle: 'Account Details',
  },
  {
    title: 'Personal',
    subtitle: 'Enter Information',
  },
  {
    title: 'Billing',
    subtitle: 'Payment Details',
  },
]

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  link: '',
  firstName: '',
  lastName: '',
  mobile: '',
  pincode: '',
  address: '',
  landmark: '',
  city: '',
  state: undefined,
  selectedPlan: '0',
  cardNumber: '',
  cardName: '',
  expiryDate: '',
  cvv: '',
})

const onSubmit = () => {
  // eslint-disable-next-line no-alert
  alert('Submitted..!!')
}
</script>

<template>
  <VRow
    no-gutters
    class="auth-wrapper"
  >
    <VCol
      md="4"
      class="d-none d-md-flex align-center justify-end pa-5"
    >
      <VImg
        :src="registrationIllustration"
        class="auth-illustration"
        max-width="360px"
        height="630px"
      />
    </VCol>

    <VCol
      cols="12"
      md="8"
      class="auth-card-v2 d-flex align-center justify-center pa-10"
      style="background-color: rgb(var(--v-theme-surface));"
    >
      <VCard
        flat
        class="mt-12 mt-sm-0"
      >
        <AppStepper
          v-model:current-step="currentStep"
          :items="items"
          :direction="$vuetify.display.smAndUp ? 'horizontal' : 'vertical'"
          class="mb-10"
        />

        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
          style="max-width: 700px;"
        >
          <VForm>
            <VWindowItem>
              <h5 class="text-h5 mb-1">
                Personal Information
              </h5>
              <p class="text-sm mb-5">
                Enter Your Account Details
              </p>

              <VRow>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.username"
                    label="Username"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.email"
                    label="Email"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.password"
                    label="Password"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.confirmPassword"
                    label="Confirm Password"
                    :type="isConfirmPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                  />
                </VCol>

                <VCol cols="12">
                  <VTextField
                    v-model="form.link"
                    label="Profile Link"
                    type="url"
                  />
                </VCol>
              </VRow>
            </VWindowItem>

            <VWindowItem>
              <h5 class="text-h5 mb-1">
                Personal Information
              </h5>
              <p class="text-sm">
                Enter Your Personal Information
              </p>

              <VRow>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.firstName"
                    label="First Name"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.lastName"
                    label="Last Name"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.mobile"
                    type="number"
                    label="Mobile"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.pincode"
                    type="number"
                    label="Pincode"
                  />
                </VCol>

                <VCol cols="12">
                  <VTextField
                    v-model="form.address"
                    label="Address"
                  />
                </VCol>

                <VCol cols="12">
                  <VTextField
                    v-model="form.landmark"
                    label="Landmark"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.city"
                    label="City"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="form.state"
                    label="State"
                    :items="['New York', 'California', 'Florida', 'Washington', 'Texas']"
                  />
                </VCol>
              </VRow>
            </VWindowItem>

            <VWindowItem>
              <h5 class="text-h5">
                Select Plan
              </h5>
              <p class="text-sm">
                Select plan as per your requirement
              </p>

              <CustomRadiosWithIcon
                v-model:selected-radio="form.selectedPlan"
                :radio-content="radioContent"
                :grid-column="{ sm: '4', cols: '12' }"
              >
                <template #default="{ item }">
                  <div class="text-center">
                    <h5 class="text-h5">
                      {{ item.title }}
                    </h5>
                    <p class="clamp-text">
                      {{ item.desc }}
                    </p>

                    <div class="d-flex align-center justify-center">
                      <span class="text-primary mb-2">$</span>
                      <span class="text-h4 text-primary">
                        {{ item.value }}
                      </span>
                      <span class="mt-2">/month</span>
                    </div>
                  </div>
                </template>
              </CustomRadiosWithIcon>

              <h5 class="text-h5 mt-10">
                Payment Information
              </h5>
              <p class="text-sm">
                Enter your card information
              </p>

              <VRow>
                <VCol cols="12">
                  <VTextField
                    v-model="form.cardNumber"
                    type="number"
                    label="Card Number"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="form.cardName"
                    label="Name on Card"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="3"
                >
                  <VTextField
                    v-model="form.expiryDate"
                    label="Expiry"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="3"
                >
                  <VTextField
                    v-model="form.cvv"
                    type="number"
                    label="CVV"
                  />
                </VCol>
              </VRow>
            </VWindowItem>
          </VForm>
        </VWindow>

        <div class="d-flex justify-sm-space-between gap-4 flex-wrap justify-center mt-5">
          <VBtn
            :color="currentStep === 0 ? 'default' : 'secondary'"
            variant="elevated"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="mdi-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="items.length - 1 === currentStep"
            color="success"
            append-icon="mdi-check"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="mdi-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
