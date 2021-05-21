<template>
  <div class="auth-wrapper auth-v2">
    <v-row class="auth-inner">
      <!-- brand logo -->
      <a
        href="/"
        class="brand-logo d-flex align-center"
      >
        <div class="logo">
          <v-img
            max-height="30"
            max-width="30"
            src="/logo.svg"
          ></v-img>
        </div>
        <h2 class="app-title ml-3">Materio</h2>
      </a>
      <!--/ brand logo -->

      <v-col
        lg="8"
        class="d-none d-lg-block position-relative overflow-hidden"
      >
        <!-- triangle bg -->
        <v-img
          height="362"
          class="auth-mask-bg"
          :src="`/images/misc/mask-v2-${$vuetify.theme.dark ? 'dark':'light'}.png`"
        ></v-img>
        <!-- tree -->
        <v-img
          height="226"
          width="300"
          class="auth-tree"
          src="/images/misc/tree.png"
        ></v-img>
        <!-- 3d character -->
        <v-img
          contain
          max-width="100%"
          height="692"
          class="auth-3d-group"
          src="/images/3d-characters/illustration-reset-password.png"
        ></v-img>
      </v-col>

      <v-col
        lg="4"
        class="d-flex align-center auth-bg"
      >
        <v-col
          cols="12"
          sm="8"
          md="6"
          lg="12"
          class="mx-auto my-auto"
        >
          <v-card flat>
            <v-card-text>
              <p class="text-2xl font-weight-semibold text--primary mb-0">
                Reset Password 🔒
              </p>
              <p class="mt-1 mb-3">
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
                      hide-details
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
                      hide-details
                      @click:append="isCPasswordVisible = !isCPasswordVisible"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    class="pt-2"
                  >
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
            <v-card-actions class="d-flex justify-center align-center mt-2">
              <a
                href="login-v2"
                class="text-sm"
              >
                <v-icon
                  size="24"
                  color="primary"
                >{{ icons.mdiChevronLeft }}</v-icon>
                <span>Back to login</span>
              </a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
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

.auth-wrapper {
  &.auth-v2 {
    .auth-3d-group {
      bottom: 10% !important;
    }
  }
}
</style>
