<script setup lang="ts">
import type { Course } from '@db/apps/academy/types'

const searchQuery = ref('')

// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Update data table options
const updateOptions = (options: any) => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  { title: 'Course Name', key: 'courseName' },
  { title: 'Time', key: 'time', sortable: false },
  { title: 'Progress', key: 'progress' },
  { title: 'Status', key: 'status', sortable: false },
]

// Fetch course Data
const { data: courseData } = await useApi<any>(createUrl('/apps/academy/courses', {
  query: {
    q: searchQuery,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const courses = computed((): Course[] => courseData.value.courses)
const totalCourse = computed(() => courseData.value.total)
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex flex-wrap justify-space-between align-center gap-4">
        <h5 class="text-h5 font-weight-medium">
          Courses you are taking
        </h5>
        <VTextField
          v-model="searchQuery"
          placeholder="Search"
          density="comfortable"
          style=" max-inline-size: 200px;min-inline-size: 200px;"
        />
      </div>
    </VCardText>

    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      :items-per-page-options="[
        { value: 5, title: '5' },
        { value: 10, title: '10' },
        { value: 20, title: '20' },
        { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
      ]"
      :headers="headers"
      :items="courses"
      item-value="courseName"
      :items-length="totalCourse"
      show-select
      class="text-no-wrap"
      @update:options="updateOptions"
    >
      <template #item.courseName="{ item }">
        <div class="d-flex align-center gap-x-4 py-2">
          <VAvatar
            variant="tonal"
            rounded
            :color="item.color"
          >
            <VIcon :icon="item.logo" />
          </VAvatar>
          <div>
            <span class="text-sm font-weight-medium">
              <RouterLink :to="{ name: 'apps-academy-course-details' }">{{ item.courseTitle }}</RouterLink>
            </span>
            <div>
              <VAvatar
                size="22"
                :image="item.image"
              />
              <span class="text-sm ms-2">
                {{ item.user }}
              </span>
            </div>
          </div>
        </div>
      </template>

      <template #item.time="{ item }">
        <span class="text-sm text-high-emphasis font-weight-medium">
          {{ item.time }}
        </span>
      </template>

      <template #item.progress="{ item }">
        <div
          class="d-flex align-center gap-x-4 mb-2"
          style="inline-size: 15.625rem;"
        >
          <div class="text-no-wrap">
            {{ Math.floor((item.completedTasks / item.totalTasks) * 100) }}%
          </div>
          <div class="w-100">
            <VProgressLinear
              color="primary"
              height="8"
              :model-value="Math.floor((item.completedTasks / item.totalTasks) * 100)"
              rounded
            />
          </div>
          <div class="text-body-1">
            {{ item.completedTasks }}/{{ item.totalTasks }}
          </div>
        </div>
      </template>

      <template #item.status="{ item }">
        <div class="d-flex justify-space-between gap-x-4">
          <div>
            <VIcon
              icon="mdi-account-outline"
              color="primary"
              size="24"
              class="me-2"
            />
            <span class="text-body-1">
              {{ item.userCount }}
            </span>
          </div>
          <div>
            <VIcon
              icon="mdi-laptop"
              color="info"
              size="24"
              class="me-2"
            />
            <span class="text-body-1">{{ item.note }}</span>
          </div>
          <div>
            <VIcon
              icon="mdi-video-outline"
              color="error"
              size="24"
              class="me-2"
            />
            <span class="text-body-1">{{ item.view }}</span>
          </div>
        </div>
      </template>
    </VDataTableServer>
  </VCard>
</template>
