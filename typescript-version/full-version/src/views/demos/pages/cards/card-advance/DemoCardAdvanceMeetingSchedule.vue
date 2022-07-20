<script setup lang="ts">
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
    profile: dynamicImgImport('@/assets/images/avatars/avatar-4.png'),
    with: 'Call with Woods',
    dateTime: '21 Jul | 08:20-10:30',
    type: 'Business',
  },
  {
    profile: dynamicImgImport('@/assets/images/avatars/avatar-8.png'),
    with: 'Call with hilda',
    dateTime: '24 Jul | 11:30-12:00',
    type: 'Meditation',
  },
  {
    profile: dynamicImgImport('@/assets/images/avatars/avatar-7.png'),
    with: 'Conference call',
    dateTime: '28 Jul | 05:00-6:45',
    type: 'Meditation',
  },
  {
    profile: dynamicImgImport('@/assets/images/avatars/avatar-3.png'),
    with: 'Meeting with Mark',
    dateTime: '03 Aug | 07:00-8:30',
    type: 'Meetup',
  },
  {
    profile: dynamicImgImport('@/assets/images/avatars/avatar-2.png'),
    with: 'Meeting in Oakland',
    dateTime: '14 Aug | 04:15-05:30',
    type: 'Business',
  },
  {
    profile: dynamicImgImport('@/assets/images/avatars/avatar-1.png'),
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
    <VCardItem>
      <!-- 👉 Title -->
      <VCardTitle>Meeting Schedule</VCardTitle>

      <!-- 👉 menu -->
      <template #append>
        <div class="me-n3">
          <VBtn
            size="x-small"
            variant="text"
            icon="mdi-dots-vertical"
            color="secondary"
          />
        </div>
      </template>
    </VCardItem>
    <!-- !SECTION -->

    <!-- SECTION Meting Schedule -->
    <VCardText>
      <VList
        class="card-list"
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
    </VCardText>
    <!-- !SECTION -->
  </VCard>
</template>
