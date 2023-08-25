<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import type { CourseDetails } from '@/plugins/fake-api/handlers/apps/academy/type'
import 'video.js/dist/video-js.css'

const courseDetails = ref<CourseDetails>()

const fetchCourseDetails = async () => {
  const { data, error } = await useApi<any>('/apps/academy/course-details')

  if (error.value)
    console.log(error.value)
  else
    courseDetails.value = data.value
}

fetchCourseDetails()
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="8"
    >
      <VCard>
        <VCardItem title="UI/UX Basic Fundamentals">
          <template #subtitle>
            <div class="text-body-1">
              Prof. <span class="font-weight-medium text-high-emphasis">{{ courseDetails?.title }}</span>
            </div>
          </template>
          <template #append>
            <div class="d-flex gap-2 align-center">
              <VChip
                variant="tonal"
                color="error"
                density="comfortable"
              >
                UI/UX
              </VChip>
              <IconBtn>
                <VIcon icon="mdi-share-variant-outline" />
              </IconBtn>
              <IconBtn>
                <VIcon icon="mdi-bookmark-outline" />
              </IconBtn>
            </div>
          </template>
        </VCardItem>
        <VCardText>
          <VCard
            flat
            border
          >
            <div class="pa-2">
              <VideoPlayer
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                controls
                plays-inline
                :height="$vuetify.display.mdAndUp ? 440 : 250"
                class="w-100 rounded"
              />
            </div>
            <VCardText>
              <h6 class="text-h6 mb-1">
                About this course
              </h6>
              <p class="text-body-1">
                {{ courseDetails?.about }}
              </p>
              <VDivider class="my-6" />

              <h6 class="text-h6 mb-3">
                By the numbers
              </h6>
              <div class="d-flex gap-x-12 gap-y-5 flex-wrap">
                <div>
                  <VList class="card-list">
                    <VListItem>
                      <template #prepend>
                        <VIcon icon="mdi-check" />
                      </template>
                      <VListItemTitle>Skill Level: {{ courseDetails?.skillLevel }}</VListItemTitle>
                    </VListItem>
                    <VListItem>
                      <template #prepend>
                        <VIcon icon="mdi-account-outline" />
                      </template>
                      <VListItemTitle>Students: {{ courseDetails?.totalStudents }}</VListItemTitle>
                    </VListItem>
                    <VListItem>
                      <template #prepend>
                        <VIcon icon="mdi-web" />
                      </template>
                      <VListItemTitle>Languages: {{ courseDetails?.language }}</VListItemTitle>
                    </VListItem>
                    <VListItem>
                      <template #prepend>
                        <VIcon icon="mdi-closed-caption-outline" />
                      </template>
                      <VListItemTitle>Captions: {{ courseDetails?.isCaptions }}</VListItemTitle>
                    </VListItem>
                  </VList>
                </div>

                <div>
                  <VList class="card-list">
                    <VListItem>
                      <template #prepend>
                        <VIcon icon="mdi-pencil-outline" />
                      </template>
                      <VListItemTitle>Lectures: {{ courseDetails?.totalLectures }}</VListItemTitle>
                    </VListItem>
                    <VListItem>
                      <template #prepend>
                        <VIcon icon="mdi-clock-outline" />
                      </template>
                      <VListItemTitle>Video: {{ courseDetails?.length }}</VListItemTitle>
                    </VListItem>
                  </VList>
                </div>
              </div>
              <VDivider class="my-6" />
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div v-html="courseDetails?.description" />

              <VDivider class="my-6" />

              <h6 class="text-h6 mb-2">
                Instructor
              </h6>
              <div class="d-flex align-center">
                <VAvatar
                  :image="courseDetails?.instructorAvatar"
                  size="34"
                  class="me-3"
                />
                <div>
                  <div class="font-weight-medium text-high-emphasis">
                    {{ courseDetails?.instructor }}
                  </div>
                  <div class="text-xs">
                    {{ courseDetails?.instructorPosition }}
                  </div>
                </div>
              </div>
            </VCardText>
          </VCard>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <div class="course-content">
        <VExpansionPanels variant="accordion">
          <VExpansionPanel
            v-for="(section, index) in courseDetails?.content"
            :key="index"
            collapse-icon="mdi-chevron-down"
            :expand-icon="$vuetify.locale.isRtl ? 'mdi-chevron-left' : 'mdi-chevron-right'"
          >
            <template #title>
              <div>
                <h6 class="text-h6">
                  {{ section.title }}
                </h6>
                <br>
                <div>
                  {{ section.status }} | {{ section.time }}
                </div>
              </div>
            </template>
            <template #text>
              <VList class="card-list">
                <VListItem
                  v-for="(topic, id) in section.topics"
                  :key="id"
                  class="py-4"
                >
                  <template #prepend>
                    <VCheckbox
                      class="me-3"
                      :model-value="topic.isCompleted"
                    />
                  </template>
                  <VListItemTitle class="text-high-emphasis font-weight-medium">
                    {{ topic.title }}
                  </VListItemTitle>
                  <VListItemSubtitle>{{ topic.time }}</VListItemSubtitle>
                </VListItem>
              </VList>
            </template>
          </VExpansionPanel>
        </VExpansionPanels>
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.course-content {
  position: sticky;
  inset-block-end: 0;
  inset-block-start: 4rem;
}
</style>
