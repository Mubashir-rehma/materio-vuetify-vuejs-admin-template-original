<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="userList"
    >
      <!-- name -->
      <template #[`item.full_name`]="{item}">
        <v-edit-dialog
          :return-value.sync="item.full_name"
        >
          <div class="d-flex align-center">
            <v-avatar
              :color="item.avatar ? '' : 'primary'"
              size="32"
            >
              <v-img
                v-if="item.avatar"
                :src="`/images/avatars/${item.avatar}`"
              ></v-img>
              <span
                v-else
                class="white--text"
              >{{ item.full_name.slice(0,2).toUpperCase() }}</span>
            </v-avatar>
            <div class="d-flex flex-column ml-3">
              <span class="d-block font-weight-bold text-truncate">{{ item.full_name }}</span>
              <small>{{ item.post }}</small>
            </div>
          </div>
          <!-- {{ item.full_name }} -->
          <template v-slot:input>
            <v-text-field
              v-model="item.full_name"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>

      <!-- salary -->
      <template #[`item.salary`]="{item}">
        <v-edit-dialog
          :return-value.sync="item.salary"
          large
          persistent
        >
          {{ item.salary }}
          <template v-slot:input>
            <div class="mt-4 title">
              Update Salary
            </div>
            <v-text-field
              v-model="item.salary"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>

      <!-- status -->
      <template #[`item.status`]="{item}">
        <v-chip
          small
          :color="statusColor[status[item.status]]"
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
    </v-data-table>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import {
  mdiSquareEditOutline, mdiDotsVertical, mdiFileDocumentOutline, mdiArchiveOutline, mdiDeleteOutline,
} from '@mdi/js'
import data from '../datatable'

export default defineComponent({
  setup() {
    return {
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: v => v.length <= 25 || 'Input too long!',
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'Date', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' },
        { text: 'ACTIONS', value: 'actions' },
      ],
      menuItems: [
        { title: 'Details', icon: mdiFileDocumentOutline },
        { title: 'Archive', icon: mdiArchiveOutline },
        { title: 'Delete', icon: mdiDeleteOutline },
      ],
      statusColor: {
      /* eslint-disable key-spacing */
        Current      : 'primary',
        Professional : 'success',
        Rejected     : 'error',
        Resigned     : 'warning',
        Applied      : 'info',
      /* eslint-enable key-spacing */
      },
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
      userList: data,
    }
  },
})
</script>
