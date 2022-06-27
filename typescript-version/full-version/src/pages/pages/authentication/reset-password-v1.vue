<script setup lang="ts">
import authMaskDark from '@/assets/images/pages/auth-v1-mask-dark.png'
import authMaskLight from '@/assets/images/pages/auth-v1-mask-light.png'
import authTree2 from '@/assets/images/pages/auth-v1-tree-2.png'
import authTree from '@/assets/images/pages/auth-v1-tree.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { themeConfig } from '@themeConfig'

const form = ref({
  newPassword: '',
  confirmPassword: '',
})

const authThemeMask = useGenerateImageVariant(authMaskLight, authMaskDark)

const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <v-card
      class="auth-card pa-4"
      max-width="448"
    >
      <v-card-header>
        <v-card-header-text>
          <v-card-title class="justify-center">
            <img
              :src="themeConfig.app.logo"
              class="me-3"
            >
            <span class="font-weight-semibold text-h5">{{ themeConfig.app.title }}</span>
          </v-card-title>
        </v-card-header-text>
      </v-card-header>

      <v-card-text>
        <h5 class="text-h5 font-weight-semibold mb-3">
          Reset Password 🔒
        </h5>
        <p class="mb-0">
          Enter your email and we'll send you instructions to reset your password
        </p>
      </v-card-text>

      <v-card-text>
        <v-form @submit.prevent="() => {}">
          <v-row>
            <!-- password -->
            <v-col cols="12">
              <v-text-field
                v-model="form.newPassword"
                label="New Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
            </v-col>

            <!-- Confirm Password -->
            <v-col cols="12">
              <v-text-field
                v-model="form.confirmPassword"
                label="Confirm Password"
                :type="isConfirmPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
              />
            </v-col>

            <!-- reset password -->
            <v-col cols="12">
              <v-btn
                block
                type="submit"
              >
                Set New Password
              </v-btn>
            </v-col>

            <!-- back to login -->
            <v-col
              cols="12"
              class="text-center"
            >
              <router-link
                class="text-primary ms-2"
                :to="{ name: 'pages-authentication-login-v1' }"
              >
                <v-icon icon="mdi-chevron-left" />
                <span>Back to login</span>
              </router-link>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    <v-img
      class="auth-footer-start-tree d-none d-md-block"
      :src="authTree"
      :width="250"
    />

    <v-img
      :src="authTree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <v-img
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
