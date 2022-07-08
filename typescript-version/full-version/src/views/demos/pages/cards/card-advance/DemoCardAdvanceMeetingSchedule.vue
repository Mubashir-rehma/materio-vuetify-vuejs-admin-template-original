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
  <VCard>
    <!-- SECTION Card Header and Menu -->
    <VCardHeader>
      <VCardHeaderText>
        <!-- 👉 Title -->
        <VCardTitle>Meeting Schedule</VCardTitle>
      </VCardHeaderText>

      <!-- 👉 menu -->

      <VBtn
        size="x-small"
        variant="text"
        icon="mdi-dots-vertical"
        color="secondary"
        class="me-n3"
      />
    </VCardHeader>
    <!-- !SECTION -->

    <!-- SECTION Meting Schedule -->
    <VList
      class="mx-1 pt-0"
      lines="two"
    >
      <VListItem
        v-for="meeting in meetingSchedules"
        :key="meeting.type"
      >
        <!-- 👉 Avatar -->
        <VListItemAvatar
          start
          :image="meeting.profile"
        />

        <!-- 👉 Title and Subtitle -->
        <VListItemHeader>
          <VListItemTitle class="text-body-2 font-weight-medium">
            {{ meeting.with }}
          </VListItemTitle>
          <VListItemSubtitle class="text-caption">
            <VIcon
              start
              size="13"
              icon="mdi-calendar-blank"
            />
            <span>{{ meeting.dateTime }}</span>
          </VListItemSubtitle>
        </VListItemHeader>

        <!-- 👉 Business Types -->
        <VListItemAction>
          <VChip
            size="small"
            :color="meetingTypeUiColors[meeting.type]"
          >
            {{ meeting.type }}
          </VChip>
        </VListItemAction>
      </VListItem>
    </VList>
    <!-- !SECTION -->
  </VCard>
</template>
