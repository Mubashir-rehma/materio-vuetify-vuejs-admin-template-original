<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  { title: 'Account', icon: 'mdi-account-outline', tab: 'account' },
  { title: 'Security', icon: 'mdi-lock-open-outline', tab: 'security' },
  { title: 'Billing & Plans', icon: 'mdi-bookmark-outline', tab: 'billing-plans' },
  { title: 'Notifications', icon: 'mdi-bell-outline', tab: 'notification' },
  { title: 'Connections', icon: 'mdi-link-variant', tab: 'connection' },
]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      show-arrows
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'pages-account-settings-tab', params: { tab: item.tab } }"
      >
        <VIcon
          size="20"
          start
        >
          {{ item.icon }}
        </VIcon>
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow v-model="activeTab">
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettingsAccount />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security">
        <AccountSettingsSecurity />
      </VWindowItem>

      <!-- Billing -->
      <VWindowItem value="billing-plans">
        <AccountSettingsBillingAndPlans />
      </VWindowItem>

      <!-- Notification -->
      <VWindowItem value="notification">
        <AccountSettingsNotification />
      </VWindowItem>

      <!-- Connections -->
      <VWindowItem value="connection">
        <AccountSettingsConnections />
      </VWindowItem>
    </VWindow>
  </div>
</template>Ō

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
