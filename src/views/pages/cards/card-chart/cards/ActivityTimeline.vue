<template>
  <v-card>
    <v-card-title>
      Activity Timeline
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
      >
        <v-icon size="22">
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
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
              <p class="mb-0 text--primary font-weight-semibold">
                8 Invoices have been paid
              </p>
              <p class="mb-0">
                Invoices have been paid to the company.
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
            <small>Wednesday</small>
          </div>
        </v-timeline-item>
        <v-timeline-item
          small
          color="primary"
        >
          <div class="d-flex justify-space-between">
            <div>
              <p class="mb-0 text--primary font-weight-semibold">
                Create a new project for client 😎
              </p>
              <p class="mb-0">
                Invoices have been paid to the company.
              </p>
              <span class="d-flex align-center mt-2">
                <div class="d-flex align-center">
                  <v-avatar
                    size="26"
                    class="mr-2"
                  >
                    <v-img src="/images/avatars/1.png"></v-img>
                  </v-avatar>
                  <span class="text--primary font-weight-semibold">John Doe (Client)</span>
                </div>
              </span>
            </div>
            <small>April, 18</small>
          </div>
        </v-timeline-item>
        <v-timeline-item
          small
          color="info"
        >
          <div class="d-flex justify-space-between">
            <div>
              <p class="mb-0 text--primary font-weight-semibold">
                Order #37745 from September
              </p>
              <p class="mb-0">
                Invoices have been paid to the company.
              </p>
            </div>
            <small>January, 10</small>
          </div>
        </v-timeline-item>
        <v-timeline-item
          small
          color="success"
        >
          <div class="d-flex justify-space-between">
            <div>
              <p class="mb-0 text--primary font-weight-semibold">
                Client Meeting
              </p>
              <p class="mb-0">
                Project meeting with john 👨🏻‍💻 @10:15am
              </p>
            </div>
            <small>September, 20</small>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiFilePdf } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiDotsVertical,
        mdiFilePdf,
      },
    }
  },
}
</script>
