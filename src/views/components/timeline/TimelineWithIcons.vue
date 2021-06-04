<template>
  <v-card>
    <v-card-title>
      Timeline With Icons
    </v-card-title>

    <v-card-text>
      <v-timeline class="no-dots-shadow pb-4">
        <v-timeline-item color="transparent">
          <template #icon>
            <v-avatar
              color="primary"
              class="v-avatar-light-bg primary--text"
              size="40"
            >
              <v-icon
                size="24"
                color="primary"
              >
                {{ icons.mdiCurrencyUsd }}
              </v-icon>
            </v-avatar>
          </template>
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

        <v-timeline-item color="transparent">
          <template #icon>
            <v-avatar
              color="success"
              class="v-avatar-light-bg success--text"
              size="40"
            >
              <v-icon
                size="24"
                color="success"
              >
                {{ icons.mdiStarPlusOutline }}
              </v-icon>
            </v-avatar>
          </template>
          <div class="d-flex justify-space-between flex-row-reverse">
            <div class="text-right">
              <p class="mb-0 text--primary font-weight-semibold">
                Create a new project for client 😎
              </p>
              <p class="mb-0">
                Invoices have been paid to the company.
              </p>
              <span class="d-flex align-center mt-2 flex-row-reverse">
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

        <v-timeline-item color="transparent">
          <template #icon>
            <v-avatar
              color="warning"
              class="v-avatar-light-bg warning--text"
              size="40"
            >
              <v-icon
                size="24"
                color="warning"
              >
                {{ icons.mdiPackageVariantClosed }}
              </v-icon>
            </v-avatar>
          </template>
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

        <v-timeline-item color="transaparent">
          <template #icon>
            <v-avatar
              color="info"
              class="v-avatar-light-bg info--text"
              size="40"
            >
              <v-icon
                size="24"
                color="info"
              >
                {{ icons.mdiInformationOutline }}
              </v-icon>
            </v-avatar>
          </template>
          <div class="d-flex justify-space-between flex-row-reverse">
            <div class="text-right">
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
// eslint-disable-next-line object-curly-newline
import { mdiFilePdf, mdiCurrencyUsd, mdiStarPlusOutline, mdiPackageVariantClosed, mdiInformationOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiFilePdf,
        mdiCurrencyUsd,
        mdiStarPlusOutline,
        mdiPackageVariantClosed,
        mdiInformationOutline,
      },
    }
  },
}
</script>
