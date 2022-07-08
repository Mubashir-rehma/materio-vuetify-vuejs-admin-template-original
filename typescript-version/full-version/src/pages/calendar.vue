<script setup lang="ts">
import '@fullcalendar/core/vdom' // solves problem with Vite

// Local imports
import FullCalendar from '@fullcalendar/vue3'
import { blankEvent, useCalendar } from '@/views/apps/calendar/useCalendar'
import { useCalendarStore } from '@/views/apps/calendar/useCalendarStore'
import { useResponsiveLeftSidebar } from '@core/composable/useResponsiveSidebar'

// Components
import CalendarEventHandler from '@/views/apps/calendar/CalendarEventHandler.vue'

// 👉 Store
const store = useCalendarStore()

// 👉 Event
const event = ref(structuredClone(blankEvent))
const isEventHandlerSidebarActive = ref(false)
watch(isEventHandlerSidebarActive, val => {
  if (!val)
    event.value = structuredClone(blankEvent)
})

// 👉 useCalendar
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent } = useCalendar(event, isEventHandlerSidebarActive)

const { isLeftSidebarOpen } = useResponsiveLeftSidebar({ sidebarWidth: 250 })

// SECTION Sidebar
// 👉 Check all
const checkAll = computed({
  /*
    GET: Return boolean `true` => if length of options matches length of selected filters => Length matches when all events are selected
    SET: If value is `true` => then add all available options in selected filters => Select All
          Else if => all filters are selected (by checking length of both array) => Empty Selected array  => Deselect All
  */
  get: () => store.selectedCalendars.length === store.availableCalendars.length,
  set: val => {
    if (val)
      store.selectedCalendars = store.availableCalendars.map(i => i.label)

    else if (store.selectedCalendars.length === store.availableCalendars.length)
      store.selectedCalendars = []
  },
})

// !SECTION
</script>

<template>
  <div>
    <!-- `z-index: 0` Allows overlapping vertical nav on calendar -->
    <VLayout style="z-index: 0;">
      <!-- 👉 Navigation drawer -->
      <VNavigationDrawer
        v-model="isLeftSidebarOpen"
        width="250"
        absolute
        touchless
        :location="$vuetify.rtl.isRtl.value ? 'right' : 'left'"
        :temporary="$vuetify.display.xs"
      >
        <div class="pa-5 d-flex flex-column gap-y-8">
          <VBtn
            block
            @click="isEventHandlerSidebarActive = true"
          >
            Add event
          </VBtn>
          <div>
            <p class="text-xs text-uppercase text-medium-emphasis">
              Calendars
            </p>
            <VCheckbox
              v-model="checkAll"
              label="View all"
              class="input-control-auto-height"
            />
            <VCheckbox
              v-for="calendar in store.availableCalendars"
              :key="calendar.label"
              v-model="store.selectedCalendars"
              :value="calendar.label"
              :color="calendar.color"
              :label="calendar.label"
              class="input-control-auto-height"
            />
          </div>
        </div>
      </VNavigationDrawer>
      <VMain>
        <VCard elevation="0">
          <FullCalendar
            ref="refCalendar"
            :options="calendarOptions"
          />
        </VCard>
      </VMain>
    </VLayout>
    <CalendarEventHandler
      v-model:isDrawerOpen="isEventHandlerSidebarActive"
      :event="event"
      @addEvent="addEvent"
      @updateEvent="updateEvent"
      @removeEvent="removeEvent"
    />
  </div>
</template>

<style lang="scss">
@import "@core/scss/libs/full-calendar.scss";
</style>
