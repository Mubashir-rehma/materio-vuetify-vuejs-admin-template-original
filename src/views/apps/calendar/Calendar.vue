<template>
  <v-card class="max-h-content-container app-calendar position-relative overflow-hidden text-sm">
    <v-navigation-drawer
      v-model="isLeftSidebarOpen"
      width="250"
      mobile-breakpoint="sm"
      absolute
    >
      <calendar-left-sidebar-content @open-evnt-handler-drawer="isEventHandlerDrawerActive = true"></calendar-left-sidebar-content>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="isEventHandlerDrawerActive"
      right
      app
      temporary
      width="420"
    >
      <calendar-event-handler-drawer-content
        :event="event"
        :clear-event-data="clearEventData"
        @remove-event="removeEvent"
        @add-event="addEvent"
        @update-event="updateEvent"
        @close-drawer="isEventHandlerDrawerActive = false"
      ></calendar-event-handler-drawer-content>
    </v-navigation-drawer>

    <div
      :style="contentStyles"
      class="h-full"
    >
      <div
        v-if="refCalendar"
        class="calendar-header mx-6 my-5 d-flex align-center"
      >
        <v-btn
          icon
          class="mr-1"
          @click="refCalendar.prev()"
        >
          <v-icon size="30">
            {{ icons.mdiChevronLeft }}
          </v-icon>
        </v-btn>
        <v-btn
          icon
          class="mr-3"
          @click="refCalendar.next()"
        >
          <v-icon size="30">
            {{ icons.mdiChevronRight }}
          </v-icon>
        </v-btn>
        <p class="font-weight-semibold text-xl text--primary mb-0">
          {{ refCalendar.title }}
        </p>

        <v-spacer></v-spacer>

        <v-btn-toggle
          v-model="activeCalendarView"
          color="primary"
        >
          <v-btn
            v-for="calendarViewOption in calendarViewOptions"
            :key="calendarViewOption"
            elevation="0"
            :value="calendarViewOption"
          >
            {{ calendarViewOption }}
          </v-btn>
        </v-btn-toggle>
      </div>

      <v-calendar
        ref="refCalendar"
        v-model="calendarValue"
        :type="activeCalendarView"
        :events="calendarEvents"
        :event-margin-bottom="5"
        @click:event="calenderHandleEventClick"
        @click:day="calendarHandleDayClick"
      ></v-calendar>
    </div>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { onMounted, ref, onUnmounted, computed, watch } from '@vue/composition-api'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { useResponsiveLeftSidebar } from '@core/comp-functions/ui'
import store from '@/store'
import calendarStoreModule from './calendarStoreModule'

// Local Components
import CalendarLeftSidebarContent from './CalendarLeftSidebarContent.vue'
import CalendarEventHandlerDrawerContent from './CalendarEventHandlerDrawerContent.vue'

