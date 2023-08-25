<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const router = useRouter()
const ability = useAbility()

// TODO: Get type from backend
const userData = useCookie<any>('userData')

const logout = async () => {
  // Remove "userData" from cookie
  useCookie('userData').value = null

  // Remove "accessToken" from localStorage
  useCookie('accessToken').value = null

  // Redirect to login page
  router.push('/login')
    .then(() => {
      // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page
      // Remove "userAbilities" from localStorage
      useCookie('userAbilities').value = null

      // Reset ability to initial ability
      ability.update([])
    })
}

const userProfileList = [
  { type: 'divider' },
  { type: 'navItem', icon: 'mdi-account-outline', title: 'Profile', to: { name: 'apps-user-view-id', params: { id: 21 } } },
  { type: 'navItem', icon: 'mdi-cog-outline', title: 'settings', to: { name: 'pages-account-settings-tab', params: { tab: 'account' } } },
  { type: 'navItem', icon: 'mdi-credit-card-outline', title: 'Billing', to: { name: 'pages-account-settings-tab', params: { tab: 'billing-plans' } }, badgeProps: { color: 'light-error', content: '3', textColor: 'error' } },
  { type: 'divider' },
  { type: 'navItem', icon: 'mdi-currency-usd', title: 'Pricing', to: { name: 'pages-pricing' } },
  { type: 'navItem', icon: 'mdi-help-circle-outline', title: 'FAQ', to: { name: 'pages-faq' } },
  { type: 'divider' },
  { type: 'navItem', icon: 'mdi-logout', title: 'Logout', onClick: logout },
]
</script>

<template>
  <VBadge
    dot
    bordered
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
  >
    <VAvatar
      class="cursor-pointer"
      :color="!(userData && userData.avatar) ? 'primary' : undefined"
      :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
    >
      <VImg
        v-if="userData && userData.avatar"
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
        location="bottom end"
        offset="14px"
      >
        <VList>
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    :color="!(userData && userData.avatar) ? 'primary' : undefined"
                    :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
                  >
                    <VImg
                      v-if="userData && userData.avatar"
                      :src="userData.avatar"
                    />
                    <VIcon
                      v-else
                      icon="mdi-account-outline"
                    />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-medium">
              {{ userData.fullName || userData.username }}
            </VListItemTitle>
            <VListItemSubtitle>{{ userData.role }}</VListItemSubtitle>
          </VListItem>

          <PerfectScrollbar :options="{ wheelPropagation: false }">
            <template
              v-for="item in userProfileList"
              :key="item.title"
            >
              <VListItem
                v-if="item.type === 'navItem'"
                :to="item.to"
                @click="item.onClick && item.onClick()"
              >
                <template #prepend>
                  <VIcon
                    class="me-2"
                    :icon="item.icon"
                    size="22"
                  />
                </template>

                <VListItemTitle>{{ item.title }}</VListItemTitle>

                <template
                  v-if="item.badgeProps"
                  #append
                >
                  <VBadge v-bind="item.badgeProps" />
                </template>
              </VListItem>

              <VDivider
                v-else
                class="my-2"
              />
            </template>
          </PerfectScrollbar>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
