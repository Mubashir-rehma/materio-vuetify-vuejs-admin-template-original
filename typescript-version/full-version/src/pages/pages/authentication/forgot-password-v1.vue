<script setup lang="ts">
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})

const form = ref({
  email: '',
})
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <RouterLink to="/">
          <div class="d-flex align-center gap-x-2">
            <VNodeRenderer :nodes="themeConfig.app.logo" />
            <h1 class="text-h6 text-uppercase">
              {{ themeConfig.app.title }}
            </h1>
          </div>
        </RouterLink>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Forgot Password? 🔒
        </h5>
        <p class="mb-0">
          Enter your email and we'll send you instructions to reset your password
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                autofocus
                label="Email"
                type="email"
                placeholder="johndoe@email.com"
              />
            </VCol>

            <!-- reset password -->
            <VCol cols="12">
              <VBtn
                block
                type="submit"
              >
                Send Reset Link
              </VBtn>
            </VCol>

            <!-- back to login -->
            <VCol cols="12">
              <RouterLink
                class="d-flex align-center justify-center"
                :to="{ name: 'pages-authentication-login-v1' }"
              >
                <VIcon
                  icon="mdi-chevron-left"
                  class="flip-in-rtl"
                />
                <span>Back to login</span>
              </RouterLink>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
