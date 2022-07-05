<script setup lang="ts">
import { useResponsiveLeftSidebar } from '@core/composable/useResponsiveSidebar'
import '@fullcalendar/core/vdom' // solves problem with Vite
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import type { CalendarApi } from '@fullcalendar/vue3'
import FullCalendar from '@fullcalendar/vue3'

const { isLeftSidebarOpen } = useResponsiveLeftSidebar({ sidebarWidth: 250 })

// SECTION useCalendar
const refCalendar = ref()
const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  weekends: false, // initial value
  headerToolbar: false,
}

// 👉 Calendar API
const calendarApi = ref<null | CalendarApi>(null)
onMounted(() => {
  calendarApi.value = refCalendar.value.getApi()
  console.log(calendarApi.value?.getCurrentData().viewTitle)
  console.log('calendarApi.value :>> ', calendarApi.value?.currentData.viewTitle)
})

// !SECTION
</script>

<template>
  <VLayout>
    <!-- 👉 Navigation drawer -->
    <VNavigationDrawer
      v-model="isLeftSidebarOpen"
      width="250"
      absolute
      touchless
      :location="$vuetify.rtl.isRtl.value ? 'right' : 'left'"
      :temporary="$vuetify.display.xs"
    >
      <div class="pa-5 d-flex flex-column gap-y-6">
        <VBtn block>
          Add event
        </VBtn>

        <div class="text-overline">
          calendars
        </div>
      </div>
    </VNavigationDrawer>

    <VMain>
      <VCard elevation="0">
        <div class="d-flex flex-column h-100">
          <div
            v-if="calendarApi"
            class="d-flex"
          >
            <VBtn
              icon="mdi-chevron-left"
              variant="text"
              @click="calendarApi!.prev()"
            />
            <VBtn
              icon="mdi-chevron-right"
              variant="text"
              @click="calendarApi!.next()"
            />

            <p v-if="calendarApi">
              {{ calendarApi.getCurrentData().viewTitle }}
            </p>
          </div>
          <FullCalendar
            ref="refCalendar"
            :options="calendarOptions"
            style="flex-grow: 1;"
          />
        </div>
      </VCard>
    </VMain>
  </VLayout>
</template>

<route lang="yaml">
meta:
  layoutWrapperClasses: layout-content-height-fixed
</route>
