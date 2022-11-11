<script lang="ts" setup>
import navItems from '@/navigation/horizontal'
import { themeConfig } from '@themeConfig'

// Composable
import { useSkins } from '@core/composable/useSkins'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { HorizontalNavLayout } from '@layouts'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

const { appRouteTransition } = useThemeConfig()
const { layoutAttrs, injectSkinClasses } = useSkins()

// ℹ️ This will inject classes in body tag for accurate styling
injectSkinClasses()

const shortcuts = [
  {
    icon: 'mdi-calendar',
    title: 'Calendar',
    subtitle: 'Appointments',
    to: { name: 'apps-calendar' },
  },
  {
    icon: 'mdi-file-document-outline',
    title: 'Invoice App',
    subtitle: 'Manage Accounts',
    to: { name: 'apps-invoice-list' },
  },
  {
    icon: 'mdi-account-outline',
    title: 'Users',
    subtitle: 'Manage Users',
    to: { name: 'apps-user-list' },
  },
  {
    icon: 'mdi-view-dashboard-outline',
    title: 'Dashboard',
    subtitle: 'Dashboard Analytics',
    to: { name: 'dashboards-analytics' },
  },
  {
    icon: 'mdi-cog-outline',
    title: 'Settings',
    subtitle: 'Account Settings',
    to: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
  },
  {
    icon: 'mdi-help-circle-outline',
    title: 'Help Center',
    subtitle: 'FAQs & Articles',
    to: { name: 'pages-help-center' },
  },
]
</script>

<template>
  <HorizontalNavLayout
    :nav-items="navItems"
    v-bind="layoutAttrs"
  >
    <!-- 👉 navbar -->
    <template #navbar>
      <RouterLink
        to="/"
        class="d-flex align-start gap-x-3"
      >
        <VNodeRenderer :nodes="themeConfig.app.logo" />

        <h1 class="font-weight-semibold leading-normal text-xl text-uppercase">
          {{ themeConfig.app.title }}
        </h1>
      </RouterLink>
      <VSpacer />
      <VBtn
        icon
        variant="text"
        color="default"
        size="small"
      >
        <VIcon
          icon="mdi-magnify"
          size="24"
        />
      </VBtn>
      <NavBarI18n />
      <NavbarThemeSwitcher />
      <AppNavbarShortcuts :shortcuts="shortcuts" />
      <NavBarNotifications class="me-2" />
      <UserProfile />
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component, route }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component
          :is="Component"
          :key="route.path"
        />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </HorizontalNavLayout>
</template>
