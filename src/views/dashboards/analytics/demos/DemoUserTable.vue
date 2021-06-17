<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="userListData"
      item-key="name"
      hide-default-footer
      show-select
    >
      <!-- name -->
      <template #[`item.fullName`]="{item}">
        <div class="d-flex align-center">
          <v-avatar
            :color="item.avatar ? '' : 'primary'"
            :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
            size="32"
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
            <small>{{ item.secondaryEmail }}</small>
          </div>
        </div>
      </template>

      <template #[`item.role`]="{item}">
        <div class="d-flex align-center">
          <v-avatar
            size="30"
            :color="role[item.role].color"
            :class="`v-avatar-light-bg ${role[item.role].color}--text me-3`"
          >
            <v-icon
              size="20"
              :color="role[item.role].color"
            >
              {{ role[item.role].icon }}
            </v-icon>
          </v-avatar>
          <span>{{ item.role }}</span>
        </div>
      </template>

      <!-- status -->
      <template #[`item.status`]="{item}">
        <v-chip
          small
          :color="statusColor[item.status]"
          :class="`${statusColor[item.status]}--text`"
          class="v-chip-light-bg font-weight-semibold"
        >
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import {
  mdiSquareEditOutline,
  mdiDotsVertical,
  mdiChartTimelineVariant,
  mdiAccountOutline,
  mdiPencilOutline,
  mdiCogOutline,
} from '@mdi/js'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Inactive: 'secondary',
      Active: 'success',
      Pending: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    const role = {
      Maintainer: { icon: mdiChartTimelineVariant, color: 'primary' },
      Subscriber: { icon: mdiAccountOutline, color: 'warning' },
      Editor: { icon: mdiPencilOutline, color: 'info' },
      Author: { icon: mdiCogOutline, color: 'success' },
    }

    const userListData = [
      {
        avatar: '1.png',
        fullName: 'Joseph Wheeler',
        secondaryEmail: 'ciakgu@geawo.gov',
        primaryEmail: 'nuroani@icpair.com',
        role: 'Maintainer',
        status: 'Inactive',
      },
      {
        avatar: '2.png',
        fullName: 'May Lloyd',
        secondaryEmail: 'nofbek@zu.org',
        primaryEmail: 'jeju@ma.co.uk',
        role: 'Subscriber',
        status: 'Active',
      },
      {
        avatar: '3.png',
        fullName: 'William Mckinney',
        secondaryEmail: 'cidagehe@nonalbo.com',
        primaryEmail: 'suumde@ha.co.uk',
        role: 'Subscriber',
        status: 'Pending',
      },
      {
        fullName: 'Isabel Briggs',
        secondaryEmail: 'wafe@wavkes.net',
        primaryEmail: 'temiwiho@ohacma.gov',
        role: 'Editor',
        status: 'Active',
      },
      {
        avatar: '5.png',
        fullName: 'Warren Clarke',
        secondaryEmail: 'tabigzi@nep.net',
        primaryEmail: 'hirasles@zozzetkuv.edu',
        role: 'Maintainer',
        status: 'Inactive',
      },
      {
        avatar: '4.png',
        fullName: 'Adeline Bennett',
        secondaryEmail: 'haurvu@wiendo.org',
        primaryEmail: 'boz@peh.co.uk',
        role: 'Author',
        status: 'Pending',
      },
      {
        fullName: 'Isabel Briggs',
        secondaryEmail: 'wafe@wavkes.net',
        primaryEmail: 'temiwiho@ohacma.gov',
        role: 'Editor',
        status: 'Active',
      },
    ]

    return {
      headers: [
        { text: 'USER', value: 'fullName' },
        { text: 'EMAIL', value: 'primaryEmail' },
        { text: 'ROLE', value: 'role' },
        { text: 'STATUS', value: 'status' },
      ],
      userListData,
      statusColor,
      role,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
}
</script>
