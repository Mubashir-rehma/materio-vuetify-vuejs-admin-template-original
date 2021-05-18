<template>
  <v-card>
    <v-card-title>
      <span>Total Earning</span>
      <v-spacer></v-spacer>
      <v-icon class="cursor-pointer">
        {{ icons.mdiDotsVertical }}
      </v-icon>
    </v-card-title>
    <v-card-text>
      <div class="d-flex align-center">
        <h1 class="text-4xl">
          $24,895
        </h1>
        <v-icon
          size="40"
          color="success"
        >
          {{ icons.mdiMenuUp }}
        </v-icon>
        <span class="text-base font-weight-medium success--text ml-n2">10%</span>
      </div>
      <p class="mt-2 font-weight-medium text--primary mb-0">
        Compared to $84,325 last year
      </p>
    </v-card-text>

    <v-card-text>
      <div
        v-for="(earning,index) in totalEarning"
        :key="earning.avatar"
        :class="`d-flex align-center ${index >0 ? 'mt-6':''}`"
      >
        <v-avatar
          rounded
          size="38"
          color="#5e56690a"
        >
          <v-img
            contain
            :src="earning.avatar"
            height="20"
          ></v-img>
        </v-avatar>
        <div class="ml-3">
          <p class="font-weight-medium text--primary mb-0">
            {{ earning.title }}
          </p>
          <span class="text-xs">{{ earning.subtitle }}</span>
        </div>
        <v-spacer></v-spacer>
        <div>
          <p class="text--primary font-weight-medium mb-1">
            {{ earning.earning }}
          </p>
          <v-progress-linear
            :value="earning.progress"
            :color="earning.color"
          ></v-progress-linear>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiMenuUp } from '@mdi/js'

export default {
  setup() {
    const totalEarning = [
      {
        avatar: '/images/pages/zipcar.png',
        title: 'Zipcar',
        subtitle: 'Vuejs, React & HTML',
        earning: '$24,895.65',
        progress: '85',
        color: 'primary',
      },
      {
        avatar: '/images/pages/bitbank.png',
        title: 'Bitbank',
        subtitle: 'Sketch, Figma & XD',
        earning: '$8,6500.20',
        progress: '65',
        color: 'info',
      },
      {
        avatar: '/images/pages/aviato.png',
        title: 'Aviato',
        subtitle: 'HTML & Anguler',
        earning: '$1,2450.80',
        progress: '30',
        color: 'secondary',
      },
    ]

    return {
      totalEarning,
      icons: { mdiDotsVertical, mdiMenuUp },
    }
  },
}
</script>
