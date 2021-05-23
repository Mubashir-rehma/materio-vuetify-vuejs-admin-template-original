<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card>
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
            <h2 class="app-title text-2xl font-weight-semibold">
              Materio
            </h2>
          </router-link>
        </v-card-title>
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Welcome to Materio! 👋🏻
          </p>
          <p class="mb-2">
            Please sign-in to your account and start the adventure
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <div class="mb-3">
              <v-text-field
                v-model="email"
                outlined
                label="Email"
                placeholder="Email"
                hide-details
              ></v-text-field>
            </div>

            <div>
              <v-text-field
                v-model="password"
                outlined
                :type="isPasswordVisible ? 'text' : 'password'"
                label="Password"
                placeholder="Password"
                :append-icon="isPasswordVisible ? icons.mdiEyeOff:icons.mdiEye"
                hide-details
                @click:append="isPasswordVisible = !isPasswordVisible"
              ></v-text-field>
            </div>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox
                label="Remember Me"
                hide-details
              >
              </v-checkbox>

              <!-- forget link -->
              <router-link
                :to="{name:'auth-forgot-password-v1'}"
                class="ml-3 mt-5"
              >
                Forgot Password?
              </router-link>
            </div>

            <div class="mt-4">
              <v-btn
                block
                color="primary"
              >
                Login
              </v-btn>
            </div>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <p class="mb-0 mr-2">
            New on our platform?
          </p>
          <router-link :to="{name:'auth-register-v1'}">
            Create an account
          </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- socail links -->
        <v-card-actions class="d-flex justify-center">
          <v-btn
            v-for="link in socialLink"
            :key="link.icon"
            icon
            class="ml-1"
          >
            <v-icon :color="link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn>
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
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEye, mdiEyeOff } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const email = ref('')
    const password = ref('')
    const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
      },
      {
        icon: mdiGithub,
        color: '#272727',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
      },
    ]

    return {
      isPasswordVisible,
      email,
      password,
      socialLink,
      icons: {
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
