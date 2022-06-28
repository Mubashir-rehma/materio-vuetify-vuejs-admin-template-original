<script setup lang="ts">
import asanaLogo from '@/assets/images/icons/brands/asana.png'
import behanceLogo from '@/assets/images/icons/brands/behance.png'
import dribbbleLogo from '@/assets/images/icons/brands/dribbble.png'
import facebookLogo from '@/assets/images/icons/brands/facebook.png'
import githubLogo from '@/assets/images/icons/brands/github.png'
import googleLogo from '@/assets/images/icons/brands/google.png'
import instagramLogo from '@/assets/images/icons/brands/instagram.png'
import mailchimpLogo from '@/assets/images/icons/brands/mailchimp.png'
import slackLogo from '@/assets/images/icons/brands/slack.png'
import twitterLogo from '@/assets/images/icons/brands/twitter.png'

const connectedAccounts = ref([
  {
    logo: googleLogo,
    name: 'Google',
    subtitle: 'Calendar and contacts',
    connected: true,
  },
  {
    logo: slackLogo,
    name: 'Slack',
    subtitle: 'Communication',
    connected: false,
  },
  {
    logo: githubLogo,
    name: 'GitHub',
    subtitle: 'Manage your Git repositories',
    connected: true,
  },
  {
    logo: mailchimpLogo,
    name: 'MailChimp',
    subtitle: 'Email marketing service',
    connected: true,
  },
  {
    logo: asanaLogo,
    name: 'Asana',
    subtitle: 'Task management',
    connected: false,
  },

])
const socialAccounts = ref([
  {
    logo: facebookLogo,
    name: 'Facebook',
    connected: false,
  },
  {
    logo: twitterLogo,
    name: 'Twitter',
    links: { username: '@ThemeSelection', link: 'https://twitter.com/Theme_Selection' },
    connected: true,
  },
  {
    logo: instagramLogo,
    name: 'Instagram',
    links: { username: '@ThemeSelection', link: 'https://www.instagram.com/themeselection/' },
    connected: true,
  },
  {
    logo: dribbbleLogo,
    name: 'Dribbble',
    connected: false,

  },
  {
    logo: behanceLogo,
    name: 'Behance',
    connected: false,
  },
])
</script>

<template>
  <v-row>
    <!-- 👉 Connected Accounts -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card
        title="Connected Accounts"
        subtitle="Display content from your connected accounts on your site"
      >
        <v-list lines="two">
          <v-list-item
            v-for="item in connectedAccounts"
            :key="item.logo"
          >
            <v-list-item-avatar start>
              <v-img
                :src="item.logo"
                height="30"
              />
            </v-list-item-avatar>

            <v-list-item-header>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item-header>

            <v-list-item-action>
              <v-switch
                v-model="item.connected"
                density="compact"
              />
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>

    <!-- 👉 Social Accounts -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card
        title="Social Accounts"
        subtitle="Display content from social accounts on your site"
      >
        <v-list lines="two">
          <v-list-item
            v-for="item in socialAccounts"
            :key="item.logo"
          >
            <v-list-item-avatar start>
              <v-img
                :src="item.logo"
                height="30"
              />
            </v-list-item-avatar>

            <v-list-item-header>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle
                v-if="item.links?.link"
                :href="item.links?.link"
                tag="a"
              >
                {{ item.links?.username }}
              </v-list-item-subtitle>

              <v-list-item-subtitle v-else>
                Not Connected
              </v-list-item-subtitle>
            </v-list-item-header>

            <v-list-item-action>
              <v-btn
                variant="tonal"
                rounded="lg"
                size="small"
                :color="item.connected ? 'error' : 'secondary'"
                :icon="item.connected ? 'mdi-delete-outline' : 'mdi-link-variant' "
              />
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
