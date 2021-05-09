<template>
  <div class="d-flex align-center">
    <div class="d-flex flex-column mr-2 text-right">
      <span>
        John Doe
      </span>
      <small class="text--secondary">Admin</small>
    </div>
    <v-menu
      offset-y
      left
      nudge-bottom="10"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-badge
          bottom
          color="success"
          overlap
          offset-x="12"
          offset-y="12"
          dot
        >
          <v-avatar
            size="40px"
            v-bind="attrs"
            v-on="on"
          >
            <v-img src="/images/avatars/1.png"></v-img>
          </v-avatar>
        </v-badge>
      </template>
      <v-list>
        <!-- Profile -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon size="22">
              {{ icons.mdiAccountOutline }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Email -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon size="22">
              {{ icons.mdiEmailOutline }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Inbox</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Task -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon size="22">
              {{ icons.mdiCheckboxMarkedOutline }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Task</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Chat -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon size="22">
              {{ icons.mdiChatOutline }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Chat</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <!-- Settings -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon size="22">
              {{ icons.mdiCogOutline }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Pricing -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon size="22">
              {{ icons.mdiCurrencyUsd }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Pricing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- FAQ -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon size="22">
              {{ icons.mdiHelpCircleOutline }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>FAQ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Logout -->
        <v-list-item :to="{ name: 'components-alert' }">
          <v-list-item-icon class="mr-2">
            <v-icon size="22">
              {{ icons.mdiLogoutVariant }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import {
  mdiAccountOutline,
  mdiEmailOutline,
  mdiCheckboxMarkedOutline,
  mdiChatOutline,
  mdiCogOutline,
  mdiCurrencyUsd,
  mdiHelpCircleOutline,
  mdiLogoutVariant,
} from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCheckboxMarkedOutline,
        mdiChatOutline,
        mdiCogOutline,
        mdiCurrencyUsd,
        mdiHelpCircleOutline,
        mdiLogoutVariant,
      },
    }
  },
}
</script>

<style>
</style>
