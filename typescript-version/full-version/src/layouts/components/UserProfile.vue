<script setup lang="ts">
import { initialAbility } from '@/plugins/casl/ability'
import { useAppAbility } from '@/plugins/casl/useAppAbility'

const router = useRouter()
const ability = useAppAbility()
const userData = JSON.parse(localStorage.getItem('userData') || 'null')

const logout = () => {
  // Remove "userData" from localStorage
  localStorage.removeItem('userData')

  // Remove "accessToken" from localStorage
  localStorage.removeItem('accessToken')

  // Redirect to login page
  router.push('/login')
    .then(() => {
      // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page
      // Remove "userAbilities" from localStorage
      localStorage.removeItem('userAbilities')

      // Reset ability to initial ability
      ability.update(initialAbility)
    })
}
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
  >
    <VAvatar
      class="cursor-pointer v-avatar-light-bg text-primary"
      color="primary"
    >
      <VImg
        v-if="userData.avatar"
        :src="userData.avatar"
      />
      <VIcon
        v-else
        icon="mdi-account-outline"
      />

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
                <VAvatar
                  color="primary"
                  class="v-avatar-light-bg text-primary"
                >
                  <VImg
                    v-if="userData.avatar"
                    :src="userData.avatar"
                  />
                  <VIcon
                    v-else
                    icon="mdi-account-outline"
                  />
                </VAvatar>
              </VListItemAvatar>
            </VBadge>
            <VListItemHeader class="ms-4">
              <VListItemTitle>{{ userData.fullName }}</VListItemTitle>
              <VListItemSubtitle>{{ userData.role }}</VListItemSubtitle>
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
          <VListItem @click="logout">
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
