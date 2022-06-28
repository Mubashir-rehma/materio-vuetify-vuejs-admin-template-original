<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar2 from '@/assets/images/avatars/avatar-2.png'
import avatar3 from '@/assets/images/avatars/avatar-3.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'
import avatar7 from '@/assets/images/avatars/avatar-7.png'
import avatar8 from '@/assets/images/avatars/avatar-8.png'

interface UiColors {
  Business: string
  Meditation: string
  Meetup: string
  Party: string
}

interface MeetingSchedule {
  profile: string
  with: string
  dateTime: string
  type: keyof UiColors
}

const meetingSchedules: MeetingSchedule[] = [
  {
    profile: avatar4,
    with: 'Call with Woods',
    dateTime: '21 Jul | 08:20-10:30',
    type: 'Business',
  },
  {
    profile: avatar8,
    with: 'Call with hilda',
    dateTime: '24 Jul | 11:30-12:00',
    type: 'Meditation',
  },
  {
    profile: avatar7,
    with: 'Conference call',
    dateTime: '28 Jul | 05:00-6:45',
    type: 'Meditation',
  },
  {
    profile: avatar3,
    with: 'Meeting with Mark',
    dateTime: '03 Aug | 07:00-8:30',
    type: 'Meetup',
  },
  {
    profile: avatar2,
    with: 'Meeting in Oakland',
    dateTime: '14 Aug | 04:15-05:30',
    type: 'Business',
  },
  {
    profile: avatar1,
    with: 'Meeting with Carl',
    dateTime: '05 Oct | 10:00-12:45',
    type: 'Party',
  },
]

const meetingTypeUiColors: UiColors = {
  Business: 'primary',
  Meditation: 'success',
  Meetup: 'secondary',
  Party: 'warning',
}
</script>

<template>
  <v-card>
    <!-- SECTION Card Header and Menu -->
    <v-card-header>
      <v-card-header-text>
        <!-- 👉 Title -->
        <v-card-title>Meeting Schedule</v-card-title>
      </v-card-header-text>

      <!-- 👉 menu -->

      <v-btn
        size="x-small"
        variant="text"
        icon="mdi-dots-vertical"
        color="secondary"
        class="me-n3"
      />
    </v-card-header>
    <!-- !SECTION -->

    <!-- SECTION Meting Schedule -->
    <v-list
      class="mx-1 pt-0"
      lines="two"
    >
      <v-list-item
        v-for="meeting in meetingSchedules"
        :key="meeting.type"
      >
        <!-- 👉 Avatar -->
        <v-list-item-avatar
          start
          :image="meeting.profile"
        />

        <!-- 👉 Title and Subtitle -->
        <v-list-item-header>
          <v-list-item-title class="text-body-2 font-weight-medium">
            {{ meeting.with }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-caption">
            <v-icon
              start
              size="13"
              icon="mdi-calendar-blank"
            />
            <span>{{ meeting.dateTime }}</span>
          </v-list-item-subtitle>
        </v-list-item-header>

        <!-- 👉 Business Types -->
        <v-list-item-action>
          <v-chip
            size="small"
            :color="meetingTypeUiColors[meeting.type]"
          >
            {{ meeting.type }}
          </v-chip>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <!-- !SECTION -->
  </v-card>
</template>
