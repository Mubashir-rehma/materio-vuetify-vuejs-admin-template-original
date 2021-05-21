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
          src="/images/misc/tree-3.png"
        ></v-img>
        <!-- 3d character -->
        <v-img
          contain
          max-width="100%"
          height="692"
          class="auth-3d-group"
          src="/images/3d-characters/group.png"
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
            <v-card-text class="pb-2">
              <p class="text-2xl font-weight-semibold text--primary mb-1">
                Welcome to Materio! 👋🏻
              </p>
              <p class="mb-0">
                Please sign-in to your account and start the adventure
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

                  <v-col
                    cols="12"
                    class="py-0"
                  >
                    <v-text-field
                      v-model="password"
                      outlined
                      :type="isPasswordVisible ? 'text' : 'password'"
                      label="Password"
                      placeholder="Password"
                      :append-icon="isPasswordVisible ? icons.mdiEye : icons.mdiEyeOff"
                      @click:append="isPasswordVisible = !isPasswordVisible"
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    class="d-flex align-center justify-space-between pt-0"
                  >
                    <v-checkbox
                      hide-details
                      label="Remember Me"
                      class="mt-0"
                    >
                    </v-checkbox>

                    <!-- forget link -->
                    <a href="forget-password-v2">Forgot Password?</a>
                  </v-col>

                  <v-col
                    cols="12"
                    class="pb-1"
                  >
                    <v-btn
                      block
                      color="primary"
                    >
                      Login
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>

            <!-- create new account  -->
            <v-card-text class="d-flex align-center justify-center pb-1">
              <p class="mb-0 mr-2">
                New on our platform?
              </p>
              <a href="register-v2">Create an account</a>
            </v-card-text>

            <!-- divider -->
            <v-card-text class="d-flex align-center">
              <v-divider class="mr-5"></v-divider>
              <span>or</span>
              <v-divider class="ml-5"></v-divider>
            </v-card-text>

            <!-- socail links -->
            <v-card-actions class="d-flex justify-center pt-0">
              <a
                v-for="link in socialLink"
                :key="link.icon"
                href="javascript:void(0)"
                class="mr-4"
              >
                <v-icon :color="link.color">{{ link.icon }}</v-icon>
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
