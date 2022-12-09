<script setup>
const props = defineProps({
  connectionsData: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <VCard title="Connection">
    <template #append>
      <div class="me-n2">
        <VBtn
          icon
          variant="text"
          color="default"
          size="x-small"
        >
          <VIcon
            size="24"
            icon="mdi-dots-vertical"
          />

          <VMenu activator="parent">
            <VList density="compact">
              <VListItem
                v-for="(item, index) in ['Share connections', 'Suggest edits', 'Report Bug']"
                :key="index"
                :value="index"
              >
                <VListItemTitle>{{ item }}</VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </VBtn>
      </div>
    </template>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="data in props.connectionsData"
          :key="data.name"
        >
          <template #prepend>
            <VAvatar
              size="38"
              :image="data.avatar"
            />
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ data.name }}
          </VListItemTitle>
          <VListItemSubtitle>{{ data.connections }} Connections</VListItemSubtitle>

          <template #append>
            <VBtn
              icon
              size="34"
              class="rounded"
              :variant="data.isFriend ? 'elevated' : 'outlined' "
            >
              <VIcon
                size="24"
                icon="mdi-account-outline"
              />
            </VBtn>
          </template>
        </VListItem>

        <VListItem>
          <VListItemTitle>
            <VBtn
              block
              variant="text"
            >
              View all connections
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
