<script setup lang="ts">
import type { RouteLocationNamedRaw } from 'vue-router'
import type { RouteLocationRaw } from 'vue-router/auto'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

import navImgDark from '@images/front-pages/misc/nav-img-dark.png'
import navImgLight from '@images/front-pages/misc/nav-img-light.png'

const props = defineProps({
  activeId: String,
})

interface navItem {
  name: string
  to: RouteLocationNamedRaw | RouteLocationRaw
}

interface MenuItem {
  listTitle: string
  listIcon: string
  navItems: navItem[]
}

const route = useRoute()

const navImg = useGenerateImageVariant(navImgLight, navImgDark)

const sidebar = ref(false)
const isMenuOpen = ref(false)

const menuItems: MenuItem[] = [
  {
    listTitle: 'Other',
    listIcon: 'mdi-view-grid-outline',
    navItems: [
      { name: 'Pricing', to: { name: 'front-pages-pricing' } },
      { name: 'Payment', to: { name: 'front-pages-payment' } },
      { name: 'Checkout', to: { name: 'front-pages-checkout' } },
      { name: 'Help Center', to: { name: 'front-pages-help-center' } },
    ],
  },
  {
    listTitle: 'Auth Demo',
    listIcon: 'mdi-lock-open-outline',
    navItems: [
      { name: 'Login (Basic)', to: { name: 'pages-authentication-login-v1' } },
      { name: 'Login (Cover)', to: { name: 'pages-authentication-login-v2' } },
      { name: 'Register (Basic)', to: { name: 'pages-authentication-register-v1' } },
      { name: 'Register (Cover)', to: { name: 'pages-authentication-register-v2' } },
      { name: 'Register (Multi-steps)', to: { name: 'pages-authentication-register-multi-steps' } },
      { name: 'Forgot Password (Basic)', to: { name: 'pages-authentication-forgot-password-v1' } },
      { name: 'Forgot Password (Cover)', to: { name: 'pages-authentication-forgot-password-v2' } },
      { name: 'Reset Password (Basic)', to: { name: 'pages-authentication-reset-password-v1' } },
      { name: 'Reset Password (cover  )', to: { name: 'pages-authentication-reset-password-v2' } },
    ],
  },
  {
    listTitle: 'Other',
    listIcon: 'mdi-image-outline',
    navItems: [
      { name: 'Error', to: { name: 'pages-misc-internal-server-error' } },
      { name: 'Under Maintenance', to: { name: 'pages-misc-under-maintenance' } },
      { name: 'Coming Soon', to: { name: 'pages-misc-coming-soon' } },
      { name: 'Not Authorized', to: { path: '/pages/not-authorized' } },
      { name: 'Verify Email (Basic)', to: { name: 'pages-authentication-verify-email-v1' } },
      { name: 'Verify Email (Cover)', to: { name: 'pages-authentication-verify-email-v2' } },
      { name: 'Two Steps (Basic)', to: { name: 'pages-authentication-two-steps-v1' } },
      { name: 'Two Steps (Cover)', to: { name: 'pages-authentication-two-steps-v2' } },
    ],
  },
]

const isCurrentRoute = (to: RouteLocationNamedRaw) => {
  return route.name.startsWith(to.name as string)
}

const isPageActive = computed(() => menuItems.some(item => item.navItems.some(listItem => isCurrentRoute(listItem.to as RouteLocationNamedRaw))))
</script>

