<script setup lang="ts">
import avatar1Src from '@/assets/images/avatars/avatar-1.png'
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
  >
    <VAvatar>
      <VImg :src="avatar1Src" />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <VBadge
              dot
              location="bottom right"
              offset-x="3"
              offset-y="3"
              color="success"
            >
              <VListItemAvatar>
                <VAvatar>
                  <VImg :src="avatar1Src" />
                </VAvatar>
              </VListItemAvatar>
            </VBadge>
            <VListItemHeader class="ms-4">
              <VListItemTitle>John Doe</VListItemTitle>
              <VListItemSubtitle>Admin</VListItemSubtitle>
            </VListItemHeader>
          </VListItem>
          <VDivider />

          <!-- 👉 Profile -->
          <VListItem :to="{ name: 'user-view' }">
            <VListItemIcon
              class="me-2"
              icon="mdi-account-outline"
            />
            <VListItemHeader>
              <VListItemTitle>Profile</VListItemTitle>
            </VListItemHeader>
          </VListItem>

          <!-- 👉 Settings -->
          <VListItem :to="{ name: 'pages-account-settings-tab', params: { tab: 'account' } }">
            <VListItemIcon
              class="me-2"
              icon="mdi-cog-outline"
            />
            <VListItemHeader>
              <VListItemTitle>Settings</VListItemTitle>
            </VListItemHeader>
          </VListItem>

          <!-- 👉 Pricing -->
          <VListItem :to="{ name: 'pages-pricing' }">
            <VListItemIcon
              class="me-2"
              icon="mdi-currency-usd"
            />
            <VListItemHeader>
              <VListItemTitle>Pricing</VListItemTitle>
            </VListItemHeader>
          </VListItem>

          <!-- 👉 FAQ -->
          <VListItem :to="{ name: 'pages-faq' }">
            <VListItemIcon
              class="me-2"
              icon="mdi-help-circle-outline"
            />
            <VListItemHeader>
              <VListItemTitle>FAQ</VListItemTitle>
            </VListItemHeader>
          </VListItem>

          <!-- Divider -->
          <VDivider />

          <!-- 👉 Logout -->
          <VListItem>
            <VListItemIcon
              class="me-2"
              icon="mdi-logout"
            />
            <VListItemHeader>
              <VListItemTitle>Logout</VListItemTitle>
            </VListItemHeader>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
