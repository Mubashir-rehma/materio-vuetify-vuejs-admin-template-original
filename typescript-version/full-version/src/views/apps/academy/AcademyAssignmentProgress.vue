<script setup lang="ts">
const assignmentData = [
  { title: 'User Experience Design', tasks: 120, progress: 72, color: 'primary' },
  { title: 'Basic fundamentals', tasks: 32, progress: 48, color: 'success' },
  { title: 'React native components', tasks: 182, progress: 15, color: 'error' },
  { title: 'Basic of music theory', tasks: 56, progress: 24, color: 'info' },
]
</script>

<template>
  <VCard>
    <VCardItem title="Assignment progress">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="assignment in assignmentData"
          :key="assignment.title"
        >
          <template #prepend>
            <VProgressCircular
              v-model="assignment.progress"
              :size="54"
              class="me-4"
              :color="assignment.color"
            >
              <span class="text-body-1 text-high-emphasis font-weight-medium">
                {{ assignment.progress }}%
              </span>
            </VProgressCircular>
          </template>
          <VListItemTitle class="font-weight-medium">
            {{ assignment.title }}
          </VListItemTitle>
          <VListItemSubtitle>{{ assignment.tasks }} Tasks</VListItemSubtitle>
          <template #append>
            <VBtn
              variant="tonal"
              color="default"
              class="rounded"
              size="28"
              icon="mdi-chevron-right"
            />
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
