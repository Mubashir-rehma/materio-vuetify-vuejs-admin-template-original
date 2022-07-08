<script setup lang="ts">
import authTree from '@/assets/images/pages/tree-3.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { themeConfig } from '@themeConfig'

const form = ref({
  newPassword: '',
  confirmPassword: '',
})

const authThemeImg = useGenerateImageVariant('@/assets/images/pages/auth-v2-reset-password-illustration.png', true)

const authThemeMask = useGenerateImageVariant('@/assets/images/pages/auth-v2-mask.png')

const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
</script>

<template>
  <div>
    <!-- Title and Logo -->
    <div class="auth-logo d-flex align-center">
      <img
        :src="themeConfig.app.logo"
        class="me-3"
      >
      <span class="font-weight-semibold text-h5">{{ themeConfig.app.title }}</span>
    </div>

    <VRow
      no-gutters
      class="auth-wrapper"
    >
      <VCol
        lg="8"
        class="d-none d-lg-flex align-center justify-center position-relative"
      >
        <VImg
          max-width="768px"
          :src="authThemeImg"
          class="auth-illustration mt-12"
        />

        <VImg
          :width="276"
          :src="authTree"
          class="auth-footer-start-tree"
        />

        <VImg
          class="auth-footer-mask"
          :src="authThemeMask"
        />
      </VCol>

      <VCol
        cols="12"
        lg="4"
        class="auth-bg d-flex align-center justify-center"
      >
        <VCard
          flat
          :max-width="500"
          class="mt-12 pa-4"
        >
          <VCardText>
            <h5 class="text-h5 font-weight-semibold mb-3">
              Reset Password 🔒
            </h5>
            <p class="mb-0">
              Enter your email and we'll send you instructions to reset your password
            </p>
          </VCardText>

          <VCardText>
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="form.newPassword"
                    label="New Password"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />
                </VCol>

                <!-- Confirm Password -->
                <VCol cols="12">
                  <VTextField
                    v-model="form.confirmPassword"
                    label="Confirm Password"
                    :type="isConfirmPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                  />
                </VCol>

                <!-- Set password -->
                <VCol cols="12">
                  <VBtn
                    block
                    type="submit"
                  >
                    Set New Password
                  </VBtn>
                </VCol>

                <!-- back to login -->
                <VCol
                  cols="12"
                  class="text-center"
                >
                  <RouterLink
                    class="text-primary ms-2"
                    :to="{ name: 'pages-authentication-login-v2' }"
                  >
                    <VIcon icon="mdi-chevron-left" />
                    <span>Back to login</span>
                  </RouterLink>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
