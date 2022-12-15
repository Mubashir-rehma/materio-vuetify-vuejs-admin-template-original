<script setup>
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2MaskDark from '@images/pages/auth-v2-mask-dark.png'
import authV2MaskLight from '@images/pages/auth-v2-mask-light.png'
import authV2ForgotPasswordIllustrationBorderedDark from '@images/pages/auth-v2-verify-email-illustration-bordered-dark.png'
import authV2ForgotPasswordIllustrationBorderedLight from '@images/pages/auth-v2-verify-email-illustration-bordered-light.png'
import authV2ForgotPasswordIllustrationDark from '@images/pages/auth-v2-verify-email-illustration-dark.png'
import authV2ForgotPasswordIllustrationLight from '@images/pages/auth-v2-verify-email-illustration-light.png'
import tree from '@images/pages/tree-2.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const authThemeImg = useGenerateImageVariant(authV2ForgotPasswordIllustrationLight, authV2ForgotPasswordIllustrationDark, authV2ForgotPasswordIllustrationBorderedLight, authV2ForgotPasswordIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
</script>

<template>
  <div>
    <!-- Title and Logo -->
    <div class="auth-logo d-flex align-start gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />

      <h1 class="font-weight-medium leading-normal text-2xl text-uppercase">
        {{ themeConfig.app.title }}
      </h1>
    </div>

    <VRow
      class="auth-wrapper"
      no-gutters
    >
      <VCol
        md="8"
        class="d-none d-md-flex align-center justify-center position-relative"
      >
        <div
          class="d-flex align-center justify-center w-100 pa-10 pe-0"
        >
          <VImg
            max-width="768px"
            :src="authThemeImg"
            class="auth-illustration"
          />
        </div>

        <VImg
          :width="160"
          :src="tree"
          class="auth-footer-start-tree"
        />
        <VImg
          class="auth-footer-mask"
          :src="authThemeMask"
        />
      </VCol>

      <VCol
        cols="12"
        md="4"
        class="auth-card-v2 d-flex align-center justify-center"
      >
        <VCard
          flat
          :max-width="500"
          class="mt-12 mt-sm-0 pa-4"
        >
          <VCardText>
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
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
