<script setup lang="ts">
import { useAbility } from '@casl/vue'
import type { LoginResponse } from '@/@fake-db/types'
import authIllustrationDarkBorder from '@/assets/images/pages/auth-v2-login-illustration-bordered-dark.png'
import authIllustrationLightBorder from '@/assets/images/pages/auth-v2-login-illustration-bordered-light.png'
import authIllustrationDark from '@/assets/images/pages/auth-v2-login-illustration-dark.png'
import authIllustrationLight from '@/assets/images/pages/auth-v2-login-illustration-light.png'
import authMaskDark from '@/assets/images/pages/auth-v2-mask-dark.png'
import authMaskLight from '@/assets/images/pages/auth-v2-mask-light.png'
import authTree from '@/assets/images/pages/tree.png'
import type { AppAbility } from '@/plugins/casl/AppAbility'
import axios from '@axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { themeConfig } from '@themeConfig'

const isPasswordVisible = ref(false)

const authThemeImg = useGenerateImageVariant(authIllustrationLight, authIllustrationDark, authIllustrationLightBorder, authIllustrationDarkBorder)

const authThemeMask = useGenerateImageVariant(authMaskLight, authMaskDark)

const route = useRoute()
const router = useRouter()

const ability = useAbility<AppAbility>()

const email = ref('admin@demo.com')
const password = ref('admin')
const rememberMe = ref(false)
const login = () => {
  console.log('email :>> ', email.value)
  console.log('password :>> ', password.value)

  axios.post<LoginResponse>('/auth/login', { email: email.value, password: password.value })
    .then(r => {
      const { accessToken, userData, userAbilities } = r.data

      localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
      ability.update(userAbilities)

      localStorage.setItem('userData', JSON.stringify(userData))
      localStorage.setItem('accessToken', JSON.stringify(accessToken))

      if (route.query.to)
        router.replace(String(route.query.to))
      else router.replace('/')

      return null
    })
    .catch(e => { console.error(e.response.data) })
}
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
      no-gutters
      class="auth-wrapper"
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
              Welcome to {{ themeConfig.app.title }}! 👋🏻
            </h5>
            <p class="mb-0">
              Please sign-in to your account and start the adventure
            </p>
          </v-card-text>
          <v-card-text>
            <v-alert
              color="primary"
              variant="tonal"
            >
              <p class="text-caption mb-2">
                Admin Email: <strong>admin@demo.com</strong> / Pass: <strong>admin</strong>
              </p>
              <p class="text-caption mb-0">
                Client Email: <strong>client@demo.com</strong> / Pass: <strong>client</strong>
              </p>
            </v-alert>
          </v-card-text>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-row>
                <!-- email -->
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    type="email"
                  />
                </v-col>

                <!-- password -->
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    label="Password"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />
                </v-col>

                <!-- remember & forgot password -->
                <v-col
                  cols="12"
                  class="d-flex align-center flex-wrap"
                >
                  <v-checkbox
                    v-model="rememberMe"
                    label="Remember me"
                    inline
                    density="compact"
                  />
                  <router-link
                    class="text-primary ms-2"
                    :to="{ name: 'forgot-password' }"
                  >
                    Forgot Password?
                  </router-link>
                </v-col>

                <!-- login -->
                <v-col cols="12">
                  <v-btn
                    block
                    type="submit"
                  >
                    Login
                  </v-btn>
                </v-col>

                <!-- create account -->
                <v-col
                  cols="12"
                  class="text-center"
                >
                  <span>New on our platform?</span>
                  <router-link
                    class="text-primary ms-2"
                    :to="{ name: 'register' }"
                  >
                    Create an account
                  </router-link>
                </v-col>
                <v-col
                  cols="12"
                  class="d-flex align-center"
                >
                  <v-divider />
                  <span class="mx-4">or</span>
                  <v-divider />
                </v-col>

                <!-- auth providers -->
                <v-col
                  cols="12"
                  class="text-center"
                >
                  <DemoAuthProvider />
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
