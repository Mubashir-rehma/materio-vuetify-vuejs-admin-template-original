<script setup lang="ts">
import avatar1Src from '@/assets/images/avatars/avatar-1.png'
</script>

<template>
  <v-badge
    dot
    location="bottom-right"
    offset-x="3"
    offset-y="3"
    color="success"
  >
    <v-avatar>
      <v-img :src="avatar1Src" />

      <!-- SECTION Menu -->
      <v-menu
        activator="parent"
        width="230"
      >
        <v-list>
          <!-- 👉 User Avatar & Name -->
          <v-list-item>
            <v-badge
              dot
              location="bottom-right"
              offset-x="3"
              offset-y="3"
              color="success"
            >
              <v-list-item-avatar>
                <v-avatar>
                  <v-img :src="avatar1Src" />
                </v-avatar>
              </v-list-item-avatar>
            </v-badge>
            <v-list-item-header class="ms-4">
              <v-list-item-title>John Doe</v-list-item-title>
              <v-list-item-subtitle>Admin</v-list-item-subtitle>
            </v-list-item-header>
          </v-list-item>
          <v-divider />

          <!-- 👉 Profile -->
          <v-list-item :to="{ name: 'index' }">
            <v-list-item-icon
              class="me-2"
              icon="mdi-account-outline"
            />
            <v-list-item-header>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-header>
          </v-list-item>

          <!-- 👉 Inbox -->
          <v-list-item :to="{ name: 'index' }">
            <v-list-item-icon
              class="me-2"
              icon="mdi-email-outline"
            />
            <v-list-item-header>
              <v-list-item-title>Inbox</v-list-item-title>
            </v-list-item-header>
          </v-list-item>

          <!-- 👉 Chat -->
          <v-list-item :to="{ name: 'index' }">
            <v-list-item-icon
              class="me-2"
              icon="mdi-chat-outline"
            />
            <v-list-item-header>
              <v-list-item-title>Chat</v-list-item-title>
            </v-list-item-header>
            <v-list-item-action>
              <v-badge
                inline
                content="2"
              />
            </v-list-item-action>
          </v-list-item>

          <v-divider />

          <!-- 👉 Settings -->
          <v-list-item :to="{ name: 'index' }">
            <v-list-item-icon
              class="me-2"
              icon="mdi-cog-outline"
            />
            <v-list-item-header>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-header>
          </v-list-item>

          <!-- 👉 Pricing -->
          <v-list-item :to="{ name: 'index' }">
            <v-list-item-icon
              class="me-2"
              icon="mdi-currency-usd"
            />
            <v-list-item-header>
              <v-list-item-title>Pricing</v-list-item-title>
            </v-list-item-header>
          </v-list-item>

          <!-- 👉 FAQ -->
          <v-list-item :to="{ name: 'index' }">
            <v-list-item-icon
              class="me-2"
              icon="mdi-help-circle-outline"
            />
            <v-list-item-header>
              <v-list-item-title>FAQ</v-list-item-title>
            </v-list-item-header>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- !SECTION -->
    </v-avatar>
  </v-badge>
</template>
