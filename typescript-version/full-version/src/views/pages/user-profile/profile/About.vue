<script lang="ts" setup>
import type { ProfileTab } from '@/@fake-db/types'

interface Props {
  aboutData: ProfileTab
}
const props = defineProps<Props>()
</script>

<template>
  <VCard class="mb-4">
    <VCardText>
      <p class="text-xs">
        ABOUT
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="data in props.aboutData.about"
          :key="data.property"
        >
          <template #prepend>
            <VIcon
              :icon="data.icon"
              size="24"
              class="me-2"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-semibold me-1">{{ data.property }}:</span>
            <span>{{ data.value }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>

      <p class="text-xs mt-5">
        CONTACTS
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="data in props.aboutData.contacts"
          :key="data.property"
        >
          <template #prepend>
            <VIcon
              :icon="data.icon"
              size="24"
              class="me-2"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-semibold me-1">{{ data.property }}:</span>
            <span>{{ data.value }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>

      <p class="text-xs mt-5">
        TEAMS
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="data in props.aboutData.teams"
          :key="data.property"
        >
          <template #prepend>
            <VIcon
              :icon="data.icon"
              size="24"
              :color="data.color"
              class="me-2"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-semibold me-1">{{ data.property }}:</span>
            <span>{{ data.value }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>

  <VCard>
    <VCardText>
      <p class="text-xs">
        OVERVIEW
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="data in props.aboutData.overview"
          :key="data.property"
        >
          <template #prepend>
            <VIcon
              :icon="data.icon"
              size="24"
              class="me-2"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-semibold me-1">{{ data.property }}:</span>
            <span>{{ data.value }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
