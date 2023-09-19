<script setup lang="ts">
import { VOtpInput } from 'vuetify/labs/VOtpInput'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

definePage({
  meta: {
    layout: 'blank',
  },
})

const router = useRouter()
const otp = ref('')
const isOtpInserted = ref(false)

const onFinish = () => {
  isOtpInserted.value = true

  setTimeout(() => {
    isOtpInserted.value = false
    router.push('/')
  }, 2000)
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <VNodeRenderer :nodes="themeConfig.app.logo" />
          </div>
        </template>

        <VCardTitle class="text-2xl text-uppercase">
          {{ themeConfig.app.title }}
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Two Step Verification 💬
        </h5>
        <p class="mb-2">
          We sent a verification code to your mobile. Enter the code from the mobile in the field below.
        </p>
        <h6 class="text-base font-weight-medium">
          ············1234
        </h6>

        <h6 class="text-base font-weight-medium mt-3">
          Type your 6 digit security code
        </h6>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VOtpInput
                v-model="otp"
                :disabled="isOtpInserted"
                type="number"
                class="pa-0"
                @finish="onFinish"
              />
            </VCol>

            <!-- reset password -->
            <VCol cols="12">
              <VBtn
                :loading="isOtpInserted"
                :disabled="isOtpInserted"
                block
                type="submit"
              >
                Verify my account
              </VBtn>
            </VCol>

            <!-- back to login -->
            <VCol cols="12">
              <div class="d-flex justify-center align-center flex-wrap">
                <span class="me-1">Didn't get the code?</span>
                <a href="#">Resend</a>
              </div>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
