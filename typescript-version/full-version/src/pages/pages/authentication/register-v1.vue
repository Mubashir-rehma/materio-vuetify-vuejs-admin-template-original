<script setup lang="ts">
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
    <VCard
      class="auth-card pa-4"
      max-width="448"
    >
      <VCardItem>
        <template #prepend>
          <div class="d-flex">
            <img :src="themeConfig.app.logo">
          </div>
        </template>

        <VCardTitle class="font-weight-semibold text-h5">
          {{ themeConfig.app.title }}
        </VCardTitle>
      </VCardItem>

      <VCardText>
        <h5 class="text-h5 font-weight-semibold mb-3">
          Adventure starts here 🚀
        </h5>
        <p class="mb-0">
          Make your app management easy and fun!
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- Username -->
            <VCol cols="12">
              <VTextField
                v-model="form.username"
                label="Username"
              />
            </VCol>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
            </VCol>

            <!-- agree -->
            <VCol cols="12">
              <VCheckbox
                v-model="form.privacyPolicies"
                inline
                class="input-control-auto-height"
              >
                <template #label>
                  <span class="me-1">I agree to</span>
                  <a
                    href="javascript:void(0)"
                    class="text-primary"
                  >privacy policy & terms</a>
                </template>
              </VCheckbox>
            </VCol>

            <!-- login -->
            <VCol cols="12">
              <VBtn
                block
                type="submit"
              >
                Sign up
              </VBtn>
            </VCol>

            <!-- login instead -->
            <VCol
              cols="12"
              class="text-center"
            >
              <span>Already have an account?</span>
              <RouterLink
                class="text-primary ms-2"
                :to="{ name: 'pages-authentication-login-v1' }"
              >
                Sign in instead
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

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="dynamicImgImport('@/assets/images/pages/auth-v1-tree.png')"
      :width="250"
    />

    <VImg
      :src="dynamicImgImport('@/assets/images/pages/auth-v1-tree-2.png')"
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
