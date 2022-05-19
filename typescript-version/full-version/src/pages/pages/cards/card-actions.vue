<script setup lang="ts">
const tableData = [
  {
    action: 'Collapse', icon: 'mdi-chevron-up', details: 'Collapse card content using collapse action.',
  },
  {
    action: 'Refresh Content', icon: 'mdi-refresh', details: 'Refresh your card content using refresh action.',
  },
  {
    action: 'Remove Card', icon: 'mdi-close', details: 'Remove card from page using remove card action',
  },
]
const refetchData = (hideOverlay: Function) => {
  setTimeout(hideOverlay, 3000)
}
</script>

<template>
  <v-row>
    <v-col cols="12">
      <!-- 👉 Main Card  -->
      <AppCardActions
        title="Cards Actions"
        @refresh="refetchData"
      >
        <v-card-text>
          <v-table>
            <thead>
              <tr>
                <th>ACTION</th>
                <th>ICON</th>
                <th>DETAILS</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="data in tableData"
                :key="data.icon"
              >
                <td>
                  {{ data.action }}
                </td>
                <td>
                  <v-icon
                    size="20"
                    :icon="data.icon"
                  />
                </td>
                <td>
                  {{ data.details }}
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </AppCardActions>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Collapsible -->
      <AppCardActions
        action-collapsed
        title="Collapsible"
      >
        <v-card-text>
          <p>You can specifically add collapsible action using <code>actionCollapse</code> prop</p>
          <span>Click on <v-icon size="20">mdi-chevron-up</v-icon> icon to see it in action</span>
        </v-card-text>
      </AppCardActions>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Refresh Content -->
      <AppCardActions
        title="Refresh Content"
        action-refresh
        @refresh="refetchData"
      >
        <v-card-text>
          <p>You can specifically add refresh action using <code>actionRefresh</code> prop</p>
          <span>Click on <v-icon size="20">mdi-refresh</v-icon> icon to see it in action</span>
        </v-card-text>
      </AppCardActions>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Remove Card -->
      <AppCardActions
        title="Remove Card"
        action-remove
      >
        <v-card-text>
          <p>You can specifically add remove action using <code>actionRemove</code> prop</p>
          <span>Click on <v-icon size="20">mdi-close</v-icon> icon to see it in action</span>
        </v-card-text>
      </AppCardActions>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Slots -->
      <AppCardActions
        title="Slots"
        @refresh="refetchData"
      >
        <template #before-actions>
          <v-chip
            class="me-3"
            color="primary"
            size="small"
          >
            3 Updates
          </v-chip>
        </template>

        <v-card-text>
          <p><code>app-card-actions</code> also provides <code>before-actions</code> and <code>after-actions</code> slot</p>
          <span>You can find more details in our documentation</span>
        </v-card-text>
      </AppCardActions>
    </v-col>
  </v-row>
</template>
