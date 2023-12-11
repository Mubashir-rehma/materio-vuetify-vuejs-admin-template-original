<script setup lang="ts">
import appleImg from '@images/front-pages/landing-page/apple-icon.png'
import googlePlayImg from '@images/front-pages/landing-page/google-play-icon.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

interface Menu {
  name: string
  to: any
  isNew?: boolean
}

const menus: Menu[] = [
  { name: 'Pricing', to: { name: 'front-pages-pricing' } },
  { name: 'Payment', to: { name: 'front-pages-payment' }, isNew: true },
  { name: 'Maintenance', to: { name: 'pages-misc-under-maintenance' } },
  { name: 'Comming Soon', to: { name: 'pages-misc-coming-soon' } },
]
</script>

<template>
  <div class="footer">
    <div class="footer-top pt-15">
      <VContainer>
        <div class="d-flex flex-lg-row flex-column gap-16">
          <!-- 👉 Footer  -->
          <div class="mb-4">
            <div class="d-flex align-center gap-x-3 mb-6">
              <VNodeRenderer :nodes="themeConfig.app.logo" />
              <h5 class="text-h5 text-white">
                MATERIO
              </h5>
            </div>
            <div class="text-body-1 text-white mb-6">
              Most Powerful & Comprehensive 🤩 Vuejs Admin Template with Elegant Material Design & Unique Layouts.
            </div>
            <VForm class="subscribe-form d-flex align-center gap-4">
              <VTextField
                label="Subscribe to newsletter"
                placeholder="john@email.com"
                theme="dark"
              />
              <VBtn>Subscribe</VBtn>
            </VForm>
          </div>

          <!-- 👉 Pages -->
          <div class="d-flex justify-space-between  flex-grow-1 gap-x-16 gap-y-8 flex-md-row flex-column">
            <div>
              <div class="font-weight-medium mb-6">
                Pages
              </div>
              <ul style="list-style: none;">
                <li
                  v-for="(item, index) in menus"
                  :key="index"
                  class="mb-4"
                >
                  <RouterLink
                    class="text-white-variant text-no-wrap"
                    :to="item.to"
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
            <!-- 👉 Products  -->
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
                    class="text-white-variant text-no-wrap"
                  >
                    {{ item }}
                  </RouterLink>
                </li>
              </ul>
            </div>
            <!-- 👉 Download App -->
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
          </div>
        </div>
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
              icon="ri-heart-fill"
              color="error"
              size="1.25rem"
              class="mx-1"
            />
            By <a
              href="https://themeselection.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white ms-1 font-weight-medium"
            >ThemeSelection</a>
          </span>
          <div class="d-flex gap-x-2">
            <template
              v-for="(item, index) in [
                { title: 'github', icon: 'ri-github-fill', href: 'https://github.com/themeselection' },
                { title: 'facebook', icon: 'ri-facebook-circle-line', href: 'https://www.facebook.com/ThemeSelections/' },
                { title: 'twitter', icon: 'ri-twitter-line', href: 'https://twitter.com/Theme_Selection' },
                { title: 'instagram', icon: 'ri-instagram-line', href: 'https://www.instagram.com/themeselection/' },
              ]"
              :key="index"
            >
              <IconBtn
                density="comfortable"
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VIcon :icon="item.icon" />
              </IconBtn>
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
  color: #fff;
}

.footer {
  @media (min-width: 600px) and (max-width: 960px) {
    .v-container {
      padding-inline: 2rem !important;
    }
  }
}
</style>
