<template>
  <v-card id="invoice-list">
    <!-- search -->
    <v-card-title>
      <v-row>
        <v-col
          cols="6"
          md="2"
        >
          <v-select
            label="Actions"
            single-line
            outlined
            dense
            :items="['Delete','Edit','View','Send']"
            hide-details
            clearable
          ></v-select>
        </v-col>

        <!-- create button -->
        <v-col
          cols="6"
          md="3"
        >
          <v-btn color="primary">
            <v-icon
              size="18"
              class="mr-1"
            >
              {{ icons.mdiPlus }}
            </v-icon>
            <span class="d-none d-sm-block">Create Invoice</span>
          </v-btn>
        </v-col>

        <!-- spacer -->
        <v-spacer></v-spacer>

        <!-- search invoice -->
        <v-col
          cols="12"
          lg="2"
          md="3"
          sm="6"
        >
          <v-text-field
            v-model="searchQuery"
            label="Search Invoice"
            single-line
            dense
            outlined
            hide-details
          ></v-text-field>
        </v-col>

        <!-- status -->
        <v-col
          cols="12"
          lg="2"
          md="3"
          sm="6"
        >
          <v-select
            v-model="statusFilter"
            :items="status "
            label="Select Status"
            single-line
            outlined
            dense
            hide-details
            clearable
          ></v-select>
        </v-col>
      </v-row>
    </v-card-title>

    <!-- table -->
    <v-data-table
      :headers="tableColumns"
      :items="invoiceListTable"
      :options.sync="options"
      :server-items-length="50"
      :loading="loading"
      :search="searchQuery"
      show-select
    >
      <!-- trending header -->
      <template #header.trending="{}">
        <v-icon size="22">
          {{ icons.mdiTrendingUp }}
        </v-icon>
      </template>

      <!-- id -->
      <template #item.id="{item}">
        <span>#{{ item.id }}</span>
      </template>

      <!-- trending  -->
      <template #item.trending="{item}">
        <v-avatar
          size="30"
          :color="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant"
          :class="`v-avatar-light-bg ${resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant}--text`"
        >
          <v-icon
            size="18"
            :color="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant"
          >
            {{ resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon }}
          </v-icon>
        </v-avatar>
      </template>

      <!-- client -->
      <template #item.client="{item}">
        <div class="d-flex align-center">
          <v-avatar
            :color="resolveClientAvatarVariant(item.invoiceStatus)"
            :class="`v-avatar-light-bg ${resolveClientAvatarVariant(item.invoiceStatus)}--text`"
            size="30"
          >
            <v-img
              v-if="item.avatar"
              :src="`/images/avatars/${item.avatar}`"
            ></v-img>
            <span
              v-else
              class="font-weight-medium"
            >{{ avatarText(item.client.name) }}</span>
          </v-avatar>

          <div class="d-flex flex-column ml-3">
            <span class="d-block text--primary  font-weight-semibold text-truncate">{{ item.client.name }}</span>
            <span class="text-xs">{{ item.client.companyEmail }}</span>
          </div>
        </div>
      </template>

      <!-- total -->
      <template #item.total="{item}">
        ${{ item.total }}
      </template>

      <!-- Balance -->
      <template #item.balance="{item}">
        <span v-if="checkType(item.balance) !== 'number'">
          {{ item.balance }}
        </span>

        <!-- chip -->
        <v-chip
          v-else
          small
          :color="item.total !== item.balance ? 'success':'error'"
          :class="`v-chip-light-bg ${item.total !== item.balance ? 'success':'error'}--text font-weight-semibold`"
        >
          {{ item.total !== item.balance ? 'Paid':'Unpaid' }}
        </v-chip>
      </template>

      <!-- date -->
      <template #item.issuedDate="{item}">
        <span class="text-no-wrap">{{ item.issuedDate }}</span>
      </template>

      <!-- actions -->
      <template #item.actions>
        <div class="d-flex align-center justify-center">
          <!-- delete -->
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                icon
                small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon size="18">
                  {{ icons.mdiDeleteOutline }}
                </v-icon>
              </v-btn>
            </template>
            <span>Delete</span>
          </v-tooltip>

          <!-- view  -->
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                icon
                small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon size="18">
                  {{ icons.mdiEyeOutline }}
                </v-icon>
              </v-btn>
            </template>
            <span>View Invoice</span>
          </v-tooltip>

          <!-- dropdown -->
          <v-menu
            bottom
            left
          >
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
                v-for="(item, i) in items"
                :key="i"
                href="javascript:void(0)"
              >
                <v-list-item-title>
                  <v-icon
                    size="18"
                    class="mr-2"
                  >
                    {{ item.icon }}
                  </v-icon>
                  <span>{{ item.title }}</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import {
  mdiTrendingUp,
  mdiPlus,
  mdiDeleteOutline,
  mdiDotsVertical,
  mdiEyeOutline,
  mdiDownloadOutline,
  mdiPencilOutline,
  mdiContentCopy,
} from '@mdi/js'

import { onUnmounted, ref } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import store from '@/store'

// store module
import invoiceStoreModule from '../invoiceStoreModule'

// composition function
import useInvoicesList from './useInvoiceList'

export default {
  setup() {
    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) {
      store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    const checkType = data => {
      if (typeof data === 'number') return 'number'
      if (typeof data === 'string') return 'string'

      return 0
    }
    const {
      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,
      invoiceListTable,
      fetchInvoices,
      searchQuery,
      tableColumns,
      options,
      statusFilter,
      totalInvoiceListTable,
      loading,
    } = useInvoicesList()

    fetchInvoices()

    const status = ref(['Downloaded', 'Draft', 'Paid', 'Partial Payment', 'Past Due'])

    return {
      tableColumns,
      searchQuery,
      status,
      statusFilter,
      options,
      totalInvoiceListTable,
      invoiceListTable,
      loading,

      checkType,
      avatarText,
      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,

      icons: {
        mdiTrendingUp,
        mdiPlus,
        mdiDeleteOutline,
        mdiDotsVertical,
        mdiEyeOutline,
      },
      items: [
        { title: 'Download', icon: mdiDownloadOutline },
        { title: 'Edit', icon: mdiPencilOutline },
        { title: 'Delete', icon: mdiDeleteOutline },
        { title: 'Duplicate', icon: mdiContentCopy },
      ],
    }
  },
}
</script>
