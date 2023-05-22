<template>
  <div>
    <VRow
      class="auth-wrapper"
      no-gutters
    >
      <VCol
        md="8"
        class="d-none d-md-flex"
      >
        <!-- Here your illustrator -->
      </VCol>

      <VCol
        cols="12"
        md="4"
        class="auth-card-v2 d-flex align-center justify-center"
        style="background-color: rgb(var(--v-theme-surface));"
      >
        <VCard
          flat
          :max-width="500"
          class="mt-12 mt-sm-0 pa-4"
        >
          <VCardText class="pt-2">
            <h5 class="text-h5 mb-1">
              Two Step Verification 💬
            </h5>
            <p class="mb-2">
              We sent a verification code to your mobile. Enter the code from the mobile in the field below.
            </p>
            <h6 class="text-base font-weight-medium">
              ············1234
            </h6>
          </VCardText>

          <VCardText>
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <AppOtpInput />
                </VCol>

                <!-- reset password -->
                <VCol cols="12">
                  <VBtn
                    block
                    type="submit"
                  >
                    Verify my account
                  </VBtn>
                </VCol>

                <!-- back to login -->
                <VCol cols="12">
                  <div class="d-flex justify-center align-center flex-wrap">
                    <span class="me-1">Didn't get the code?</span>
                    <a href="#">Resend</a>
                  </div>
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
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
