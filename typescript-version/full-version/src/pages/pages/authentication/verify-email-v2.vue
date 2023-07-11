<script setup lang="ts">
definePage({
  meta: {
    layout: 'blank',
  },
})
</script>

<template>
  <VRow
    class="auth-wrapper"
    no-gutters
  >
    <VCol
      md="8"
      class="d-none d-md-flex"
    >
    <!-- here your illustration -->
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
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
