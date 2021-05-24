<template>
  <div class="auth-wrapper auth-v2">
    <div class="auth-inner">
      <!-- brand logo -->
      <router-link
        to="/"
        class="brand-logo d-flex align-center"
      >
        <div class="logo">
          <v-img
            max-height="30"
            max-width="30"
            src="/logo.svg"
          ></v-img>
        </div>
        <h2 class="text--primary ml-3">
          Materio
        </h2>
      </router-link>
      <!--/ brand logo -->

      <v-row class="auth-row ma-0">
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
            src="/images/misc/tree-2.png"
          ></v-img>

          <!-- 3d character -->
          <v-img
            contain
            max-width="100%"
            height="710"
            class="auth-3d-group"
            src="/images/3d-characters/illustration-register-v2.png"
          ></v-img>
        </v-col>

        <v-col
          lg="4"
          class="d-flex align-center auth-bg"
        >
          <v-row>
            <v-col
              cols="12"
              sm="8"
              md="6"
              lg="12"
              class="mx-auto"
            >
              <v-card flat>
                <v-card-text>
                  <p class="text-2xl font-weight-semibold text--primary mb-2">
                    Adventure starts here 🚀
                  </p>
                  <p class="mb-2">
                    Make your app management easy and fun!
                  </p>
                </v-card-text>

                <!-- login form -->
                <v-card-text>
                  <v-form>
                    <div class="mb-3">
                      <v-text-field
                        v-model="username"
                        outlined
                        label="Username"
                        placeholder="Username"
                        hide-details
                      ></v-text-field>
                    </div>

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
                        :append-icon="isPasswordVisible ? icons.mdiEyeOff:icons.mdiEye "
                        hide-details
                        @click:append="isPasswordVisible = !isPasswordVisible"
                      ></v-text-field>
                    </div>

                    <div>
                      <v-checkbox hide-details>
                        <template #label>
                          <div class="d-flex align-center flex-wrap">
                            <span class="mr-2">I agree to</span><a href="javascript:void(0)">privacy policy & terms</a>
                          </div>
                        </template>
                      </v-checkbox>
                    </div>

                    <div class="mt-6">
                      <v-btn
                        block
                        color="primary"
                      >
                        Sign Up
                      </v-btn>
                    </div>
                  </v-form>
                </v-card-text>

                <!-- create new account  -->
                <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
                  <span class="mr-2">
                    Already have an account?
                  </span>
                  <router-link :to="{name:'auth-login-v2'}">
                    Sign in instead
                  </router-link>
                </v-card-text>

                <!-- divider -->
                <v-card-text class="d-flex align-center mt-2">
                  <v-divider></v-divider>
                  <span class="mx-5">or</span>
                  <v-divider></v-divider>
                </v-card-text>

                <!-- social links -->
                <v-card-actions class="d-flex justify-center">
                  <v-btn
                    v-for="link in socialLink"
                    :key="link.icon"
                    icon
                    href="javascript:void(0)"
                    class="ml-1"
                  >
                    <v-icon :color="$vuetify.theme.dark ? link.colorInDark:link.color">
                      {{ link.icon }}
                    </v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEye, mdiEyeOff } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
        colorInDark: '#1da1f2',
      },
      {
        icon: mdiGithub,
        color: '#272727',
        colorInDark: '#fff',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
        colorInDark: '#db4437',
      },
    ]

    return {
      isPasswordVisible,
      username,
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
.auth-wrapper {
  &.auth-v2 {
    .auth-3d-group {
      bottom: 10% !important;
    }
  }
}
</style>
