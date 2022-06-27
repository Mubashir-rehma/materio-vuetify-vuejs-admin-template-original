<script setup lang="ts">
import authIllustrationDarkBorder from '@/assets/images/pages/auth-v2-forgot-password-illustration-bordered-dark.png'
import authIllustrationLightBorder from '@/assets/images/pages/auth-v2-forgot-password-illustration-bordered-light.png'
import authIllustrationDark from '@/assets/images/pages/auth-v2-forgot-password-illustration-dark.png'
import authIllustrationLight from '@/assets/images/pages/auth-v2-forgot-password-illustration-light.png'
import authMaskDark from '@/assets/images/pages/auth-v2-mask-dark.png'
import authMaskLight from '@/assets/images/pages/auth-v2-mask-light.png'
import authTree from '@/assets/images/pages/tree.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { themeConfig } from '@themeConfig'

const email = ref('')

const authThemeImg = useGenerateImageVariant(authIllustrationLight, authIllustrationDark, authIllustrationLightBorder, authIllustrationDarkBorder)

const authThemeMask = useGenerateImageVariant(authMaskLight, authMaskDark)
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

    <v-row
      class="auth-wrapper"
      no-gutters
    >
      <v-col
        lg="8"
        class="d-none d-lg-flex align-center justify-center position-relative"
      >
        <v-img
          max-width="768px"
          :src="authThemeImg"
          class="auth-illustration mt-12"
        />
        <v-img
          :width="276"
          :src="authTree"
          class="auth-footer-start-tree"
        />
        <v-img
          class="auth-footer-mask"
          :src="authThemeMask"
        />
      </v-col>

      <v-col
        cols="12"
        lg="4"
        class="auth-bg d-flex align-center justify-center"
      >
        <v-card
          flat
          :max-width="500"
          class="mt-12 pa-4"
        >
          <v-card-text>
            <h5 class="text-h5 font-weight-semibold mb-3">
              Forgot Password? 🔒
            </h5>
            <p class="mb-0">
              Enter your email and we'll send you instructions to reset your password
            </p>
          </v-card-text>

          <v-card-text>
            <v-form @submit.prevent="() => {}">
              <v-row>
                <!-- email -->
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    type="email"
                  />
                </v-col>

                <!-- Reset link -->
                <v-col cols="12">
                  <v-btn
                    block
                    type="submit"
                  >
                    Send Reset Link
                  </v-btn>
                </v-col>

                <!-- back to login -->
                <v-col
                  cols="12"
                  class="text-center"
                >
                  <router-link
                    class="text-primary ms-2"
                    :to="{ name: 'login' }"
                  >
                    <v-icon icon="mdi-chevron-left" />
                    <span>Back to login</span>
                  </router-link>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
</route>
