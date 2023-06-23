<script setup lang="ts">
const contactMethod = ref('Phone number')
const fullName = ref('Only require last name')
const companyName = ref('Don\'t include')
const addressLine = ref('Optional')
const shippingAddress = ref('Optional')
</script>

<template>
  <VCard
    title="Customer contact method"
    subtitle="Select what contact method customers use to check out."
    class="mb-6"
  >
    <VCardText>
      <VRadioGroup
        v-model="contactMethod"
        class="mb-4"
      >
        <VRadio
          label="Phone number"
          value="Phone number"
        />
        <VRadio
          label="Email"
          value="Email"
        />
      </VRadioGroup>

      <VAlert
        color="warning"
        closable
        variant="tonal"
      >
        <template #prepend>
          <VAvatar
            size="28"
            icon="mdi-information-outline"
            variant="elevated"
            color="warning"
            rounded
          />
        </template>
        To send SMS updates, you need to install an SMS App.
      </VAlert>
    </VCardText>
  </VCard>

  <VCard
    title="Customer information"
    class="mb-6"
  >
    <VCardText>
      <VRadioGroup
        v-model="fullName"
        label="Full name"
        class="mb-4"
      >
        <VRadio
          value="Only require last name"
          label="Only require last name"
          class="ms-4"
        />
        <VRadio
          value="Require first and last name"
          label="Require first and last name"
          class="ms-4"
        />
      </VRadioGroup>

      <VRadioGroup
        v-model="companyName"
        label="Company name"
        class="mb-4"
      >
        <VRadio
          value="Don't include"
          label="Don't include"
          class="ms-4"
        />
        <VRadio
          value="Optional"
          label="Optional"
          class="ms-4"
        />
        <VRadio
          value="Required"
          label="Required"
          class="ms-4"
        />
      </VRadioGroup>

      <VRadioGroup
        v-model="addressLine"
        label="Address line 2 (apartment, unit, etc.)"
        class="mb-4"
      >
        <VRadio
          value="Don't include"
          label="Don't include"
          class="ms-4"
        />
        <VRadio
          value="Optional"
          label="Optional"
          class="ms-4"
        />
        <VRadio
          value="Required"
          label="Required"
          class="ms-4"
        />
      </VRadioGroup>

      <VRadioGroup
        v-model="shippingAddress"
        label="Shipping address phone number"
        class="mb-4"
      >
        <VRadio
          value="Don't include"
          label="Don't include"
          class="ms-4"
        />
        <VRadio
          value="Optional"
          label="Optional"
          class="ms-4"
        />
        <VRadio
          value="Required"
          label="Required"
          class="ms-4"
        />
      </VRadioGroup>
    </VCardText>
  </VCard>

  <div class="d-flex justify-end gap-x-4">
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Discard
    </VBtn>
    <VBtn>Save</VBtn>
  </div>
</template>