<template>
  <!-- 👉 Navigation drawer for mobile devices  -->
  <VNavigationDrawer
    v-model="sidebar"
    disable-resize-watcher
  >
    <!-- Nav items -->
    <div>
      <div class="d-flex flex-column gap-y-4 pa-4">
        <RouterLink
          v-for="(item, index) in ['Home', 'Features', 'Team', 'FAQ', 'Contact us']"
          :key="index"
          :to="{ name: 'front-pages-landing-page', hash: `#${item.toLowerCase().replace(' ', '-')}` }"
          class="font-weight-medium"
          :class="[props.activeId?.toLocaleLowerCase().replace('-', ' ') === item.toLocaleLowerCase() ? 'active-link' : 'text-high-emphasis']"
        >
          {{ item }}
        </RouterLink>

        <div
          class="text-high-emphasis font-weight-medium cursor-pointer"
          :class="isPageActive ? 'active-link' : 'text-high-emphasis'"
        >
          <div
            :class="isMenuOpen ? 'mb-6' : ''"
            @click="isMenuOpen = !isMenuOpen"
          >
            Pages <VIcon :icon="isMenuOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
          </div>

          <div
            v-for="(item, index) in menuItems"
            :key="index"
            :class="isMenuOpen ? 'd-block' : 'd-none'"
          >
            <div class="d-flex align-center gap-x-3 mb-4">
              <VAvatar
                variant="tonal"
                color="primary"
                rounded
                :icon="item.listIcon"
              />
              <div class="text-body-1 text-high-emphasis font-weight-medium">
                {{ item.listTitle }}
              </div>
            </div>

            <ul class="mb-6">
              <li
                v-for="listItem in item.navItems"
                :key="listItem.name"
                style="list-style: none;"
                class="text-body-2 mb-4"
              >
                <RouterLink
                  :to="listItem.to as RouteLocationRaw"
                  target="_blank"
                  class="nav-link"
                  :class="isCurrentRoute(listItem.to as RouteLocationNamedRaw) ? 'active-link' : 'text-high-emphasis'"
                >
                  <VIcon
                    icon="mdi-circle-outline"
                    :size="10"
                    class="me-2"
                  />
                  <span>{{ listItem.name }}</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <RouterLink
          to="/"
          target="_blank"
          class="text-body-1 font-weight-medium text-high-emphasis"
        >
          Admin
        </RouterLink>
      </div>
    </div>

    <!-- Navigation drawer close icon -->
    <VIcon
      id="navigation-drawer-close-btn"
      icon="mdi-close"
      size="20"
      @click="sidebar = !sidebar"
    />
  </VNavigationDrawer>

  <!-- 👉 Navbar for desktop devices  -->
  <div class="front-page-navbar elevation-3 rounded-lg">
    <VAppBar
      :color="$vuetify.theme.current.dark ? 'rgba(var(--v-theme-background))' : '#fff'"
      class="rounded-b-lg"
    >
      <!-- toggle icon for mobile device -->
      <VAppBarNavIcon
        :class="$vuetify.display.mdAndUp ? 'd-none' : 'd-inline-block'"
        class="ms-0"
        color="high-emphasis"
        @click="sidebar = !sidebar"
      />

      <!-- Title and Landing page sections -->
      <div class="d-flex align-center">
        <VAppBarTitle class="me-6">
          <RouterLink
            to="/"
            class="d-flex gap-x-4"
            :class="$vuetify.display.mdAndUp ? 'd-none' : 'd-block'"
          >
            <div class="d-flex gap-x-3 align-center">
              <VNodeRenderer :nodes="themeConfig.app.logo" />
              <h6
                class="text-h6 text-capitalize text-truncate"
                :class="$vuetify.display.smAndUp ? 'd-block' : 'd-none'"
              >
                {{ themeConfig.app.title }}
              </h6>
            </div>
          </RouterLink>
        </VAppBarTitle>

        <!-- landing page sections -->
        <div
          :class="$vuetify.display.mdAndUp ? 'd-flex' : 'd-none'"
          class="text-base align-center"
        >
          <RouterLink
            v-for="(item, index) in ['Home', 'Features', 'Team', 'FAQ', 'Contact us']"
            :key="index"
            :to="{ name: 'front-pages-landing-page', hash: `#${item.toLowerCase().replace(' ', '-')}` }"
            class="font-weight-medium text-high-emphasis py-2 px-2 px-lg-4"
            :class="[props.activeId?.toLocaleLowerCase().replace('-', ' ') === item.toLocaleLowerCase() ? 'active-link' : 'text-high-emphasis']"
          >
            {{ item }}
          </RouterLink>

          <!-- Pages Menu -->
          <span
            class="text-high-emphasis font-weight-medium cursor-pointer px-2 px-lg-4 py-2"
            :class="isPageActive ? 'active-link' : 'text-high-emphasis'"
          >
            Pages <VIcon icon="mdi-chevron-down" />
            <VMenu
              open-on-hover
              activator="parent"
              location="bottom center"
              offset="20"
            >
              <VCard style="min-inline-size: 960px;">
                <VCardText class="pa-8">
                  <div class="d-flex gap-x-12">
                    <div
                      v-for="(item, index) in menuItems"
                      :key="index"
                    >
                      <div class="d-flex align-center gap-x-3 mb-6">
                        <VAvatar
                          variant="tonal"
                          color="primary"
                          rounded
                          :icon="item.listIcon"
                        />
                        <div class="text-body-1 text-high-emphasis font-weight-medium">
                          {{ item.listTitle }}
                        </div>
                      </div>
                      <ul>
                        <li
                          v-for="listItem in item.navItems"
                          :key="listItem.name"
                          style="list-style: none;"
                          class="text-body-2 mb-4"
                        >
                          <RouterLink
                            :to="listItem.to as RouteLocationRaw"
                            target="_blank"
                            class="nav-link"
                            :class="isCurrentRoute(listItem.to as RouteLocationNamedRaw) ? 'active-link' : 'text-high-emphasis'"
                          >
                            <VIcon
                              icon="mdi-circle-outline"
                              :size="10"
                              class="me-2"
                            />
                            <span>{{ listItem.name }}</span>
                          </RouterLink>
                        </li>
                      </ul>
                    </div>

                    <img
                      :src="navImg"
                      alt="Navigation Image"
                      class="d-inline-block rounded-lg"
                      style="border: 10px solid rgb(var(--v-theme-background));"
                      width="330"
                      height="330"
                    >
                  </div>
                </VCardText>
              </VCard>
            </VMenu>
          </span>

          <RouterLink
            to="/"
            target="_blank"
            class="text-high-emphasis font-weight-medium px-2 px-lg-4 py-2"
          >
            Admin
          </RouterLink>
        </div>
      </div>

      <VSpacer />

      <div class="d-flex gap-x-4">
        <NavbarThemeSwitcher />

        <VBtn
          v-if="$vuetify.display.lgAndUp"
          prepend-icon="mdi-cart-plus"
          variant="elevated"
          color="primary"
        >
          Purchase Now
        </VBtn>

        <VBtn
          v-else
          variant="elevated"
          color="primary"
        >
          <VIcon icon="mdi-cart-plus" />
        </VBtn>
      </div>
    </VAppBar>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1920px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(1440px - 32px);
    }
  }
}

@media (min-width: 1280px) and (max-width: 1919px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(1200px - 32px);
    }
  }
}

@media (min-width: 960px) and (max-width: 1279px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(900px - 32px);
    }
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(100% - 64px);
    }
  }
}

@media (max-width: 600px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(100% - 32px);
    }
  }
}

.nav-item-img {
  border: 10px solid rgb(var(--v-theme-background));
  border-radius: 10px;
}

.active-link {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>

<style lang="scss">
@use "@layouts/styles/mixins" as layoutMixins;

.front-page-navbar {
  .v-toolbar__content {
    padding-inline: 1.5rem !important;
  }

  .v-toolbar {
    inset-inline: 0 !important;
    margin-inline: auto !important;
  }

}

.nav-link {
  &:hover {
    color: rgb(var(--v-theme-primary)) !important;
  }
}

#navigation-drawer-close-btn {
  position: absolute;
  cursor: pointer;
  inset-block-start: 0.5rem;
  inset-inline-end: 1rem;
}
</style>
