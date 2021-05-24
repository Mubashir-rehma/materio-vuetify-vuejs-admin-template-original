<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card>
        <!-- logo and title -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link
            to="/"
            class="d-flex align-center"
          >
            <div class="logo mr-3">
              <v-img
                max-height="30"
                max-width="30"
                src="/logo.svg"
              ></v-img>
            </div>
            <h2 class="text-2xl font-weight-semibold">
              Materio
            </h2>
          </router-link>
        </v-card-title>

        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Reset Password 🔒
          </p>
          <p class="mb-2">
            Your new password must be different from previously used passwords
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <div class="mb-3">
              <v-text-field
                v-model="password"
                outlined
                :type="isPasswordVisible ? 'text' : 'password'"
                label="New Password"
                placeholder="New Password"
                :append-icon="isPasswordVisible ? icons.mdiEyeOff:icons.mdiEye"
                hide-details
                @click:append="isPasswordVisible = !isPasswordVisible"
              ></v-text-field>
            </div>

            <div>
              <v-text-field
                v-model="cPassword"
                outlined
                :type="isCPasswordVisible ? 'text' : 'password'"
                label="Confirm Password"
                placeholder="Confirm Password"
                :append-icon="isCPasswordVisible ? icons.mdiEyeOff:icons.mdiEye"
                hide-details
                @click:append="isCPasswordVisible = !isCPasswordVisible"
              ></v-text-field>
            </div>

            <div class="mt-4">
              <v-btn
                block
                color="primary"
              >
                Set New Password
              </v-btn>
            </div>
          </v-form>
        </v-card-text>

        <!-- back to login -->
        <v-card-actions class="d-flex justify-center align-center">
          <router-link
            :to="{name:'auth-login-v1'}"
            class="d-flex align-center text-sm"
          >
            <v-icon
              size="24"
              color="primary"
            >
              {{ icons.mdiChevronLeft }}
            </v-icon>
            <span>Back to login</span>
          </router-link>
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
