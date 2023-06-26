<script setup lang="ts">
import { useRoute } from 'vue-router'
import ECommerceAddCustomerDrawer from '@/views/apps/ecommerce/ECommerceAddCustomerDrawer.vue'
import CustomerBioPanel from '@/views/apps/ecommerce/customer/view/CustomerBioPanel.vue'
import CustomerTabAddressAndBilling from '@/views/apps/ecommerce/customer/view/CustomerTabAddressAndBilling.vue'
import CustomerTabNotification from '@/views/apps/ecommerce/customer/view/CustomerTabNotification.vue'
import CustomerTabOverview from '@/views/apps/ecommerce/customer/view/CustomerTabOverview.vue'
import CustomerTabSecurity from '@/views/apps/ecommerce/customer/view/CustomerTabSecurity.vue'
import { useECommerceStore } from '@/views/apps/ecommerce/useECommerceStore'

const eCommerceStore = useECommerceStore()
const route = useRoute()
const customerData = ref()
const userTab = ref(null)

const tabs = [
  { icon: 'mdi-account-outline', title: 'Overview' },
  { icon: 'mdi-lock-outline', title: 'Security' },
  { icon: 'mdi-bookmark-outline', title: 'Billing & Plan' },
  { icon: 'mdi-bell-outline', title: 'Notifications' },
]

eCommerceStore.fetchSingleCustomer(route.params.id).then(res => {
  customerData.value = res.data
})

const isAddCustomerDrawerOpen = ref(false)
</script>

<template>
  <!-- 👉 Header  -->
  <div class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6">
    <div>
      <div class="d-flex gap-2 align-center mb-2 flex-wrap">
        <h5 class="text-h5 font-weight-medium">
          Customer ID #{{ $route.params.id }}
        </h5>
      </div>
      <div>
        <span class="text-body-1">
          Aug 17, 2020, 5:48 (ET)
        </span>
      </div>
    </div>
    <div class="d-flex gap-4">
      <VBtn
        variant="outlined"
        color="error"
      >
        medium
      </VBtn>
      <VBtn
        prepend-icon="mdi-plus"
        @click="isAddCustomerDrawerOpen = !isAddCustomerDrawerOpen"
      >
        Add Customer
      </VBtn>
    </div>
  </div>

  <!-- 👉 Customer Profile  -->
  <VRow>
    <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <CustomerBioPanel :customer-data="customerData" />
    </VCol>
    <VCol
      cols="12"
      md="7"
      lg="8"
    >
      <VTabs
        v-model="userTab"
        class="v-tabs-pill mb-6 6 disable-tab-transition"
      >
        <VTab
          v-for="tab in tabs"
          :key="tab.icon"
        >
          <VIcon
            start
            :size="24"
            :icon="tab.icon"
          />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>

      <VWindow
        v-model="userTab"
        class="mb-6 disable-tab-transition"
        :touch="false"
      >
        <VWindowItem>
          <CustomerTabOverview />
        </VWindowItem>

        <VWindowItem>
          <CustomerTabSecurity />
        </VWindowItem>

        <VWindowItem>
          <CustomerTabAddressAndBilling />
        </VWindowItem>

        <VWindowItem>
          <CustomerTabNotification />
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
  <ECommerceAddCustomerDrawer v-model:is-drawer-open="isAddCustomerDrawerOpen" />
</template>
