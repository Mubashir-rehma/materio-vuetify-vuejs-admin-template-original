<script setup lang="ts">
import asana from '@images/icons/brands/asana.png'
import behance from '@images/icons/brands/behance.png'
import dribbble from '@images/icons/brands/dribbble.png'
import facebook from '@images/icons/brands/facebook1.png'
import github from '@images/icons/brands/github.png'
import google from '@images/icons/brands/google.png'
import intagram from '@images/icons/brands/instagram.png'
import mailchimp from '@images/icons/brands/mailchimp.png'
import slack from '@images/icons/brands/slack.png'
import twitter from '@images/icons/brands/twitter.png'

const connectedAccounts = ref([
  {
    logo: google,
    name: 'Google',
    subtitle: 'Calendar and contacts',
    connected: true,
  },
  {
    logo: slack,
    name: 'Slack',
    subtitle: 'Communication',
    connected: false,
  },
  {
    logo: github,
    name: 'GitHub',
    subtitle: 'Manage your Git repositories',
    connected: true,
  },
  {
    logo: mailchimp,
    name: 'MailChimp',
    subtitle: 'Email marketing service',
    connected: true,
  },
  {
    logo: asana,
    name: 'Asana',
    subtitle: 'Task management',
    connected: false,
  },

])

const socialAccounts = ref([
  {
    logo: facebook,
    name: 'Facebook',
    connected: false,
  },
  {
    logo: twitter,
    name: 'Twitter',
    links: { username: '@ThemeSelection', link: 'https://twitter.com/Theme_Selection' },
    connected: true,
  },
  {
    logo: intagram,
    name: 'Instagram',
    links: { username: '@ThemeSelection', link: 'https://www.instagram.com/themeselection/' },
    connected: true,
  },
  {
    logo: dribbble,
    name: 'Dribbble',
    connected: false,

  },
  {
    logo: behance,
    name: 'Behance',
    connected: false,
  },
])
</script>

<template>
  <VCard>
    <VRow>
      <!-- 👉 Connected Accounts -->
      <VCol
        cols="12"
        md="6"
      >
        <VCard
          flat
          title="Connected Accounts"
        >
          <template #subtitle>
            <span class="text-base">Display content from your connected accounts on your site</span>
          </template>
          <VCardText>
            <VList class="card-list">
              <VListItem
                v-for="item in connectedAccounts"
                :key="item.logo"
              >
                <template #prepend>
                  <VAvatar
                    start
                    :image="item.logo"
                    size="30"
                  />
                </template>
                <VListItemTitle>
                  <span class="font-weight-medium">{{ item.name }}</span>
                </VListItemTitle>

                <VListItemSubtitle>
                  {{ item.subtitle }}
                </VListItemSubtitle>

                <template #append>
                  <VListItemAction>
                    <VSwitch
                      v-model="item.connected"
                      density="compact"
                      class="me-1"
                    />
                  </VListItemAction>
                </template>
              </VListItem>
            </VList>
          </VCardText>
        </VCard>
      </VCol>

      <!-- 👉 Social Accounts -->
      <VCol
        cols="12"
        md="6"
      >
        <VCard
          flat
          title="Social Accounts"
        >
          <template #subtitle>
            <span class="text-base">Display content from social accounts on your site</span>
          </template>

          <VCardText>
            <VList class="card-list">
              <VListItem
                v-for="item in socialAccounts"
                :key="item.logo"
              >
                <template #prepend>
                  <VAvatar
                    start
                    :image="item.logo"
                    size="36"
                  />
                </template>

                <VListItemTitle>
                  <span class="font-weight-medium">{{ item.name }}</span>
                </VListItemTitle>

                <VListItemSubtitle
                  v-if="item.links?.link"
                  tag="a"
                  :href="item.links?.link"
                  style="opacity: 1;"
                  class="text-primary"
                >
                  {{ item.links?.username }}
                </VListItemSubtitle>

                <VListItemSubtitle
                  v-else
                  class="text-xs"
                >
                  Not Connected
                </VListItemSubtitle>

                <template #append>
                  <VListItemAction>
                    <VBtn
                      icon
                      variant="outlined"
                      size="small"
                      :color="item.connected ? 'error' : 'secondary'"
                      class="rounded"
                    >
                      <VIcon
                        size="24"
                        :icon="item.connected ? 'mdi-delete-outline' : 'mdi-link-variant' "
                      />
                    </VBtn>
                  </VListItemAction>
                </template>
              </VListItem>
            </VList>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.625rem;
}
</style>
