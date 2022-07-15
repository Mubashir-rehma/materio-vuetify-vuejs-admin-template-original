<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'

import type { LoginResponse } from '@/@fake-db/types'
import authTree from '@/assets/images/pages/tree.png'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import axios from '@axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { themeConfig } from '@themeConfig'
import { emailValidator, requiredValidator } from '@validators'

const isPasswordVisible = ref(false)

const authThemeImg = useGenerateImageVariant('@/assets/images/pages/auth-v2-login-illustration.png', true)

const authThemeMask = useGenerateImageVariant('@/assets/images/pages/auth-v2-mask.png')

const route = useRoute()
const router = useRouter()

const ability = useAppAbility()

const errors = ref<Record<string, string | undefined>>({
  email: undefined,
  password: undefined,
})
const refVForm = ref<VForm>()
const email = ref('admin@demo.com')
const password = ref('admin')
const rememberMe = ref(false)

const login = () => {
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
    .catch(e => {
      const { errors: formErrors } = e.response.data
      errors.value = formErrors
      console.error(e.response.data)
    })
}

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid)
        login()
    })
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
              Welcome to {{ themeConfig.app.title }}! 👋🏻
            </h5>
            <p class="mb-0">
              Please sign-in to your account and start the adventure
            </p>
          </VCardText>
          <VCardText>
            <VAlert
              color="primary"
              variant="tonal"
            >
              <p class="text-caption mb-2">
                Admin Email: <strong>admin@demo.com</strong> / Pass: <strong>admin</strong>
              </p>
              <p class="text-caption mb-0">
                Client Email: <strong>client@demo.com</strong> / Pass: <strong>client</strong>
              </p>
            </VAlert>
          </VCardText>
          <VCardText>
            <VForm
              ref="refVForm"
              @submit.prevent="onSubmit"
            >
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <VTextField
                    v-model="email"
                    label="Email"
                    type="email"
                    :rules="[requiredValidator, emailValidator]"
                    :error-messages="errors.email"
                  />
                </VCol>

                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="password"
                    label="Password"
                    :rules="[requiredValidator]"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :error-messages="errors.password"
                    :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />
                </VCol>

                <!-- remember & forgot password -->
                <VCol
                  cols="12"
                  class="d-flex align-center flex-wrap"
                >
                  <VCheckbox
                    v-model="rememberMe"
                    label="Remember me"
                    inline
                    density="compact"
                  />
                  <RouterLink
                    class="text-primary ms-2"
                    :to="{ name: 'forgot-password' }"
                  >
                    Forgot Password?
                  </RouterLink>
                </VCol>

                <!-- login -->
                <VCol cols="12">
                  <VBtn
                    block
                    type="submit"
                  >
                    Login
                  </VBtn>
                </VCol>

                <!-- create account -->
                <VCol
                  cols="12"
                  class="text-center"
                >
                  <span>New on our platform?</span>
                  <RouterLink
                    class="text-primary ms-2"
                    :to="{ name: 'register' }"
                  >
                    Create an account
                  </RouterLink>
                </VCol>
                <VCol
                  cols="12"
                  class="d-flex align-center"
                >
                  <VDivider />
                  <span class="mx-4">or</span>
                  <VDivider />
                </VCol>

                <!-- auth providers -->
                <VCol
                  cols="12"
                  class="text-center"
                >
                  <DemoAuthProvider />
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
  action: read
  subject: Auth
</route>
