<script setup lang="ts">
import sectionTitleIcon from '@images/pages/section-title-icon.png'
import teamPerson1 from '@images/pages/teamPerson1.png'
import teamPerson2 from '@images/pages/teamPerson2.png'
import teamPerson3 from '@images/pages/teamPerson3.png'
import teamPerson4 from '@images/pages/teamPerson4.png'

const teamData = ref([
  { name: 'Sophie Gilbert', position: 'Project Manager', image: teamPerson1, backgroundColor: 'rgba(144, 85, 253, 0.16)', borderColor: 'rgba(144, 85, 253,0.6)', isHover: false },
  { name: 'Nannie Ford', position: 'Development Lead', image: teamPerson2, backgroundColor: 'rgba(255, 76, 81, 0.16)', borderColor: 'rgba(255, 76, 81,0.6)', isHover: false },
  { name: 'Chris Watkins', position: 'Marketing Manager', image: teamPerson3, backgroundColor: 'rgba(86, 202, 0, 0.16)', borderColor: 'rgba(86, 202, 0,0.6)', isHover: false },
  { name: 'Paul Miles', position: 'UI Designer', image: teamPerson4, backgroundColor: 'rgba(22, 177, 255, 0.16)', borderColor: 'rgba(22, 177, 255,0.6)', isHover: false },
])
</script>

<template>
  <VContainer id="team">
    <div class="our-team">
      <div class="headers d-flex justify-center flex-column align-center">
        <h6 class="text-base mb-6 font-weight-medium my-auto d-flex gap-x-2">
          <img
            :src="sectionTitleIcon"
            alt="section title icon"
            height="20"
            width="20"
          >
          <span>
            OUR GREAT TEAM
          </span>
        </h6>
        <h5 class="text-h5 mb-2">
          <span class="font-weight-bold"> Supported </span> by Real People
        </h5>
        <p>Who is behind these great-looking interfaces?</p>
      </div>

      <div class="d-flex gap-x-6 gap-y-16 flex-wrap justify-center">
        <VCard
          v-for="(data, index) in teamData"
          :key="index"
          flat
          variant="outlined"
          min-width="262"
          class="position-relative overflow-visible mb-4"
          :style="data.isHover ? { border: `1px solid ${data.borderColor}` } : {}"
          @mouseenter="data.isHover = true"
          @mouseleave="data.isHover = false"
        >
          <VImg
            :src="data.image"
            height="240px"
            class="team-image"
          />
          <div :style="{ maxHeight: '185px', minHeight: '185px', backgroundColor: data.backgroundColor }" />
          <VCardText class="text-center">
            <h6 class="text-h6">
              {{ data.name }}
            </h6>

            <span class="text-body-2">{{ data.position }}</span>

            <div class="d-flex gap-x-2 align-center justify-center mt-3">
              <VBtn
                v-for="{ icon, color } in [
                  { icon: 'mdi-facebook', color: 'rgba(59, 89, 152, 1)' },
                  { icon: 'mdi-twitter', color: 'rgba(0, 172, 238, 1)' },
                  { icon: 'mdi-linkedin', color: 'rgba(0, 119, 181, 1)' },
                ]"
                :key="icon"
                icon
                color="none"
                variant="text"
                size="22"
                :ripple="false"
              >
                <VIcon
                  :icon="icon"
                  size="22"
                  :color="color"
                />
              </VBtn>
            </div>
          </VCardText>
        </VCard>
      </div>
    </div>
  </VContainer>
</template>

<style lang="scss" scoped>
.team-image {
  position: absolute;
  inset-block-start: -3.4rem;
  inset-inline: 0;
}

.headers {
  margin-block-end: 7rem;
}

.our-team {
  margin-block: 5.25rem;
}
</style>
