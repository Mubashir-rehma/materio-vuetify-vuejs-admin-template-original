<script setup lang="ts">
import authTree2 from '@/assets/images/pages/auth-v1-tree-2.png'
import authTree from '@/assets/images/pages/auth-v1-tree.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { themeConfig } from '@themeConfig'

const form = ref({
  username: '',
  email: '',
  password: '',
  privacyPolicies: false,
})

const authThemeMask = useGenerateImageVariant('@/assets/images/pages/auth-v1-mask.png')

const isPasswordVisible = ref(false)
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

            <!-- agree -->
            <v-col cols="12">
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

            <!-- login -->
            <v-col cols="12">
              <v-btn
                block
                type="submit"
              >
                Sign up
              </v-btn>
            </v-col>

            <!-- login instead -->
            <v-col
              cols="12"
              class="text-center"
            >
              <span>Already have an account?</span>
              <router-link
                class="text-primary ms-2"
                :to="{ name: 'pages-authentication-login-v1' }"
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
