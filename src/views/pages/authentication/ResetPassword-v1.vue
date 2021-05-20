<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card>
        <!-- logo and title -->
        <v-card-title class="d-flex align-center justify-center pt-11">
          <a
            href="/"
            class="d-flex align-center"
          >
            <div class="logo mr-3">
              <v-img
                max-height="30"
                max-width="30"
                src="/logo.svg"
              ></v-img>
            </div>
            <h2 class="app-title text-2xl font-weight-semibold">Materio</h2>
          </a>
        </v-card-title>

        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-0">
            Reset Password 🔒
          </p>
          <p class="mt-3">
            Your new password must be different from previously used passwords
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form class="multi-col-validation">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  outlined
                  :type="isPasswordVisible ? 'text' : 'password'"
                  label="New Password"
                  placeholder="New Password"
                  :append-icon="isPasswordVisible ? icons.mdiEye : icons.mdiEyeOff"
                  @click:append="isPasswordVisible = !isPasswordVisible"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                class="pt-0"
              >
                <v-text-field
                  v-model="cPassword"
                  outlined
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  :append-icon="isCPasswordVisible ? icons.mdiEye : icons.mdiEyeOff"
                  @click:append="isCPasswordVisible = !isCPasswordVisible"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-btn
                  block
                  color="primary"
                >
                  Set New Password
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <!-- back to login -->
        <v-card-actions class="d-flex justify-center align-center">
          <a href="login-v1">
            <v-icon color="primary">{{ icons.mdiChevronLeft }}</v-icon>
            <span>Back to login</span>
          </a>
        </v-card-actions>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <v-img
      class="auth-mask-bg"
      height="173"
      :src="`/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`"
    ></v-img>

    <!-- tree -->
    <v-img
      class="auth-tree"
      width="247"
      height="185"
      src="/images/misc/tree.png"
    ></v-img>
    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      src="/images/misc/tree-3.png"
    ></v-img>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiChevronLeft, mdiEye, mdiEyeOff } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const isCPasswordVisible = ref(false)
    const password = ref('')
    const cPassword = ref('')

    return {
      isPasswordVisible,
      isCPasswordVisible,
      password,
      cPassword,
      icons: {
        mdiChevronLeft,
        mdiEye,
        mdiEyeOff,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@core/preset/preset/auth.scss';
</style>
