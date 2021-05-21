<template>
  <v-card>
    <div class="d-flex align-center justify-space-between mb-4">
      <div>
        <v-card-title>
          <span>Finance Summary</span>
        </v-card-title>
        <v-card-subtitle>Check out each Column for more details</v-card-subtitle>
      </div>
      <v-avatar
        color="primary"
        size="48"
        class="v-avatar-light-bg primary--text mr-5"
      >
        <v-icon
          size="30"
          color="primary"
        >
          {{ icons.mdiCurrencyUsd }}
        </v-icon>
      </v-avatar>
    </div>
    <v-card-text class="d-flex align-center mb-3">
      <div class="width-50">
        <span>Annual Companies Taxes</span>
        <h2 class="text-xl font-weight-semibold">
          $1450.35
        </h2>
      </div>
      <div class="width-50">
        <span>Next Tax Review Date</span>
        <h2 class="text-xl font-weight-semibold">
          July 14, 2021
        </h2>
      </div>
    </v-card-text>

    <v-card-text class="d-flex align-center mb-3">
      <div class="width-50">
        <span>Average Product Price</span>
        <h2 class="text-xl font-weight-semibold">
          $85.50
        </h2>
      </div>
      <div class="width-50">
        <span>Satisfaction Rate</span>
        <div class="d-flex align-center">
          <v-progress-linear
            v-model="progress"
            height="6"
          ></v-progress-linear>
          <span class="text-base font-weight-semibold ml-4">{{ progress }}%</span>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <div
        class="v-avatar-group width-50"
        :class="rootThemeClasses"
      >
        <v-avatar size="40">
          <v-img src="/images/avatars/1.png"></v-img>
        </v-avatar>

        <v-avatar size="40">
          <v-img src="/images/avatars/2.png"></v-img>
        </v-avatar>

        <v-avatar size="40">
          <v-img src="/images/avatars/3.png"></v-img>
        </v-avatar>
        <v-avatar size="40">
          <v-img src="/images/avatars/4.png"></v-img>
        </v-avatar>
      </div>

      <v-chip
        small
        color="primary"
        class="v-chip-light-bg primary--text font-weight-semibold"
      >
        5 Days Ago
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mdiCurrencyUsd } from '@mdi/js'
import { ref } from '@vue/composition-api'
import useVuetify from '@core/utils/vuetify'

export default {
  setup() {
    const progress = ref(75)
    const { rootThemeClasses } = useVuetify()

    return {
      progress,
      rootThemeClasses,
      icons: {
        mdiCurrencyUsd,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.width-50 {
  width: 50%;
}
</style>
