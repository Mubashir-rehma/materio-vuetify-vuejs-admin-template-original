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
          <div class="auth-illustrator-wrapper">
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
              src="/images/misc/tree-4.png"
            ></v-img>

            <!-- 3d character -->
            <v-img
              contain
              max-width="100%"
              height="692"
              class="auth-3d-group"
              :src="`/images/3d-characters/illustration-forgot-password-${$vuetify.theme.dark ? 'dark':'light'}.png`"
            ></v-img>
          </div>
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
                    Forgot Password? 🔒
                  </p>
                  <p class="mb-2">
                    Enter your email and we'll send you instructions to reset your password
                  </p>
                </v-card-text>

                <!-- login form -->
                <v-card-text>
                  <v-form>
                    <div class="mb-4">
                      <v-text-field
                        v-model="email"
                        outlined
                        label="Email"
                        placeholder="Email"
                        hide-details
                      ></v-text-field>
                    </div>

                    <div>
                      <v-btn
                        block
                        color="primary"
                      >
                        Send reset link
                      </v-btn>
                    </div>
                  </v-form>
                </v-card-text>

                <v-card-actions class="d-flex justify-center align-center">
                  <router-link
                    :to="{name:'auth-login-v2'}"
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
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
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

<style lang="scss">
@import '@core/preset/preset/auth.scss';
</style>
