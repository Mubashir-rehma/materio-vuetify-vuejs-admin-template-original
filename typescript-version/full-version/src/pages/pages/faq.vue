<script setup lang="ts">
import type { FaqCategory } from '@/@fake-db/types'
import axios from '@axios'
import AppSearchHeader from '@core/components/AppSearchHeader.vue'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

const faqSearchQuery = ref('')

const faqs = ref<FaqCategory[]>([])

const fetchFaqs = () => {
  return axios.get('/pages/faqs', {
    params: {
      q: faqSearchQuery.value,
    },
  }).then(response => {
    faqs.value = response.data
  }).catch(error => {
    console.error(error)
  })
}

const activeTab = ref('Payment')
const activeQuestion = ref(0)
watch(faqSearchQuery, fetchFaqs, { immediate: true })

const contactUs = [
  {
    icon: 'mdi-phone',
    via: '+ (810) 2548 2568',
    tagLine: 'We are always happy to help!',
  },
  {
    icon: 'mdi-email-outline',
    via: 'hello@help.com',
    tagLine: 'Best way to get answer faster!',
  },
]

const sitingGirlWithLaptop = useGenerateImageVariant('@/assets/images/illustrations/sitting-girl-with-laptop.png')
</script>

<template>
  <section>
    <!-- 👉 Search -->
    <AppSearchHeader
      v-model="faqSearchQuery"
      title="Hello, how can we help?"
      subtitle="or choose a category to quickly find the help you need"
    />

    <!-- 👉 Faq sections and questions -->
    <v-row>
      <v-col
        v-show="faqs.length"
        sd
        cols="12"
        sm="4"
        lg="3"
        class="position-relative"
      >
        <!-- 👉 Tabs -->
        <v-tabs
          v-model="activeTab"
          direction="vertical"
          class="v-tabs-pill"
          grow
        >
          <v-tab
            v-for="faq in faqs"
            :key="faq.faqTitle"
            :value="faq.faqTitle"
          >
            <v-icon
              :icon="faq.faqIcon"
              :size="20"
              start
            />
            {{ faq.faqTitle }}
          </v-tab>
        </v-tabs>
        <v-img
          :width="200"
          :src="sitingGirlWithLaptop"
          class="d-none d-sm-block mt-10"
        />
      </v-col>

      <v-col
        cols="12"
        sm="8"
        lg="9"
      >
        <!-- 👉 Windows -->
        <v-window v-model="activeTab">
          <v-window-item
            v-for="faq in faqs"
            :key="faq.faqTitle"
            :value="faq.faqTitle"
          >
            <div class="d-flex align-center mb-6">
              <v-avatar
                rounded
                class="v-avatar-light-bg text-primary me-3"
                size="large"
              >
                <v-icon
                  :size="36"
                  :icon="faq.faqIcon"
                />
              </v-avatar>

              <div>
                <h6 class="text-h6">
                  {{ faq.faqTitle }}
                </h6>
                <span class="text-body-2">{{ faq.faqSubtitle }}</span>
              </div>
            </div>

            <v-expansion-panels
              v-model="activeQuestion"
              multiple
            >
              <v-expansion-panel
                v-for="(item, index) in faq.faqs"
                :key="item.question"
                :title="`Q${index + 1}:  ${item.question}`"
                :text="item.answer"
              />
            </v-expansion-panels>
          </v-window-item>
        </v-window>
      </v-col>

      <v-col
        v-show="!faqs.length"
        cols="12"
        :class="!faqs.length ? 'd-flex justify-center align-center' : ''"
      >
        <v-icon
          icon="mdi-help-circle-outline"
          start
          size="20"
        />
        <span class="text-body-1 font-weight-medium">
          No Results Found!!
        </span>
      </v-col>
    </v-row>

    <!-- 👉 You still have a question? -->
    <div class="text-center pt-15">
      <v-chip
        label
        color="primary"
        size="small"
      >
        QUESTION?
      </v-chip>

      <h6 class="text-h6">
        You still have a question?
      </h6>
      <p>
        If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!
      </p>

      <!-- contacts -->
      <v-row class="mt-4">
        <v-col
          v-for="contact in contactUs"
          :key="contact.icon"
          sm="6"
          cols="12"
        >
          <v-card
            flat
            color="secondary"
            variant="tonal"
          >
            <v-card-text>
              <v-avatar
                rounded
                class="v-avatar-light-bg text-primary me-3"
              >
                <v-icon :icon="contact.icon" />
              </v-avatar>
            </v-card-text>
            <v-card-text>
              <h6 class="text-h6 mb-2">
                {{ contact.via }}
              </h6>
              <span>{{ contact.tagLine }}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
