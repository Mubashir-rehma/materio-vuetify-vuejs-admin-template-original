<template>
  <v-card>
    <v-card-title>
      <span>Sales by Countries</span>
      <v-spacer></v-spacer>
      <v-icon class="cursor-pointer">
        {{ icons.mdiDotsVertical }}
      </v-icon>
    </v-card-title>
    <v-card-text>
      <div
        v-for="(data,index) in salesByCountries"
        :key="data.country"
        :class="`d-flex align-center ${index > 0 ? 'mt-6':''}`"
      >
        <v-avatar
          :color="data.color"
          size="40"
          :class="`v-avatar-light-bg ${data.color}--text font-weight-medium`"
        >
          <span class="text-base">{{ data.abbr }}</span>
        </v-avatar>
        <div class="ml-3">
          <div class="font-weight-semibold">
            <span class="text--primary text-base">{{ data.amount }}</span>
            <v-icon
              size="20"
              :color="data.change.charAt(0) === '+' ? 'success':'error'"
            >
              {{ data.change.charAt(0) === '+' ? icons.mdiChevronUp: icons.mdiChevronDown }}
            </v-icon>
            <span :class="`text-xs ${data.change.charAt(0) === '+' ? 'success--text':'error--text'}`">{{ data.change.slice(1) }}</span>
          </div>
          <span class="text-xs">{{ data.country }}</span>
        </div>

        <v-spacer></v-spacer>
        <div>
          <p class="text--primary font-weight-semibold mb-0">
            {{ data.sales }}
          </p>
          <span class="text-xs">Sales</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiChevronUp, mdiChevronDown } from '@mdi/js'

export default {
  setup() {
    const salesByCountries = [
      {
        abbr: 'US',
        amount: '$8,656k',
        country: 'United states of america',
        change: '+25.8%',
        sales: '894k',
        color: 'success',
      },
      {
        abbr: 'UK',
        amount: '$2,415k',
        country: 'United kingdom',
        change: '-6.2%',
        sales: '645k',
        color: 'error',
      },
      {
        abbr: 'IN',
        amount: '$865k',
        country: 'India',
        change: '+12.4%',
        sales: '148k',
        color: 'warning',
      },
      {
        abbr: 'JA',
        amount: '$745k',
        country: 'Japan',
        change: '-11.9%',
        sales: '86k',
        color: 'secondary',
      },
      {
        abbr: 'KO',
        amount: '$45k',
        country: 'Korea',
        change: '+16.2%',
        sales: '42k',
        color: 'error',
      },
      {
        abbr: 'CH',
        amount: '$12k',
        country: 'China',
        change: '+14.8%',
        sales: '8k',
        color: 'info',
      },
    ]

    return {
      salesByCountries,
      icons: {
        mdiDotsVertical,
        mdiChevronUp,
        mdiChevronDown,
      },
    }
  },
}
</script>
