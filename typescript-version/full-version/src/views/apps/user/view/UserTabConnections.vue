<script lang="ts" setup>
const connectedAccounts = ref([
  {
    img: dynamicImgImport('@/assets/images/icons/brands/google.png'),
    title: 'Google',
    text: 'Calendar and contacts',
    connected: true,
  },
  {
    img: dynamicImgImport('@/assets/images/icons/brands/slack.png'),
    title: 'Slack',
    text: 'Communication',
    connected: false,
  },
  {
    img: dynamicImgImport('@/assets/images/icons/brands/github.png'),
    title: 'Github',
    text: 'Manage your Git repositories',
    connected: true,
  },
  {
    img: dynamicImgImport('@/assets/images/icons/brands/mailchimp.png'),
    title: 'Mailchimp',
    text: 'Email marketing service',
    connected: false,
  },
  {
    img: dynamicImgImport('@/assets/images/icons/brands/asana.png'),
    title: 'Asana',
    text: 'Communication',
    connected: false,
  },
])

const socialAccounts = ref([
  {
    img: dynamicImgImport('@/assets/images/icons/brands/facebook.png'),
    title: 'Facebook',
    connected: false,
  },
  {
    img: dynamicImgImport('@/assets/images/icons/brands/twitter.png'),
    title: 'Twitter',
    link: 'https://twitter.com/theme_selection',
    username: '@Theme_Selection',
    connected: true,
  },
  {
    img: dynamicImgImport('@/assets/images/icons/brands/linkedin.png'),
    title: 'Linkedin',
    link: 'https://www.linkedin.com/company/themeselection',
    username: '@ThemeSelection',
    connected: true,
  },
  {
    img: dynamicImgImport('@/assets/images/icons/brands/dribbble.png'),
    title: 'Dribbble',
    connected: false,
  },
  {
    img: dynamicImgImport('@/assets/images/icons/brands/behance.png'),
    title: 'Behance',
    connected: false,
  },
])
</script>

<template>
  <VRow>
    <!-- 👉 connected accounts -->
    <VCol cols="12">
      <VCard
        title="Connected Accounts"
        subtitle="Display content from your connected accounts on your site"
      >
        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="account in connectedAccounts"
              :key="account.title"
              :title="account.title"
              :subtitle="account.text"
            >
              <template #prepend>
                <VAvatar
                  start
                  :size="35"
                  :image="account.img"
                />
              </template>

              <template #append>
                <VSwitch
                  v-model="account.connected"
                  density="compact"
                  class="me-1"
                />
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 social accounts -->
    <VCol cols="12">
      <VCard
        title="Social Accounts"
        subtitle="Display content from social accounts on your site"
      >
        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="(account) in socialAccounts"
              :key="account.title"
              :title="account.title"
            >
              <template #prepend>
                <VAvatar
                  start
                  size="35"
                  rounded="0"
                  :image="account.img"
                />
              </template>

              <VListItemSubtitle v-if="account.connected">
                <a
                  :href="account.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-caption"
                >
                  {{ account.username }}
                </a>
              </VListItemSubtitle>

              <VListItemSubtitle
                v-else
                class="text-caption"
              >
                Not connected
              </VListItemSubtitle>

              <template #append>
                <VBtn
                  icon
                  color="secondary"
                  variant="tonal"
                  size="small"
                  class="rounded"
                >
                  <VIcon
                    size="20"
                    :icon="account.connected ? 'mdi-close' : 'mdi-link-variant'"
                  />
                </VBtn>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
