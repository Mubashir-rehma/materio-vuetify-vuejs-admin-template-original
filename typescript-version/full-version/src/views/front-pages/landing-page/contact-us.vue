<script setup lang="ts">
import ConnectImg from '@images/front-pages/landing-page/lets-contact.png'
import sectionTitleIcon from '@images/pages/section-title-icon.png'

const name = ref('')
const email = ref('')
const message = ref('')
</script>

<template>
  <VContainer id="contact-us">
    <!-- 👉 Headers  -->
    <div class="contact-us-section">
      <div class="headers d-flex justify-center flex-column align-center py-12">
        <h6 class="text-base mb-6 font-weight-medium my-auto d-flex gap-x-2">
          <img
            :src="sectionTitleIcon"
            alt="section title icon"
            height="20"
            width="20"
          >
          <span>
            CONTACT US
          </span>
        </h6>
        <h5 class="text-h5 mb-2">
          <span class="font-weight-bold">Let's Work</span> together
        </h5>
        <p>
          Any question or remark? just write us a message
        </p>
      </div>
      <div class="mb-15">
        <VRow class="match-height">
          <VCol
            cols="12"
            md="4"
          >
            <VCard
              flat
              elevation="0"
              color="#9055FD"
              class="text-white"
            >
              <VCardText>
                <div class="text-base mb-1">
                  Let's contact with us
                </div>

                <h5 class="text-h5 text-white">
                  Share your ideas or requirement with our experts.
                </h5>

                <VImg
                  :src="ConnectImg"
                  height="160"
                />

                <div class="text-sm">
                  Looking for more customization, more features, and more anything? Don't worry, We've provide you with an entire team of experienced professionals.
                </div>
              </VCardText>
            </VCard>
          </VCol>
          <VCol
            cols="12"
            md="8"
          >
            <VCard
              flat
              elevation="0"
            >
              <VCardTitle class="text-h5">
                Share your ideas
              </VCardTitle>

              <VCardText>
                <VForm @submit.prevent="() => {}">
                  <VRow>
                    <VCol
                      cols="12"
                      md="6"
                    >
                      <VTextField
                        v-model="name"
                        placeholder="John Doe"
                        label="Full Name"
                      />
                    </VCol>

                    <VCol
                      cols="12"
                      md="6"
                    >
                      <VTextField
                        v-model="email"
                        placeholder="johndoe@gmail.com"
                        label="Email address"
                      />
                    </VCol>

                    <VCol cols="12">
                      <VTextarea
                        v-model="message"
                        placeholder="Type Your message"
                        label="Message"
                      />
                    </VCol>

                    <VCol>
                      <VBtn type="submit">
                        Send Inquiry
                      </VBtn>
                    </VCol>
                  </VRow>
                </VForm>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </div>
    </div>
  </VContainer>
</template>

<style lang="scss" scoped>
.contact-us-section {
  margin-block: 5.25rem;
}
</style>
