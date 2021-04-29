<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="5"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    show-expand
  >
    <!-- name -->
    <template #[`item.full_name`]="{item}">
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
          <span v-else>{{ item.full_name.slice(0,2).toUpperCase() }}</span>
        </v-avatar>
        <div class="d-flex flex-column ml-3">
          <span class="d-block font-weight-bold text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #[`item.status`]="{item}">
      <v-chip
        small
        :color="statusColor[status[item.status]]"
        :class="`${statusColor[status[item.status]]}--text`"
        class="v-chip-light-bg"
      >
        {{ status[item.status] }}
      </v-chip>
    </template>

    <!-- action -->
    <template #[`item.actions`]="">
      <!-- more menus -->
      <v-menu left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon size="18">
              {{ icons.mdiDotsVertical }}
            </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
          >
            <v-list-item-title>
              <v-icon size="20">
                {{ item.icon }}
              </v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- edit -->
      <v-icon size="18">
        {{ icons.mdiSquareEditOutline }}
      </v-icon>
    </template>

    <!-- toggle switch -->
    <template #top>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-switch
          v-model="singleExpand"
          label="Single expand"
          class="mt-2"
        ></v-switch>
      </v-toolbar>
    </template>

    <!-- expandad data -->
    <template #expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <p class="my-1">
          City: {{ item.city }}
        </p>
        <p class="mb-1">
          Experience: {{ item.experience }}
        </p>
        <p>Post: {{ item.post }}</p>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import {
  mdiSquareEditOutline,
  mdiDotsVertical,
  mdiFileDocumentOutline,
  mdiArchiveOutline,
  mdiDeleteOutline,
} from '@mdi/js'
import data from '../datatable'

export default defineComponent({
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    const singleExpand = ref(false)
    const expanded = ref([])

    return {
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'Date', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' },
        { text: 'ACTIONS', value: 'actions' },
      ],
      data,
      menuItems: [
        { title: 'Details', icon: mdiFileDocumentOutline },
        { title: 'Archive', icon: mdiArchiveOutline },
        { title: 'Delete', icon: mdiDeleteOutline },
      ],
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,
      singleExpand,
      expanded,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
})
</script>
