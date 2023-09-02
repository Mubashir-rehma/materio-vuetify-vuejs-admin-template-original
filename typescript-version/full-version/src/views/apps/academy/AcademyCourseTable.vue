<script setup lang="ts">
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import type { Course } from '@/plugins/fake-api/handlers/apps/academy/type'
import type { Options } from '@core/types'

const courseData = ref<Course[]>([])
const totalCourse = ref(0)
const searchQuery = ref('')

const options = ref<Options>({
  page: 1,
  itemsPerPage: 5,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const headers = [
  { title: 'Course Name', key: 'courseName' },
  { title: 'Time', key: 'time', sortable: false },
  { title: 'Progress', key: 'progress' },
  { title: 'Status', key: 'status', sortable: false },
]

const fetchCourses = async () => {
  const data = await $api('/apps/academy/courses', {
    query: {
      q: searchQuery.value,
      ...options.value,
      ...(options.value.sortBy
     && {
       sortBy: (options.value.sortBy)[0]?.key,
       orderBy: (options.value.sortBy)[0]?.order,
     }
      ),
    },
  }).catch(err => console.log(err))

  courseData.value = data.courses
  totalCourse.value = data.total
}

watch([searchQuery, options], fetchCourses, { deep: true, immediate: true })
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
      v-model:items-per-page="options.itemsPerPage"
      v-model:page="options.page"
      :items-per-page-options="[{ title: '5', value: 5 }, { title: '10', value: 10 }, { title: '25', value: 25 }]"
      :headers="headers"
      :items="courseData"
      :items-length="totalCourse"
      show-select
      class="text-no-wrap"
      @update:options="options = $event"
    >
      <template #item.courseName="{ item }">
        <div class="d-flex align-center gap-x-4 py-2">
          <VAvatar
            variant="tonal"
            rounded
            :color="item.raw.color"
          >
            <VIcon :icon="item.raw.logo" />
          </VAvatar>
          <div>
            <span class="text-sm font-weight-medium">
              <RouterLink :to="{ name: 'apps-academy-course-details' }">{{ item.raw.courseTitle }}</RouterLink>
            </span>
            <div>
              <VAvatar
                size="22"
                :image="item.raw.image"
              />
              <span class="text-sm ms-2">
                {{ item.raw.user }}
              </span>
            </div>
          </div>
        </div>
      </template>

      <template #item.time="{ item }">
        <span class="text-sm text-high-emphasis font-weight-medium">
          {{ item.raw.time }}
        </span>
      </template>

      <template #item.progress="{ item }">
        <div
          class="d-flex align-center gap-x-4 mb-2"
          style="inline-size: 15.625rem;"
        >
          <div class="text-no-wrap">
            {{ Math.floor((item.raw.completedTasks / item.raw.totalTasks) * 100) }}%
          </div>
          <div class="w-100">
            <VProgressLinear
              color="primary"
              height="8"
              :model-value="Math.floor((item.raw.completedTasks / item.raw.totalTasks) * 100)"
              rounded
            />
          </div>
          <div class="text-body-1">
            {{ item.raw.completedTasks }}/{{ item.raw.totalTasks }}
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
              {{ item.raw.userCount }}
            </span>
          </div>
          <div>
            <VIcon
              icon="mdi-laptop"
              color="info"
              size="24"
              class="me-2"
            />
            <span class="text-body-1">{{ item.raw.note }}</span>
          </div>
          <div>
            <VIcon
              icon="mdi-video-outline"
              color="error"
              size="24"
              class="me-2"
            />
            <span class="text-body-1">{{ item.raw.view }}</span>
          </div>
        </div>
      </template>
    </VDataTableServer>
  </VCard>
</template>
