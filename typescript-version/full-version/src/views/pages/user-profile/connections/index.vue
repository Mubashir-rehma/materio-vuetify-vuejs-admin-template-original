<script setup lang="ts">
import type { ConnectionsTab } from '@db/pages/profile/types'

const router = useRoute('pages-user-profile-tab')
const connectionData = ref<ConnectionsTab[]>([])

const fetchProjectData = async () => {
  if (router.params.tab === 'connections') {
    const data = await $api('/pages/profile', {
      query: {
        tab: router.params.tab,
      },
    }).catch(err => console.log(err))

    connectionData.value = data
  }
}

watch(router, fetchProjectData, { immediate: true })

const moreBtnList = [
  { title: 'Share connection', value: 'Share connection' },
  { title: 'Block connection', value: 'Block connection' },
  { type: 'divider', class: 'my-2' },
  { title: 'Delete', value: 'Delete', class: 'text-error' },
]
</script>

<template>
  <VRow>
    <VCol
      v-for="data in connectionData"
      :key="data.name"
      sm="6"
      lg="4"
      cols="12"
    >
      <VCard>
        <div class="vertical-more">
          <MoreBtn
            item-props
            :menu-list="moreBtnList"
          />
        </div>

        <VCardItem>
          <VCardTitle class="d-flex flex-column align-center justify-center">
            <VAvatar
              size="100"
              :image="data.avatar"
            />

            <p class="mt-4 mb-0">
              {{ data.name }}
            </p>
            <span class="text-body-1">{{ data.designation }}</span>

            <div class="d-flex align-center flex-wrap gap-2 mt-2">
              <VChip
                v-for="chip in data.chips"
                :key="chip.title"
                :color="chip.color"
                size="small"
              >
                {{ chip.title }}
              </VChip>
            </div>
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <div class="d-flex justify-space-around">
            <div class="text-center">
              <h6 class="text-h6">
                {{ data.projects }}
              </h6>
              <span class="text-body-1">Projects</span>
            </div>
            <div class="text-center">
              <h6 class="text-h6">
                {{ data.tasks }}
              </h6>
              <span class="text-body-1">Tasks</span>
            </div>
            <div class="text-center">
              <h6 class="text-h6">
                {{ data.connections }}
              </h6>
              <span class="text-body-1">Connections</span>
            </div>
          </div>

          <div class="d-flex justify-center gap-4 mt-4">
            <VBtn
              :prepend-icon="data.isConnected ? 'mdi-account-check-outline' : 'mdi-account-plus-outline'"
              :variant="data.isConnected ? 'elevated' : 'tonal'"
            >
              {{ data.isConnected ? 'connected' : 'connect' }}
            </VBtn>

            <IconBtn
              variant="tonal"
              class="rounded"
            >
              <VIcon icon="mdi-email-outline" />
            </IconBtn>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.vertical-more {
  position: absolute;
  inset-block-start: 1rem;
  inset-inline-end: 0.5rem;
}
</style>
