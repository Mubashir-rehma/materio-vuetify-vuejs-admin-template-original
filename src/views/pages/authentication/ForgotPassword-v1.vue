<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card id="login-card">
        <v-card-title class="d-flex align-center justify-center text-2xl font-weight-semibold pt-11">
          <div class="logo mr-3">
            <v-img
              height="27"
              max-width="37"
              src="/logo.svg"
            ></v-img>
          </div>
          <span>Materialize</span>
        </v-card-title>
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-0">
            Forgot Password? 🔒
          </p>
          <p class="mt-3">
            Enter your email and we'll send you instructions to reset your password
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form class="multi-col-validation">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  outlined
                  label="Email"
                  placeholder="email"
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-btn
                  block
                  color="primary"
                >
                  Send reset link
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

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
import { mdiChevronLeft } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const email = ref('')

    return {
      isPasswordVisible,
      email,
      icons: {
        mdiChevronLeft,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@core/preset/preset/auth.scss';
</style>
