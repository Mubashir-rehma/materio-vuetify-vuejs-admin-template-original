<script setup lang="ts">
import type { Course } from '@/plugins/fake-api/handlers/apps/academy/type'
import type { Options } from '@core/types'

interface Props {
  searchQuery: string
}

const props = defineProps<Props>()

const options = ref<Options>({
  page: 1,
  itemsPerPage: 6,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const courseData = ref<Course[]>([])
const totalCourse = ref(0)
const hideCompleted = ref(false)
const label = ref('All Courses')

const fetchCourses = async () => {
  const { data, error } = await useApi<any>(createUrl('/apps/academy/courses', () => ({
    q: props.searchQuery,
    hideCompleted: hideCompleted.value,
    label: label.value,
    ...options.value,
    ...(options.value.sortBy
     && {
       sortBy: (options.value.sortBy)[0]?.key,
       orderBy: (options.value.sortBy)[0]?.order,
     }
    ),
  })))

  if (error.value) {
    console.log(error.value)
  }
  else {
    console.log('data')
    courseData.value = data.value.courses
    totalCourse.value = data.value.total
  }
}

watch([hideCompleted, label], () => {
  options.value.page = 1
})

watch([() => props.searchQuery, options, hideCompleted, label], fetchCourses, { deep: true, immediate: true })

const resolveChipColor = (tags: string) => {
  if (tags === 'Web')
    return 'primary'
  if (tags === 'Art')
    return 'success'
  if (tags === 'UI/UX')
    return 'error'
  if (tags === 'Psychology')
    return 'warning'
  if (tags === 'Design')
    return 'info'
}
</script>

<template>
  <VCard class="mb-6">
    <VCardText>
      <!-- 👉 Header -->
      <div class="d-flex justify-space-between align-center flex-wrap gap-4 mb-6">
        <div>
          <h6 class="text-h6">
            My Courses
          </h6>
          <div class="text-body-1">
            Total 6 course you have purchased
          </div>
        </div>

        <div class="d-flex flex-wrap">
          <VSelect
            v-model="label"
            :items="[
              { title: 'Web', value: 'web' },
              { title: 'Art', value: 'art' },
              { title: 'UI/UX', value: 'ui/ux' },
              { title: 'Psychology', value: 'psychology' },
              { title: 'Design', value: 'design' },
              { title: 'All Courses', value: 'All Courses' },
            ]"
            density="compact"
            style="min-inline-size: 250px;"
            class="me-4"
          />
          <VSwitch
            v-model="hideCompleted"
            label="Hide Completed"
          />
        </div>
      </div>

      <!-- 👉 Course List -->
      <div class="mb-6">
        <VRow>
          <template
            v-for="course in courseData"
            :key="course.id"
          >
            <VCol
              cols="12"
              md="4"
              sm="6"
            >
              <VCard
                flat
                border
              >
                <div class="pa-2">
                  <VImg
                    :src="course.tutorImg"
                    class="cursor-pointer"
                    @click="() => $router.push({ name: 'apps-academy-course-details' })"
                  />
                </div>
                <VCardText>
                  <div class="d-flex justify-space-between align-center mb-4">
                    <VChip
                      variant="tonal"
                      :color="resolveChipColor(course.tags)"
                      density="comfortable"
                    >
                      {{ course.tags }}
                    </VChip>
                    <div class="d-flex">
                      <span class="text-body-1 align-center">
                        {{ course.rating }}
                      </span>
                      <VIcon
                        icon="mdi-star"
                        color="warning"
                        class="me-2"
                      />
                      <span class="text-body-1">({{ course.ratingCount }})</span>
                    </div>
                  </div>

                  <h6 class="text-h6">
                    <RouterLink
                      :to="{ name: 'apps-academy-course-details' }"
                      class="text-high-emphasis"
                    >
                      {{ course.courseTitle }}
                    </RouterLink>
                  </h6>
                  <p>
                    {{ course.desc }}
                  </p>

                  <div
                    v-if="course.completedTasks !== course.totalTasks"
                    class="d-flex align-center mb-2"
                  >
                    <VIcon
                      icon="mdi-clock-outline"
                      size="24"
                      class="me-1"
                    />
                    <span class="text-body-1 my-auto"> {{ course.time }}</span>
                  </div>
                  <div
                    v-else
                    class="mb-2"
                  >
                    <VIcon
                      icon="mdi-check"
                      color="success"
                      class="me-1"
                    />
                    <span class="text-success text-body-1">Completed</span>
                  </div>

                  <VProgressLinear
                    :model-value="(course.completedTasks / course.totalTasks) * 100"
                    rounded
                    color="primary"
                    height="8"
                    class="mb-6"
                  />

                  <div class="d-flex flex-wrap gap-4">
                    <VBtn
                      variant="outlined"
                      color="secondary"
                      class="flex-grow-1"
                      :to="{ name: 'apps-academy-course-details' }"
                    >
                      <template #append>
                        <VIcon
                          icon="mdi-refresh"
                          class="flip-in-rtl"
                        />
                      </template>
                      Start Over
                    </VBtn>
                    <VBtn
                      v-if="course.completedTasks !== course.totalTasks"
                      variant="outlined"
                      class="flex-grow-1"
                      :to="{ name: 'apps-academy-course-details' }"
                    >
                      <template #append>
                        <VIcon
                          icon="mdi-arrow-right"
                          class="flip-in-rtl"
                        />
                      </template>
                      Continue
                    </VBtn>
                  </div>
                </VCardText>
              </VCard>
            </VCol>
          </template>
        </VRow>
      </div>
      <VPagination
        v-model="options.page"
        :length="Math.ceil(totalCourse / options.itemsPerPage)"
      />
    </VCardText>
  </VCard>
</template>
