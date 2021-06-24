<template>
  <div class="user-tab-connection">
    <!-- connected accounts -->
    <v-card class="mb-7">
      <v-card-title>
        Connected Accounts
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pb-2">
        <p class="mb-1">
          Display content from your connected accounts on your site
        </p>
        <v-list
          dense
          class="py-0"
        >
          <v-list-item
            v-for="account in connectedAccounts"
            :key="account.title"
            class="px-0"
          >
            <v-img
              max-width="35"
              contain
              class="mr-3"
              :src="`/images/icons/${account.img}`"
            ></v-img>

            <div>
              <h4 class="font-weight-medium">
                {{ account.title }}
              </h4>
              <p class="mb-0">
                {{ account.text }}
              </p>
            </div>

            <v-spacer></v-spacer>

            <v-switch v-model="account.connected"></v-switch>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- social accounts -->
    <v-card>
      <v-card-title>
        Social Accounts
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <p class="mb-3">
          Display content from social accounts on your site
        </p>
        <v-list
          dense
          class="py-0"
        >
          <v-list-item
            v-for="(account,index) in socialAccounts"
            :key="account.title"
            :class="`px-0 ${index > 0 ?'mt-6':''}`"
          >
            <v-img
              max-width="35"
              height="35"
              contain
              class="mr-3"
              :src="`/images/icons/${account.img}`"
            ></v-img>

            <div>
              <h4 class="font-weight-medium">
                {{ account.title }}
              </h4>
              <a
                v-if="account.connected"
                :href="account.link"
                class="text-decoration-none mb-0"
              >
                {{ account.link }}
              </a>
              <span v-else>Not connected</span>
            </div>

            <v-spacer></v-spacer>

            <v-btn
              outlined
              min-width="38"
              class="px-0"
            >
              <v-icon size="20">
                {{ account.connected ? icons.mdiClose:icons.mdiLinkVariant }}
              </v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mdiClose, mdiLinkVariant } from '@mdi/js'

export default {
  setup() {
    const connectedAccounts = [
      {
        img: 'google.png',
        title: 'Google',
        text: 'Calendar and contacts',
        connected: true,
      },
      {
        img: 'slack.png',
        title: 'Slack',
        text: 'Communication',
        connected: false,
      },
      {
        img: 'github.png',
        title: 'Github',
        text: 'Manage your Git repositories',
        connected: true,
      },
      {
        img: 'mailchimp.png',
        title: 'Mailchimp',
        text: 'Email marketing service',
        connected: false,
      },
      {
        img: 'asana.png',
        title: 'Asana',
        text: 'Communication',
        connected: false,
      },
    ]

    const socialAccounts = [
      {
        img: 'facebook.png',
        title: 'Facebook',
        connected: false,
      },
      {
        img: 'twitter.png',
        title: 'Twitter',
        link: 'www.twitter.com/pixinvent',
        connected: true,
      },
      {
        img: 'linkedin.png',
        title: 'Linkedin',
        link: 'www.linkedin.com.pixinvent',
        connected: true,
      },
      {
        img: 'dribbble.png',
        title: 'Dribbble',
        connected: false,
      },
      {
        img: 'behance.png',
        title: 'Behance',
        connected: false,
      },
    ]

    return {
      connectedAccounts,
      socialAccounts,
      icons: {
        mdiClose, mdiLinkVariant,
      },
    }
  },
}
</script>
