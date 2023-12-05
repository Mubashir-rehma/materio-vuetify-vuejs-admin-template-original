<script setup lang="ts">
import sittingGirlWithLaptop from '@images/front-pages/landing-page/sitting-girl-with-laptop.png'
import sectionTitleIcon from '@images/pages/section-title-icon.png'

const panels = ref([1])

const faqData = [
  {
    question: 'Do you charge for each upgrade?',
    answer: 'Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie.',
  },
  {
    question: 'What is regular license?',
    answer: 'Regular license can be used for end products that do not charge users for access or service(access is free and there will be no monthly subscription fee). Single regular license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate license for each client. The same rule applies if you want to use the same end product on multiple domains(unique setup). For more info on regular license you can check official description.',
  },
  {
    question: 'What is extended license?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid quaerat possimus maxime! Mollitia reprehenderit neque repellat deleniti delectus architecto dolorum maxime, blanditiis earum ea, incidunt quam possimus cumque.',
  },
  {
    question: 'Which license is applicable for SASS application?',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi molestias exercitationem ab cum nemo facere voluptates veritatis quia, eveniet veniam at et repudiandae mollitia ipsam quasi labore enim architecto non!',
  },
]
</script>

<template>
  <VContainer id="faq">
    <!-- 👉 Header  -->
    <div class="faq-section">
      <div class="headers d-flex justify-center flex-column align-center my-16">
        <h6 class="text-base mb-6 font-weight-medium my-auto d-flex gap-x-2">
          <img
            :src="sectionTitleIcon"
            alt="section title icon"
            height="25"
            width="25"
          >
          <span>
            FAQ
          </span>
        </h6>
        <h5 class="text-h5 mb-2">
          Frequently Asked <span class="font-weight-bold">questions</span>
        </h5>
        <p class="text-body-1 text-medium-emphasis font-weight-medium">
          Browse through these FAQs to find answers to commonly asked questions.
        </p>
      </div>

      <div
        class="d-flex align-center justify-space-between flex-wrap flex-md-nowrap"
        style="gap: 6.25rem"
      >
        <VImg
          :src="sittingGirlWithLaptop"
          height="340"
          width="320"
        />

        <div>
          <VExpansionPanels
            v-model="panels"
            class="py-4"
          >
            <VExpansionPanel
              v-for="faq in faqData"
              :key="faq.question"
            >
              <VExpansionPanelTitle>
                {{ faq.question }}
              </VExpansionPanelTitle>
              <VExpansionPanelText>
                {{ faq.answer }}
              </VExpansionPanelText>
            </VExpansionPanel>
          </VExpansionPanels>
        </div>
      </div>
    </div>
  </VContainer>
</template>

<style lang="scss" scoped>
.faq-section {
  margin-block: 5.25rem;
}
</style>
