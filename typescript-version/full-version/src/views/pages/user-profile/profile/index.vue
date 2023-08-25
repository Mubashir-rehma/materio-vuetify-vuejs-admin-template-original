<script setup lang="ts">
import About from './About.vue'
import ActivityTimeline from './ActivityTimeline.vue'
import Connection from './Connection.vue'
import ProjectList from './ProjectList.vue'
import Teams from './Teams.vue'
import type { ProfileTab } from '@/plugins/fake-api/handlers/pages/profile/type'

const router = useRoute('pages-user-profile-tab')
const profileTabData = ref<ProfileTab>()

const fetchAboutData = async () => {
  if (router.params.tab === 'profile') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, error } = await useApi<any>(createUrl('/pages/profile', {
      tab: router.params.tab,
    }))

    if (error.value)
      console.error(error.value)
    else
      profileTabData.value = data.value
  }
}

watch(router, fetchAboutData, { immediate: true })
</script>

<template>
  <VRow v-if="profileTabData">
    <VCol
      md="4"
      cols="12"
    >
      <About :data="profileTabData" />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <VRow>
        <VCol cols="12">
          <ActivityTimeline />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <Connection :connections-data="profileTabData.connections" />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <Teams :teams-data="profileTabData.teamsTech" />
        </VCol>

        <VCol cols="12">
          <ProjectList />
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>
