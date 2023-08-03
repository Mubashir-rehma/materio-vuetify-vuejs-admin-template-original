<script setup lang="ts">
import appleImg from '@images/front-pages/landing-page/apple-icon.png'
import googlePlayImg from '@images/front-pages/landing-page/google-play-icon.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
</script>

<template>
  <div class="footer">
    <div class="footer-top pt-15">
      <VContainer>
        <VRow>
          <!-- 👉 Footer  -->
          <VCol
            cols="12"
            md="5"
          >
            <div class="mb-4">
              <div class="d-flex align-center gap-x-3 mb-5">
                <VNodeRenderer :nodes="themeConfig.app.logo" />
                <h5 class="text-h5 text-white">
                  MATERIO
                </h5>
              </div>
              <div class="text-body-2 text-white mb-8 footer-text">
                Most Powerful & Comprehensive 🤩 Vuejs Admin Template with Elegant Material Design & Unique Layouts.
              </div>
              <VForm class="subscribe-form d-flex flex-wrap align-center gap-4">
                <VTextField
                  label="Subscribe to newsletter"
                  placeholder="john@email.com"
                  density="compact"
                  style="min-width: 250px;max-width: 500px;"
                />
                <VBtn>Subscribe</VBtn>
              </VForm>
            </div>
          </VCol>

          <!-- 👉 Pages -->
          <VCol
            cols="12"
            md="2"
            sm="4"
          >
            <div>
              <div class="font-weight-medium mb-6">
                Pages
              </div>
              <ul style="list-style: none;">
                <li
                  v-for="(item, index) in [
                    { name: 'Pricing', to: { name: 'front-pages-pricing' } },
                    { name: 'Payment', to: { name: 'front-pages-payment' }, isNew: true },
                    { name: 'Maintenance', to: { name: 'pages-misc-under-maintenance' } },
                    { name: 'Comming Soon', to: { name: 'pages-misc-coming-soon' } },
                  ]"
                  :key="index"
                  class="mb-4"
                >
                  <RouterLink
                    class="text-white-variant"
                    :to="item.to"
                    target="_blank"
                  >
                    {{ item.name }}

                    <template v-if="item.isNew">
                      <VChip
                        color="primary"
                        variant="elevated"
                        size="x-small"
                        class="ms-2"
                      >
                        New
                      </VChip>
                    </template>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </VCol>

          <!-- 👉 Products  -->
          <VCol
            cols="12"
            md="2"
            sm="4"
          >
            <div>
              <div class="font-weight-medium mb-6">
                Products
              </div>
              <ul>
                <li
                  v-for="(item, index) in ['Page Builder', 'Admin Dashboards', 'UI Kits', 'Illustrations']"
                  :key="index"
                  class="mb-4"
                  style="list-style: none;"
                >
                  <RouterLink
                    to=""
                    class="text-white-variant"
                  >
                    {{ item }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </VCol>

          <!-- 👉 Download App -->
          <VCol
            cols="12"
            md="3"
            sm="4"
          >
            <div>
              <div class="font-weight-medium mb-6">
                Download our app
              </div>
              <div>
                <VBtn
                  v-for="(item, index) in [
                    { image: appleImg, store: 'App Store' },
                    { image: googlePlayImg, store: 'Google Play' },
                  ]"
                  :key="index"
                  color="#211B2C"
                  size="x-large"
                  class="mb-4 d-block"
                >
                  <template #default>
                    <div class="d-flex gap-x-3">
                      <div>
                        <VImg
                          :src="item.image"
                          height="34"
                          width="34"
                        />
                      </div>
                      <div>
                        <div class="text-body-2 text-white">
                          Download on the
                        </div>
                        <div class="text-body-2 font-weight-medium text-white">
                          {{ item.store }}
                        </div>
                      </div>
                    </div>
                  </template>
                </VBtn>
              </div>
            </div>
          </VCol>
        </VRow>
      </VContainer>
    </div>

    <div class="text-white footer-line w-100">
      <VContainer>
        <div class="d-flex justify-space-between flex-wrap gap-y-4">
          <span class="d-flex align-center">
            &copy;

            {{ new Date().getFullYear() }}
            Made With
            <VIcon
              icon="mdi-heart"
              color="error"
              size="1.25rem"
              class="mx-1"
            />
            By <a
              href="https://themeselection.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white ms-1"
            >ThemeSelection</a>
          </span>
          <div class="d-flex gap-x-6">
            <template
              v-for="(icon, index) in ['mdi-github', 'mdi-facebook', 'mdi-twitter', 'mdi-google']"
              :key="index"
            >
              <VIcon :icon="icon" />
            </template>
          </div>
        </div>
      </VContainer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-top {
  background: #2e253e;
  background-image: url("@images/front-pages/backgrounds/footer-bg.png");
  background-size: cover;
  color: #fff;
}

.footer-line {
  background: #211b2c;
}
</style>

<style lang="scss">
.subscribe-form {
  .v-label.v-field-label {
    color: rgba(231, 227, 252, var(--v-high-emphasis-opacity));
  }

  .v-field {
    input.v-field__input::placeholder {
      color: rgba(231, 227, 252, var(--v-high-emphasis-opacity)) !important;
    }
  }
}

.footer {
  @media (min-width: 600px) and (max-width: 960px) {
    .v-container {
      padding-inline: 2rem !important;
    }
  }
}
</style>
