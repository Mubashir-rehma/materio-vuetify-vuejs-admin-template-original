<template>
  <div class="user-tab-overview">
    <!-- user project list -->
    <v-card class="mb-7">
      <v-card-title>
        User's Project List
      </v-card-title>

      <v-data-table
        :headers="tableColumnHeaders"
        :items="projectList"
        hide-default-footer
      >
        <!-- project -->
        <template #[`item.project`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              size="33"
              class="mr-3"
            >
              <v-img :src="`/images/logos/${item.logo}`"></v-img>
            </v-avatar>
            <div class="text-no-wrap">
              <p class="font-weight-medium text--primary mb-n1">
                {{ item.name }}
              </p>
              <span class="text-xs">{{ item.project }}</span>
            </div>
          </div>
        </template>

        <!-- progress -->
        <template #[`item.progress`]="{item}">
          <span>{{ item.progress }}%</span>
          <v-progress-linear
            height="6"
            rounded
            class="mt-1"
            :color="resolveUserProgressVariant(item.progress)"
            :value="item.progress"
          ></v-progress-linear>
        </template>
      </v-data-table>
    </v-card>

    <!-- activity timeline -->
    <v-card class="mb-7">
      <v-card-title>
        User Activity Timeline
      </v-card-title>

      <v-card-text>
        <v-timeline
          dense
          class="timeline-custom-dense timeline-custom-dots"
        >
          <v-timeline-item
            small
            color="error"
          >
            <div class="d-flex justify-space-between">
              <div>
                <p class="mb-0 text--primary font-weight-medium">
                  User login
                </p>
                <p class="mb-0">
                  User login at 2:12pm
                </p>
              </div>
              <span class="text-xs text-no-wrap">12 min ago</span>
            </div>
          </v-timeline-item>

          <v-timeline-item
            small
            color="primary"
          >
            <div class="d-flex justify-space-between">
              <div>
                <p class="mb-0 text--primary font-weight-medium">
                  Meeting with john
                </p>
                <p class="mb-0">
                  React Project meeting with john @10:15am
                </p>
                <span class="d-flex align-center mt-2">
                  <div class="d-flex align-center">
                    <v-avatar
                      size="40"
                      class="mr-2"
                    >
                      <v-img src="/images/avatars/2.png"></v-img>
                    </v-avatar>
                    <div>
                      <p class="text--primary font-weight-medium mb-0">Leona Watkins (Client)</p>
                      <span>CEO of pixinvent</span>
                    </div>
                  </div>
                </span>
              </div>
              <span class="text-xs text-no-wrap">45 min ago</span>
            </div>
          </v-timeline-item>

          <v-timeline-item
            small
            color="info"
          >
            <div class="d-flex justify-space-between">
              <div>
                <p class="mb-0 text--primary font-weight-medium">
                  Create a new react project for client
                </p>
                <p class="mb-0">
                  Add files to new design folder
                </p>
              </div>
              <span class="text-xs text-no-wrap">2 day ago</span>
            </div>
          </v-timeline-item>

          <v-timeline-item
            small
            color="success"
          >
            <div class="d-flex justify-space-between">
              <div>
                <p class="mb-0 text--primary font-weight-semibold">
                  Create invoices for client
                </p>
                <p class="mb-0">
                  Create new invoices and send to Leona Watkins
                </p>
                <span class="d-flex align-center mt-2">
                  <v-icon
                    color="error"
                    class="mr-1"
                  >
                    {{ icons.mdiFilePdf }}
                  </v-icon>
                  <span class="text--primary font-weight-semibold text-sm">invoice.pdf</span>
                </span>
              </div>
              <span class="text-xs text-no-wrap">12 min ago</span>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>

    <invoice-list></invoice-list>
  </div>
</template>

<script>
import { mdiDotsVertical, mdiFilePdf } from '@mdi/js'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'

export default {
  components: { InvoiceList },
  setup() {
    const tableColumnHeaders = [
      {
        text: 'PROJECT',
        value: 'project',
      },
      { text: 'TOTAL TASK', value: 'totalTask' },
      { text: 'PROGRESS', value: 'progress' },
      { text: 'HOURS', value: 'hours' },
    ]
    const projectList = [
      {
        logo: 'logo-2.jpg',
        name: 'BGC eCommerce App',
        project: 'React Project',
        totalTask: '122/240',
        progress: 78,
        hours: '18:42',
      },
      {
        logo: 'logo-1.jpg',
        name: 'Falcon Logo Design',
        project: 'UI/UX Project',
        totalTask: '9/56',
        progress: 18,
        hours: '20:42',
      },
      {
        logo: 'logo-3.jpg',
        name: 'Dashboard Design',
        project: 'Vuejs Project',
        totalTask: '290/320',
        progress: 62,
        hours: '120:87',
      },
      {
        logo: 'logo-4.jpg',
        name: 'Foodista mobile app',
        project: 'IPhone Project',
        totalTask: '290/320',
        progress: 8,
        hours: '120:87',
      },
      {
        logo: 'logo-5.jpg',
        name: 'Dojo React Project',
        project: 'React Project',
        totalTask: '120/186',
        progress: 49,
        hours: '230:10',
      },
      {
        logo: 'logo-6.jpg',
        name: 'Blockchain Website',
        project: 'Python Project',
        totalTask: '99/109',
        progress: 92,
        hours: '342:41',
      },
      {
        logo: 'logo-7.jpg',
        name: 'Hoffman Website',
        project: 'HTML Project',
        totalTask: '98/110',
        progress: 88,
        hours: '12:45',
      },
    ]

    const resolveUserProgressVariant = progrss => {
      if (progrss <= 25) return 'error'
      if (progrss > 25 && progrss <= 50) return 'warning'
      if (progrss > 50 && progrss <= 75) return 'primary'
      if (progrss > 75 && progrss <= 100) return 'success'

      return 'secondary'
    }

    return {
      tableColumnHeaders,
      projectList,
      resolveUserProgressVariant,
      icons: {
        mdiDotsVertical,
        mdiFilePdf,
      },
    }
  },
}
</script>
