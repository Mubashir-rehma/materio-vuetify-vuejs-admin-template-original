<template>
  <v-card class="max-h-content-container app-calendar position-relative overflow-hidden text-sm">
    <v-navigation-drawer
      v-model="isLeftSidebarOpen"
      width="250"
      mobile-breakpoint="sm"
      absolute
    >
      <calendar-left-sidebar-content></calendar-left-sidebar-content>
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
      ></v-calendar>
    </div>
  </v-card>
</template>

<script>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { onMounted, ref, onUnmounted } from '@vue/composition-api'
import { useResponsiveLeftSidebar } from '@core/comp-functions/ui'
import store from '@/store'
import calendarStoreModule from './calendarStoreModule'

// Local Components
import CalendarLeftSidebarContent from './CalendarLeftSidebarContent.vue'

export default {
  components: {
    CalendarLeftSidebarContent,
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

    const fetchEvents = () => {
      store
        .dispatch(`${CALENDAR_APP_STORE_MODULE_NAME}/fetchEvents`)
        .then(response => {
          const events = response.data
          events.forEach(event => {
            /* eslint-disable no-param-reassign */
            event.start = new Date(event.start)
            event.end = new Date(event.end)

            event.color = store.state[CALENDAR_APP_STORE_MODULE_NAME].calendarOptions.find(
              calendar => calendar.label === event.extendedProps.calendar,
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
