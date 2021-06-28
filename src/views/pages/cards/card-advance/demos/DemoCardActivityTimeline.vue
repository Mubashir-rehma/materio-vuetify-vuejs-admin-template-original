<template>
  <v-card>
    <v-img src="/images/pages/activity-timeline.jpg"></v-img>
    <v-card-title>Activity Timeline</v-card-title>

    <v-card-text>
      <v-timeline
        align-top
        dense
        class="activity-timeline timeline-custom-dense timeline-custom-dots"
      >
        <v-timeline-item
          color="error"
          small
        >
          <div class="d-flex align-start">
            <div>
              <h4 class="font-weight-semibold">
                8 Invoices have been paid
              </h4>
              <span>Invoices have been paid to the company.</span>
              <div class="d-flex mt-1">
                <v-img
                  contain
                  height="26"
                  max-width="26"
                  src="/images/pages/pdf.png"
                ></v-img>
                <span class="font-weight-semibold ms-2 text--primary">invoice.pdf</span>
              </div>
            </div>
            <v-spacer></v-spacer>
            <span class="text-xs  text-no-wrap mt-1 ms-2 me-6">Wednesday</span>
          </div>
        </v-timeline-item>
        <v-timeline-item
          color="primary"
          small
        >
          <div class="d-flex align-start">
            <div>
              <h4 class="font-weight-semibold">
                Create a new project for client 😎
              </h4>
              <p class="mb-1">
                Invoices have been paid to the company.
              </p>
              <v-avatar size="26">
                <v-img src="/images/avatars/1.png"></v-img>
              </v-avatar>
              <span class="font-weight-semibold ms-3 text--primary">John Doe (Client)</span>
            </div>
            <v-spacer></v-spacer>
            <span class="text-xs text-no-wrap mt-1 ms-2 me-6">April, 18</span>
          </div>
        </v-timeline-item>
        <v-timeline-item
          color="info"
          small
        >
          <div class="d-flex align-start">
            <div>
              <h4 class="font-weight-semibold">
                Order #37745 from September
              </h4>
              <span>Invoices have been paid to the company.</span>
            </div>
            <v-spacer></v-spacer>
            <span class="text-xs text-no-wrap mt-1 ms-2 me-6">January, 10</span>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
