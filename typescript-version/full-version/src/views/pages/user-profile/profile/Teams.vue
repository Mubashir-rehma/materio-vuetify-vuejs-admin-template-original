<script lang="ts" setup>
import type { ProfileTeamsTech } from '@/@fake-db/types'

interface Props {
  teamsData: ProfileTeamsTech[]
}

const props = defineProps<Props>()

const moreList = [
  { title: 'Share connections', value: 'Share connections' },
  { title: 'Suggest edits', value: 'Suggest edits' },
  { title: 'Report Bug', value: 'Report Bug' },
]
</script>

<template>
  <VCard title="Teams">
    <template #append>
      <div class="me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="data in props.teamsData"
          :key="data.title"
        >
          <template #prepend>
            <VAvatar
              size="38"
              :image="data.avatar"
            />
          </template>

          <VListItemTitle class="font-weight-medium">
            <span class="text-sm">
              {{ data.title }}
            </span>
          </VListItemTitle>
          <VListItemSubtitle>
            <span class="text-xs">
              {{ data.members }} Members
            </span>
          </VListItemSubtitle>

          <template #append>
            <VChip
              :color="data.ChipColor"
              density="compact"
              class="font-weight-medium"
            >
              <span class="text-xs">
                {{ data.chipText }}
              </span>
            </VChip>
          </template>
        </VListItem>

        <VListItem>
          <VListItemTitle>
            <VBtn
              block
              variant="text"
            >
              View all teams
            </VBtn>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 14px;
}
</style>
