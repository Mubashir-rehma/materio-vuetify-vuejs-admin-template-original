<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="userlist"
    item-key="name"
    show-select
    hide-default-footer
    class="elevation-1"
  >
    <!-- trending header -->
    <template #header.trending="{}">
      <v-icon size="22">
        {{ icons.mdiTrendingUp }}
      </v-icon>
    </template>

    <!-- trending  -->
    <template #item.trending="{item}">
      <v-avatar
        size="30"
        :color="item.trendingColor"
        :class="`v-avatar-light-bg ${item.trendingColor}--text`"
      >
        <v-icon
          size="18"
          :color="item.trendingColor"
        >
          {{ item.trending }}
        </v-icon>
      </v-avatar>
    </template>

    <!-- client -->
    <template #item.client="{item}">
      <div class="d-flex align-center">
        <v-avatar
          :color="item.avatar ? '' : item.avatarColor"
          :class="`v-avatar-light-bg ${item.avatarColor}--text`"
          size="30"
        >
          <v-img
            v-if="item.avatar"
            :src="`/images/avatars/${item.avatar}`"
          ></v-img>
          <span
            v-else
            class="font-weight-medium"
          >{{ item.fullName.slice(0,2).toUpperCase() }}</span>
        </v-avatar>

        <div class="d-flex flex-column ml-3">
          <span class="d-block text--primary  font-weight-semibold text-truncate">{{ item.fullName }}</span>
          <span class="text-xs">{{ item.email }}</span>
        </div>
      </div>
    </template>

    <!-- total -->
    <template #item.total="{item}">
      ${{ item.total }}
    </template>

    <!-- Balance -->
    <template #item.balance="{item}">
      <span v-if="typeof item.balance === 'number'"> ${{ item.balance }}</span>
      <v-chip
        v-else
        small
        :color="chipColor[item.balance]"
        :class="`v-chip-light-bg ${chipColor[item.balance]}--text font-weight-semibold`"
      >
        {{ item.balance }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
import { ref } from '@vue/composition-api'
// eslint-disable-next-line object-curly-newline
import { mdiEmailOutline, mdiChartPie, mdiArrowDown, mdiTrendingUp } from '@mdi/js'

export default {
  setup() {
    const selected = ref([])
    const chipColor = {
      Paid: 'success',
      Unpaid: 'error',
    }

    const headers = [
      {
        text: '#ID',
        align: 'start',
        value: 'id',
      },
      { text: 'Trending', value: 'trending' },
      { text: 'CLIENT', value: 'client' },
      { text: 'TOTAL', value: 'total' },
      { text: 'BALANCE', value: 'balance' },
    ]

    const userlist = [
      {
        id: '#2798',
        trending: mdiEmailOutline,
        trendingColor: 'primary',
        avatar: '1.png',
        avatarColor: 'primary',
        fullName: 'Joseph Wheeler',
        email: 'ciakgu@geawo.gov',
        total: 277.39,
        balance: 459,
      },
      {
        id: '#1304',
        trending: mdiChartPie,
        trendingColor: 'warning',
        avatar: '2.png',
        avatarColor: 'primary',
        fullName: 'May Lloyd',
        email: 'nofbek@zu.org',
        total: 117.58,
        balance: 'Paid',
      },
      {
        id: '#7900',
        trending: mdiChartPie,
        trendingColor: 'warning',
        avatar: '3.png',
        avatarColor: 'primary',
        fullName: 'William Mckinney',
        email: 'cidagehe@nonaloobo.com',
        total: 1792,
        balance: 'Unpaid',
      },
      {
        id: '#63036',
        trending: mdiArrowDown,
        trendingColor: 'info',
        avatarColor: 'primary',
        fullName: 'Isabel Briggs',
        email: 'wafe@wavkes.net',
        total: 632.82,
        balance: 'Unpaid',
      },
      {
        id: '#33052',
        trending: mdiEmailOutline,
        trendingColor: 'primary',
        avatar: '5.png',
        avatarColor: 'primary',
        fullName: 'Warren Clarke',
        email: 'tabigzi@nep.net',
        total: 356.42,
        balance: 899,
      },
      {
        id: '#23579',
        trending: mdiArrowDown,
        trendingColor: 'info',
        avatar: '4.png',
        avatarColor: 'primary',
        fullName: 'Adeline Bennett',
        email: 'haurvu@wiendo.org',
        total: 289.9,
        balance: 'Unpaid',
      },
      {
        id: '#81618',
        trending: mdiChartPie,
        trendingColor: 'warning',
        fullName: 'Abbie Webster',
        avatarColor: 'success',
        email: 'noj@ej.org',
        total: 2282,
        balance: 'Paid',
      },
    ]

    return {
      selected,
      headers,
      userlist,
      chipColor,
      icons: {
        mdiTrendingUp,
      },
    }
  },
}
</script>
