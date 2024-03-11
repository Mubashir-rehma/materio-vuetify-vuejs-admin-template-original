<script setup lang="ts">
interface Props {
  searchQuery: string
}
defineProps<Props>()

// Data table options
const itemsPerPage = ref(6)

const hideCompleted = ref(false)
const label = ref('All Courses')

const { data: coursesData } = await useApi<any>(createUrl('/apps/academy/courses'))

const courses = coursesData.value.totalCourse

const filteredCourses = computed(() => {
  return courses.filter((course: any) => !(hideCompleted.value && (course.totalTasks === course.completedTasks)) && (label.value === 'All Courses' ? true : course.tags.toLowerCase() === label.value))
})

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
      <VDataIterator
        :items="filteredCourses"
        :items-per-page="itemsPerPage"
        :search="searchQuery"
      >
        <!-- 👉 Header -->
        <template #header>
          <div class="d-flex justify-space-between align-center flex-wrap gap-4 mb-6">
            <div>
              <h6 class="text-h6">
                My Courses
              </h6>
              <div class="text-body-1">
                Total 6 course you have purchased
              </div>
            </div>

            <div class="d-flex flex-wrap gap-4">
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
                style="min-inline-size: 200px;"
              />
              <VSwitch
                v-model="hideCompleted"
                label="Hide Completed"
              />
            </div>
          </div>
        </template>

        <!-- 👉 Course List -->
        <template #default="{ items }">
          <div class="mb-6">
            <VRow>
              <template
                v-for="course in items"
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
                        :src="course.raw.tutorImg"
                        class="cursor-pointer"
                        @click="() => $router.push({ name: 'apps-academy-course-details' })"
                      />
                    </div>
                    <VCardText>
                      <div class="d-flex justify-space-between align-center mb-4">
                        <VChip
                          variant="tonal"
                          :color="resolveChipColor(course.raw.tags)"
                          density="comfortable"
                        >
                          {{ course.raw.tags }}
                        </VChip>
                        <div class="d-flex">
                          <span class="text-body-1 align-center">
                            {{ course.raw.rating }}
                          </span>
                          <VIcon
                            icon="mdi-star"
                            color="warning"
                            class="me-2"
                          />
                          <span class="text-body-1">({{ course.raw.ratingCount }})</span>
                        </div>
                      </div>
                      <h6 class="text-h6">
                        <RouterLink
                          :to="{ name: 'apps-academy-course-details' }"
                          class="course-title"
                        >
                          {{ course.raw.courseTitle }}
                        </RouterLink>
                      </h6>
                      <p>
                        {{ course.raw.desc }}
                      </p>
                      <div
                        v-if="course.raw.completedTasks !== course.raw.totalTasks"
                        class="d-flex align-center mb-2"
                      >
                        <VIcon
                          icon="mdi-clock-outline"
                          size="24"
                          class="me-1"
                        />
                        <span class="text-body-1 my-auto"> {{ course.raw.time }}</span>
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
                        :model-value="(course.raw.completedTasks / course.raw.totalTasks) * 100"
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
                          v-if="course.raw.completedTasks !== course.raw.totalTasks"
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
        </template>

        <!-- 👉 Footer -->
        <template #footer="{ pageCount, nextPage, prevPage, setPage }">
          <VPagination
            :length="pageCount"
            @next="nextPage"
            @prev="prevPage"
          >
            <template #item="{ key }">
              <VBtn
                variant="tonal"
                icon
                @click="setPage(Number(key))"
              >
                {{ key }}
              </VBtn>
            </template>
          </VPagination>
        </template>
      </VDataIterator>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.course-title {
  &:not(:hover) {
    color: rgba(var(--v-theme-on-surface), var(--v-text-high-emphasis));
  }
}
</style>