export default {
  components: {
    CalendarLeftSidebarContent,
    CalendarEventHandlerDrawerContent,
  },
  setup() {
    // ————————————————————————————————————
    //* ——— Store Registration
    // ————————————————————————————————————

    const CALENDAR_APP_STORE_MODULE_NAME = 'app-calendar'

    // Register module
    if (!store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) {
      store.registerModule(CALENDAR_APP_STORE_MODULE_NAME, calendarStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) store.unregisterModule(CALENDAR_APP_STORE_MODULE_NAME)
    })

    // ————————————————————————————————————
    //* ——— Left Sidebar
    // ————————————————————————————————————
    const { isLeftSidebarOpen, contentStyles } = useResponsiveLeftSidebar({ sidebarWidth: 250 })

    // ————————————————————————————————————
    //* ——— Templare Ref
    // ————————————————————————————————————

    const refCalendar = ref(null)
    onMounted(() => {
      console.log('refCalendar.value :>> ', refCalendar.value)

      // TODO: Remove this window attachment
      window.calendar = refCalendar.value
    })

    // ————————————————————————————————————
    //* ——— Calendar View/Type
    // ————————————————————————————————————

    const activeCalendarView = ref('month')
    const calendarViewOptions = ['month', 'week', 'day']

    // ————————————————————————————————————
    //* ——— Calendar Value & Events
    // ————————————————————————————————————

    const calendarValue = ref()
    const calendarEvents = ref([])

    const blankEvent = {
      id: '',
      name: '',
      start: '',
      end: '',
      timed: false,
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    }
    const event = ref(JSON.parse(JSON.stringify(blankEvent)))
    const clearEventData = () => {
      event.value = JSON.parse(JSON.stringify(blankEvent))
    }

    const fetchEvents = () => {
      store
        .dispatch(`${CALENDAR_APP_STORE_MODULE_NAME}/fetchEvents`)
        .then(response => {
          const events = response.data
          events.forEach(fetchedEvent => {
            /* eslint-disable no-param-reassign */
            fetchedEvent.start = new Date(fetchedEvent.start)
            fetchedEvent.end = new Date(fetchedEvent.end)

            fetchedEvent.color = store.state[CALENDAR_APP_STORE_MODULE_NAME].calendarOptions.find(
              calendar => calendar.label === fetchedEvent.extendedProps.calendar,
            ).color
            /* eslint-enable */
          })
          calendarEvents.value = events
        })
        .catch(error => {
          console.error(error)
          console.error(error.response)
        })
    }

    fetchEvents()

    //
    //* ——— Calendar Event Handler ——————————————————
    //

    const calenderHandleEventClick = eventObj => {
      // Grab only event object
      event.value = eventObj.event

      // eslint-disable-next-line no-use-before-define
      isEventHandlerDrawerActive.value = true
    }

    const calendarHandleDayClick = dayObj => {
      event.value.start = dayObj.date

      // eslint-disable-next-line no-use-before-define
      isEventHandlerDrawerActive.value = true
    }

    //
    //* ——— Event Actions ——————————————————
    //

    const addEvent = eventData => {
      store.dispatch(`${CALENDAR_APP_STORE_MODULE_NAME}/addEvent`, { event: eventData }).then(() => {
        // TODO: Perform adding or refetching
        fetchEvents()
      })
    }

    const updateEvent = eventData => {
      store.dispatch(`${CALENDAR_APP_STORE_MODULE_NAME}/updateEvent`, { event: eventData }).then(response => {
        const updatedEvent = response.data.event

        updatedEvent.color = store.state[CALENDAR_APP_STORE_MODULE_NAME].calendarOptions.find(
          calendar => calendar.label === updatedEvent.extendedProps.calendar,
        ).color

        const updatedEventIndex = calendarEvents.value.findIndex(e => e.id === updatedEvent.id)

        calendarEvents.value.splice(updatedEventIndex, 1, updatedEvent)
      })
    }

    const removeEvent = () => {
      const eventId = event.value.id
      store.dispatch(`${CALENDAR_APP_STORE_MODULE_NAME}/removeEvent`, { id: eventId }).then(() => {
        const updatedEventIndex = calendarEvents.value.findIndex(e => e.id === eventId)
        calendarEvents.value.splice(updatedEventIndex, 1)
      })
    }

    //
    //* ——— Selected Calendars ——————————————————
    //
    const selectedCalendars = computed(() => store.state[CALENDAR_APP_STORE_MODULE_NAME].selectedCalendars)

    watch(selectedCalendars, () => {
      fetchEvents()
    })

    // ————————————————————————————————————
    //* ——— Event Handler
    // ————————————————————————————————————

    const isEventHandlerDrawerActive = ref(false)

    return {
      // Left Sidebar
      isLeftSidebarOpen,
      contentStyles,

      // Template Refs
      refCalendar,

      // Calendar View/Type
      activeCalendarView,
      calendarViewOptions,

      // Calendar Value & Events
      calendarValue,
      calendarEvents,
      event,
      clearEventData,

      calenderHandleEventClick,
      calendarHandleDayClick,

      addEvent,
      updateEvent,
      removeEvent,

      // Event handler sidebar
      isEventHandlerDrawerActive,

      // Icons
      icons: {
        mdiChevronLeft,
        mdiChevronRight,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/apps/calendar.scss';
</style>
