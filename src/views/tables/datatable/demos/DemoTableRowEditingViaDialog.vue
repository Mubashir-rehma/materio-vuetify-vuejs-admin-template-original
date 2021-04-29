<template>
  <v-data-table
    :headers="headers"
    :items="userList"
    sort-by="calories"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <!-- <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider> -->
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.full_name"
                      label="User name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.salary"
                      label="Salary"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.age"
                      label="Age"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.start_date"
                      label="Date"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                      v-model="editedItem.status"
                      :items="selectOptions"
                      label="Standard"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="error"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- dialog -->
        <v-dialog
          v-model="dialogDelete"
          max-width="500px"
        >
          <v-card>
            <v-card-title class="headline">
              Are you sure you want to delete this item?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="closeDelete"
              >
                Cancel
              </v-btn>
              <v-btn
                color="error"
                text
                @click="deleteItemConfirm"
              >
                OK
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <!-- action -->
    <template #[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        {{ icons.mdiPencil }}
      </v-icon>

      <v-icon
        small
        @click="deleteItem(item)"
      >
        {{ icons.mdiDelete }}
      </v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>

    <!-- name -->
    <template #[`item.full_name`]="{item}">
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
  </v-data-table>
</template>

<script>
import { mdiPencil, mdiDelete } from '@mdi/js'
import data from '../datatable'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    icons: {
      mdiDelete,
      mdiPencil,
    },
    headers: [
      { text: 'NAME', value: 'full_name' },
      { text: 'EMAIL', value: 'email' },
      { text: 'Date', value: 'start_date' },
      { text: 'SALARY', value: 'salary' },
      { text: 'AGE', value: 'age' },
      { text: 'STATUS', value: 'status' },
      { text: 'ACTIONS', value: 'actions' },
    ],
    status: {
      1: 'Current',
      2: 'Professional',
      3: 'Rejected',
      4: 'Resigned',
      5: 'Applied',
    },
    selectOptions: [
      { text: 'Current', value: 1 },
      { text: 'Professional', value: 2 },
      { text: 'Rejected', value: 3 },
      { text: 'Resigned', value: 4 },
      { text: 'Applied', value: 5 },
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
    userList: [],
    editedIndex: -1,
    editedItem: {},
    defaultItem: {},
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      // eslint-disable-next-line no-unused-expressions
      val || this.close()
    },
    dialogDelete(val) {
      // eslint-disable-next-line no-unused-expressions
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.userList = data
    },

    editItem(item) {
      this.editedIndex = this.userList.indexOf(item)
      this.editedItem = { ...item }
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.userList.indexOf(item)
      this.editedItem = { ...item }
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.userList.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem }
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem }
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.userList[this.editedIndex], this.editedItem)
      } else {
        this.userList.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>
