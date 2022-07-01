<script setup lang="ts">
import authTree from '@/assets/images/pages/tree-2.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { themeConfig } from '@themeConfig'

const form = ref({
  username: '',
  email: '',
  password: '',
  privacyPolicies: false,
})

const imageVariant = useGenerateImageVariant('@/assets/images/pages/auth-v2-register-illustration.png', true)

const authThemeMask = useGenerateImageVariant('@/assets/images/pages/auth-v2-mask.png')

const isPasswordVisible = ref(false)
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
          :src="imageVariant"
          class="auth-illustration mt-12"
        />

        <v-img
          :width="300"
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
              Adventure starts here 🚀
            </h5>
            <p class="mb-0">
              Make your app management easy and fun!
            </p>
          </v-card-text>

          <v-card-text>
            <v-form @submit.prevent="() => {}">
              <v-row>
                <!-- Username -->
                <v-col cols="12">
                  <v-text-field
                    v-model="form.username"
                    label="Username"
                  />
                </v-col>

                <!-- email -->
                <v-col cols="12">
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    type="email"
                  />
                </v-col>

                <!-- password -->
                <v-col cols="12">
                  <v-text-field
                    v-model="form.password"
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
                    v-model="form.privacyPolicies"
                    inline
                    density="compact"
                  >
                    <template #label>
                      <span class="me-1">I agree to</span>
                      <a
                        href="javascript:void(0)"
                        class="text-primary"
                      >privacy policy & terms</a>
                    </template>
                  </v-checkbox>
                </v-col>

                <!-- Register -->
                <v-col cols="12">
                  <v-btn
                    block
                    type="submit"
                  >
                    Sign up
                  </v-btn>
                </v-col>

                <!-- create account -->
                <v-col
                  cols="12"
                  class="text-center"
                >
                  <span>Already have an account?</span>
                  <router-link
                    class="text-primary ms-2"
                    :to="{ name: 'pages-authentication-login-v2' }"
                  >
                    Sign in instead
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
</route>
