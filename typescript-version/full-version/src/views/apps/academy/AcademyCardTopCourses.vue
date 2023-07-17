<script setup lang="ts">
const coursesData = [
  { title: 'Videography Basic Design Course', views: '1.2k', icon: 'mdi-video-outline', color: 'primary' },
  { title: 'Basic Front-end Development Course', views: '834', icon: 'mdi-code-tags', color: 'info' },
  { title: 'Basic Fundamentals of Photography', views: '3.7k', icon: 'mdi-image-outline', color: 'success' },
  { title: 'Advance Dribble Base Visual Design', views: '2.5k', icon: 'mdi-palette', color: 'warning' },
  { title: 'Your First Singing Lesson', views: '948', icon: 'mdi-microphone', color: 'error' },
]
</script>

<template>
  <VCard>
    <VCardItem title="Top Courses">
      <template #append>
        <MoreBtn />
      </template>
    </VCardItem>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="(course, index) in coursesData"
          :key="index"
        >
          <template #prepend>
            <VAvatar
              rounded
              variant="tonal"
              :color="course.color"
            >
              <VIcon
                :icon="course.icon"
                size="24"
              />
            </VAvatar>
          </template>

          <VListItemTitle class="me-4">
            <span class="font-weight-medium">
              {{ course.title }}
            </span>
          </VListItemTitle>

          <template #append>
            <VChip
              variant="tonal"
              color="secondary"
              density="comfortable"
            >
              {{ course.views }} Views
            </VChip>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
