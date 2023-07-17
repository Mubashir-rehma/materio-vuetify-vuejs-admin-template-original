<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import AcademyMyCourses from '@/views/apps/academy/AcademyMyCourses.vue'
import academyCourseIllustration1 from '@images/pages/academy-course-illustration1.png'
import academyCourseIllustration2 from '@images/pages/academy-course-illustration2.png'
import boyIllustration from '@images/pages/boy-illustration.png'
import forgotPasswordIllustration from '@images/pages/forgot-password-illustration.png'
import 'video.js/dist/video-js.css'
</script>

<template>
  <div>
    <VCard class="mb-6">
      <VCardText class="py-12 position-relative">
        <div
          class="d-flex flex-column gap-y-4 mx-auto"
          :class="$vuetify.display.mdAndUp ? 'w-50' : 'w-100'"
        >
          <h5
            class="text-h5 text-center text-wrap mx-auto"
            :class="$vuetify.display.mdAndUp ? 'w-75' : 'w-100'"
          >
            Education, talents, and career
            opportunities. <span class="text-primary"> All in one place.</span>
          </h5>
          <p class="text-center text-wrap text-body-1 mx-auto">
            Grow your skill with the most reliable online courses and certifications in marketing, information technology, programming, and data science.
          </p>
          <div class="d-flex justify-center align-center gap-x-4">
            <VTextField
              placeholder="Find your course"
              style="max-width: 400px;"
              density="compact"
            />
            <VBtn
              color="primary"
              icon="mdi-magnify"
              class="rounded"
            />
          </div>
        </div>
        <img
          :src="academyCourseIllustration1"
          class="illustration1 d-none d-md-block"
          height="180"
        >
        <img
          :src="academyCourseIllustration2"
          class="illustration2 d-none d-md-block"
          height="100"
        >
      </VCardText>
    </VCard>

    <AcademyMyCourses />

    <div class="mb-6">
      <VRow>
        <VCol
          cols="12"
          md="6"
        >
          <VCard
            variant="tonal"
            flat
            color="primary"
          >
            <VCardText>
              <div class="d-flex gap-4 flex-wrap">
                <div>
                  <h6 class="text-h6 text-primary mb-1">
                    Earn a Certificate
                  </h6>
                  <p class="text-body-1 text-high-emphasis text-wrap w-75">
                    Get the right professional certificate program for you.
                  </p>
                  <VBtn>View Programs</VBtn>
                </div>

                <VAlert
                  variant="tonal"
                  color="primary"
                  min-width="180"
                  max-height="127"
                >
                  <VImg
                    :src="boyIllustration"
                    height="119"
                  />
                </VAlert>
              </div>
            </VCardText>
          </VCard>
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VCard
            variant="tonal"
            flat
            color="error"
          >
            <VCardText>
              <div class="d-flex gap-4 flex-wrap">
                <div>
                  <h6 class="text-h6 text-error mb-1">
                    Best Rated Courses
                  </h6>
                  <p class="text-body-1 text-high-emphasis text-wrap w-75">
                    Enroll now in the most popular and best rated courses.
                  </p>
                  <VBtn color="error">
                    View Courses
                  </VBtn>
                </div>
                <VAlert
                  variant="tonal"
                  color="error"
                  min-width="180"
                  max-height="127"
                >
                  <VImg
                    :src="forgotPasswordIllustration"
                    height="119"
                  />
                </VAlert>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </div>

    <VCard>
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            md="4"
          >
            <div class="d-flex flex-column align-center gap-y-4 h-100 justify-center">
              <VAvatar
                variant="tonal"
                size="52"
                rounded
                color="primary"
              >
                <VIcon
                  icon="mdi-wallet-giftcard"
                  size="36"
                />
              </VAvatar>
              <h5 class="text-h5 font-weight-medium">
                Today's Free Courses
              </h5>
              <p class="text-body-1 text-center">
                We offers 284 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today!
              </p>
              <VBtn>Get Premium Courses</VBtn>
            </div>
          </VCol>
          <VCol
            cols="12"
            md="4"
            sm="6"
          >
            <VCard
              flat
              border
            >
              <VideoPlayer
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                controls
                plays-inline
                :height="$vuetify.display.mdAndUp ? 200 : 150"
                class="w-100 rounded"
              />
              <VCardText>
                <h6 class="text-h6 mb-1">
                  Your First Singing Lesson
                </h6>
                <p class="text-body-1 mb-0">
                  In the same way as any other artistic domain, singing lends itself perfectly to self-teaching.
                </p>
              </VCardText>
            </VCard>
          </VCol>
          <VCol
            cols="12"
            md="4"
            sm="6"
          >
            <VCard
              flat
              border
            >
              <VideoPlayer
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                controls
                plays-inline
                :height="$vuetify.display.mdAndUp ? 200 : 150"
                class="w-100 rounded"
              />
              <VCardText>
                <h6 class="text-h6 mb-1">
                  Guitar for Beginners
                </h6>
                <p class="text-body-1 mb-0">
                  The Fender Acoustic Guitar is best choice for beginners and professionals.
                </p>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
.illustration1 {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 0;
}

.illustration2 {
  position: absolute;
  inset-block-start: 2rem;
  inset-inline-start: 2.5rem;
}
</style>
