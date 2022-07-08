<script setup lang="ts">
import authTree2 from '@/assets/images/pages/auth-v1-tree-2.png'
import authTree from '@/assets/images/pages/auth-v1-tree.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { themeConfig } from '@themeConfig'

const form = ref({
  newPassword: '',
  confirmPassword: '',
})

const authThemeMask = useGenerateImageVariant('@/assets/images/pages/auth-v1-mask.png')

const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4"
      max-width="448"
    >
      <VCardHeader>
        <VCardHeaderText>
          <VCardTitle class="justify-center">
            <img
              :src="themeConfig.app.logo"
              class="me-3"
            >
            <span class="font-weight-semibold text-h5">{{ themeConfig.app.title }}</span>
          </VCardTitle>
        </VCardHeaderText>
      </VCardHeader>

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

            <!-- reset password -->
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
                :to="{ name: 'pages-authentication-login-v1' }"
              >
                <VIcon icon="mdi-chevron-left" />
                <span>Back to login</span>
              </RouterLink>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authTree"
      :width="250"
    />

    <VImg
      :src="authTree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <VImg
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
