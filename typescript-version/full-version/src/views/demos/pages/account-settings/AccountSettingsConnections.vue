<script setup lang="ts">
const connectedAccounts = ref([
  {
    logo: dynamicImgImport('@/assets/images/icons/brands/google.png'),
    name: 'Google',
    subtitle: 'Calendar and contacts',
    connected: true,
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/brands/slack.png'),
    name: 'Slack',
    subtitle: 'Communication',
    connected: false,
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/brands/github.png'),
    name: 'GitHub',
    subtitle: 'Manage your Git repositories',
    connected: true,
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/brands/mailchimp.png'),
    name: 'MailChimp',
    subtitle: 'Email marketing service',
    connected: true,
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/brands/asana.png'),
    name: 'Asana',
    subtitle: 'Task management',
    connected: false,
  },

])
const socialAccounts = ref([
  {
    logo: dynamicImgImport('@/assets/images/icons/brands/facebook.png'),
    name: 'Facebook',
    connected: false,
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/brands/twitter.png'),
    name: 'Twitter',
    links: { username: '@ThemeSelection', link: 'https://twitter.com/Theme_Selection' },
    connected: true,
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/brands/instagram.png'),
    name: 'Instagram',
    links: { username: '@ThemeSelection', link: 'https://www.instagram.com/themeselection/' },
    connected: true,
  },
  {
    logo: dynamicImgImport('@/assets/images/icons/brands/dribbble.png'),
    name: 'Dribbble',
    connected: false,

  },
  {
    logo: dynamicImgImport('@/assets/images/icons/brands/behance.png'),
    name: 'Behance',
    connected: false,
  },
])
</script>

<template>
  <VRow>
    <!-- 👉 Connected Accounts -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard
        title="Connected Accounts"
        subtitle="Display content from your connected accounts on your site"
      >
        <VList lines="two">
          <VListItem
            v-for="item in connectedAccounts"
            :key="item.logo"
          >
            <VListItemAvatar start>
              <VImg
                :src="item.logo"
                height="30"
              />
            </VListItemAvatar>

            <VListItemHeader>
              <VListItemTitle>{{ item.name }}</VListItemTitle>
              <VListItemSubtitle>{{ item.subtitle }}</VListItemSubtitle>
            </VListItemHeader>

            <VListItemAction>
              <VSwitch
                v-model="item.connected"
                density="compact"
              />
            </VListItemAction>
          </VListItem>
        </VList>
      </VCard>
    </VCol>

    <!-- 👉 Social Accounts -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard
        title="Social Accounts"
        subtitle="Display content from social accounts on your site"
      >
        <VList lines="two">
          <VListItem
            v-for="item in socialAccounts"
            :key="item.logo"
          >
            <VListItemAvatar start>
              <VImg
                :src="item.logo"
                height="30"
              />
            </VListItemAvatar>

            <VListItemHeader>
              <VListItemTitle>{{ item.name }}</VListItemTitle>
              <VListItemSubtitle
                v-if="item.links?.link"
                :href="item.links?.link"
                tag="a"
              >
                {{ item.links?.username }}
              </VListItemSubtitle>

              <VListItemSubtitle v-else>
                Not Connected
              </VListItemSubtitle>
            </VListItemHeader>

            <VListItemAction>
              <VBtn
                variant="tonal"
                rounded="lg"
                size="small"
                :color="item.connected ? 'error' : 'secondary'"
                :icon="item.connected ? 'mdi-delete-outline' : 'mdi-link-variant' "
              />
            </VListItemAction>
          </VListItem>
        </VList>
      </VCard>
    </VCol>
  </VRow>
</template>
