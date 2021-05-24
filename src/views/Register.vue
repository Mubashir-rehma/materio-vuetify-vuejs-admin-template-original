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
                  <v-form
                    ref="registerForm"
                    @submit.prevent="handleFormSubmit"
                  >
                    <div>
                      <v-text-field
                        v-model="username"
                        outlined
                        label="Username"
                        :error-messages="errorMessages.username"
                        :rules="[validators.required, validators.alphaValidator]"
                        placeholder="Username"
                      ></v-text-field>
                    </div>

                    <div>
                      <v-text-field
                        v-model="email"
                        outlined
                        :error-messages="errorMessages.email"
                        :rules="[validators.required, validators.emailValidator]"
                        label="Email"
                        placeholder="Email"
                      ></v-text-field>
                    </div>

                    <div>
                      <v-text-field
                        v-model="password"
                        outlined
                        :type="isPasswordVisible ? 'text' : 'password'"
                        label="Password"
                        :error-messages="errorMessages.password"
                        placeholder="Password"
                        :rules="[validators.required, validators.passwordValidator]"
                        :append-icon="isPasswordVisible ? icons.mdiEyeOff:icons.mdiEye"
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
                        type="submit"
                      >
                        Sign Up
                      </v-btn>
                    </div>
                  </v-form>
                </v-card-text>

                <!-- create new account  -->
                <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
                  <p class="mb-0 mr-2">
                    Already have an account?
                  </p>
                  <router-link :to="{name:'auth-login'}">
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
// eslint-disable-next-line object-curly-newline
import { required, emailValidator, passwordValidator, alphaValidator } from '@core/utils/validation'
import { ref } from '@vue/composition-api'
import axios from '@axios'
import { useRouter } from '@core/utils'

export default {
  setup() {
    // Template Refs
    const registerForm = ref(null)

    const { router } = useRouter()

    const isPasswordVisible = ref(false)
    const username = ref('bhuro')
    const email = ref('user@mai.com')
    const password = ref('Jay@cLEVISION#123')
    const errorMessages = ref([])
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

    const handleFormSubmit = () => {
      const isFormValid = registerForm.value.validate()

      if (!isFormValid) return

      /*
        1. Make HTTP request to get accessToken
        2. Store received token in localStorage for future use
        3. Make another HTTP request for getting user information
        4. On successful response of user information redirect to home page

        ? We have use promise chaining to get user data from access token
        ? Promise Chaining: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining
      */

      axios
        .post('/auth/register', { username: username.value, email: email.value, password: password.value })
        .then(response => {
          const { accessToken } = response.data

          // ? Set access token in localStorage so axios interceptor can use it
          // Axios Interceptors: https://github.com/axios/axios#interceptors
          localStorage.setItem('accessToken', accessToken)

          return response
        })
        .then(() => {
          axios.get('/auth/me').then(response => {
            const { user } = response.data
            const { ability: userAbility } = user

            // ? Set user's ability in localStorage for Access Control
            localStorage.setItem('userAbility', JSON.stringify(userAbility))

            // ? We will store `userAbility` in localStorage separate from userData
            // ? Hence, we are just removing it from user object
            delete user.ability

            // ? Set user's data in localStorage for UI/Other purpose
            localStorage.setItem('userData', JSON.stringify(user))

            // ? On success redirect to home
            router.push('/')
          })
        })
        .catch(error => {
          // TODO: Show notification
          console.error('Oops, Unable to Register!')
          console.log('error :>> ', error.response)
          errorMessages.value = error.response.data.error
        })
    }

    return {
      isPasswordVisible,
      username,
      email,
      password,
      errorMessages,
      handleFormSubmit,
      socialLink,
      icons: {
        mdiEye,
        mdiEyeOff,
      },
      validators: {
        required,
        emailValidator,
        passwordValidator,
        alphaValidator,
      },

      // Template Refs
      registerForm,
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
