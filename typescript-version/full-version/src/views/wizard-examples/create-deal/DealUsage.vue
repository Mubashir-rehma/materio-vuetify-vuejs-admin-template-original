<script setup lang="ts">
import type { DealUsage } from './types'

const props = defineProps<{
  formData: DealUsage
}>()

const emit = defineEmits<{
  (e: 'update:formData', value: DealUsage): void
}>()

const formData = ref<DealUsage>(props.formData)

watch(formData, () => {
  emit('update:formData', formData.value)
})
</script>

<template>
  <VForm>
    <VRow>
      <VCol
        cols="12"
        sm="6"
      >
        <VSelect
          v-model="formData.userType"
          density="default"
          label="User Type"
          :items="['All', 'Registered', 'Unregistered', 'Prime Member']"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VTextField
          v-model="formData.maxUsers"
          density="default"
          label="Max Users"
          type="number"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VTextField
          v-model="formData.cartAmount"
          density="default"
          label="Minimum Cart Amount"
          type="number"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VTextField
          v-model="formData.promotionFree"
          density="default"
          label="Promotion Fee"
          type="number"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VSelect
          v-model="formData.paymentMethod"
          density="default"
          label="Payment Method"
          :items="['Any', 'Credit Card', 'Net Banking', 'Wallet']"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VSelect
          v-model="formData.dealStatus"
          density="default"
          label="Deal Status"
          :items="['Active', 'Inactive', 'Suspended', 'Abandoned']"
        />
      </VCol>

      <VCol cols="12">
        <VSwitch
          v-model="formData.isSingleUserCustomer"
          label="Limit this discount to a single-use per customer?"
        />
      </VCol>
    </VRow>
  </VForm>
</template>
