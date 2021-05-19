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
            Welcome to Materialize! 👋🏻
          </p>
          <p class="mt-3">
            Please sign-in to your account and start the adventure
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form class="multi-col-validation">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  outlined
                  label="Email"
                  placeholder="email"
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                class="pt-0"
              >
                <v-text-field
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
                <a
                  href="#"
                  class="link-color"
                >Forgot Password?</a>
              </v-col>
              <v-col cols="12">
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
        <v-card-text class="d-flex align-center justify-center">
          <p class="mb-0 mr-2">
            New on our platform?
          </p>
          <a
            href="#"
            class="link-color"
          >Create an account</a>
        </v-card-text>
        <v-card-text class="d-flex align-center">
          <v-divider class="mr-5"></v-divider>
          <span>or</span>
          <v-divider class="ml-5"></v-divider>
        </v-card-text>
        <v-card-actions class="d-flex justify-center pb-8">
          <a
            href="#"
            class="mr-4"
          >
            <v-icon color="#4267b2">{{ icons.mdiFacebook }}</v-icon>
          </a>
          <a
            href="#"
            class="mr-4"
          >
            <v-icon color="#1da1f2">{{ icons.mdiTwitter }}</v-icon>
          </a>
          <a
            href="#"
            class="mr-4"
          >
            <v-icon color="#272727">{{ icons.mdiGithub }}</v-icon>
          </a>
          <a href="#">
            <v-icon color="#db4437">{{ icons.mdiGoogle }}</v-icon>
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
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEye, mdiEyeOff } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)

    return {
      isPasswordVisible,
      icons: {
        mdiFacebook,
        mdiTwitter,
        mdiGithub,
        mdiGoogle,
        mdiEye,
        mdiEyeOff,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.auth-wrapper {
  display: flex;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  flex-basis: 100%;
  &.auth-v1 {
    align-items: center;
    justify-content: center;
    overflow: hidden;
    a {
      text-decoration: unset;
    }
    .auth-mask-bg {
      position: absolute;
      bottom: 0;
    }
    .auth-tree,
    .auth-tree-3 {
      position: absolute;
    }
    .auth-tree {
      bottom: 0;
      left: 0;
    }
    .auth-tree-3 {
      bottom: 0;
      right: 0;
    }
    .link-color {
      color: rgba(145, 85, 253, 0.68);
    }
  }
  .auth-inner {
    width: 28rem;
    height: 36.25rem;
  }
}

@media (max-width: 540px) {
  .auth-tree,
  .auth-tree-3 {
    display: none;
  }
}
</style>
