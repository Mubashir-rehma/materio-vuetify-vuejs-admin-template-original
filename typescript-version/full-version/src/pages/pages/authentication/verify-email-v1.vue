<script setup lang="ts">
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
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
          Verify your email ✉️
        </h5>
        <p>
          Account activation link sent to your email address: hello@example.com Please follow the link inside to continue.
        </p>

        <VBtn
          block
          to="/"
          class="mb-6"
        >
          Skip for now
        </VBtn>

        <div class="d-flex align-center justify-center">
          <span class="me-1">Didn't get the mail? </span><a href="#">Resend</a>
        </div>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
