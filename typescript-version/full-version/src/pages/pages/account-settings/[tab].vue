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
    <v-tabs
      v-model="activeTab"
      show-arrows
    >
      <v-tab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'pages-account-settings-tab', params: { tab: item.tab } }"
      >
        <v-icon
          size="20"
          start
        >
          {{ item.icon }}
        </v-icon>
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-window v-model="activeTab">
      <!-- Account -->
      <v-window-item value="account">
        <AccountSettingsAccount />
      </v-window-item>

      <!-- Security -->
      <v-window-item value="security">
        <AccountSettingsSecurity />
      </v-window-item>

      <!-- Billing -->
      <v-window-item value="billing-plans">
        <AccountSettingsBillingAndPlans />
      </v-window-item>

      <!-- Notification -->
      <v-window-item value="notification">
        <AccountSettingsNotification />
      </v-window-item>

      <!-- Connections -->
      <v-window-item value="connection">
        <AccountSettingsConnections />
      </v-window-item>
    </v-window>
  </div>
</template>Ō

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
