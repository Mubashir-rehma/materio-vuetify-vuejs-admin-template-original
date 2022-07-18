<script setup lang="ts">
interface Props {
  cardDetails: {
    number: string
    name: string
    expiry: string
    cvv: string
    isPrimary: boolean
    type: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  cardDetails: () => ({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
    isPrimary: false,
    type: '',
  }),
})

const emit = defineEmits<Emit>()

interface Emit {
  (e: 'submit', value: typeof props.cardDetails): void
  (e: 'update:modelValue', value: boolean): void
}
const cardDetails = ref<Props['cardDetails']>(structuredClone(toRaw(props.cardDetails)))

watch(props, () => {
  cardDetails.value = structuredClone(toRaw(props.cardDetails))
})

const formSubmit = () => {
  emit('submit', cardDetails.value)
}
</script>

<template>
  <v-dialog>
    <v-card
      :width="$vuetify.display.smAndDown ? 'auto' : 650 "
      class="pa-5 pa-sm-15"
    >
      <!-- 👉 Title -->
      <v-card-item class="text-center">
        <v-card-title class="text-h5 font-weight-medium mb-4">
          {{ props.cardDetails.name ? 'Edit Card' : 'Add Card' }}
        </v-card-title>
        <v-card-subtitle>
          {{ props.cardDetails.name ? 'Edit your saved card details' : 'Add your saved card details' }}
        </v-card-subtitle>
      </v-card-item>

      <v-card-text class="mt-6">
        <v-form @submit.prevent="() => {}">
          <v-row>
            <!-- 👉 Card Number -->
            <VCol cols="12">
              <VTextField
                v-model="cardDetails.number"
                label="Card Number"
                type="number"
              />
            </VCol>

            <!-- 👉 Card Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="cardDetails.name"
                label="Name"
              />
            </VCol>

            <!-- 👉 Card Expiry -->
            <VCol
              cols="6"
              md="3"
            >
              <VTextField
                v-model="cardDetails.expiry"
                label="Expiry Date"
              />
            </VCol>

            <!-- 👉 Card CVV -->
            <VCol
              cols="6"
              md="3"
            >
              <VTextField
                v-model="cardDetails.cvv"
                type="password"
                label="CVV Code"
              />
            </VCol>

            <!-- 👉 Card Primary Set -->
            <VCol cols="12">
              <VSwitch
                v-model="cardDetails.isPrimary"
                label="Set as primary card"
              />
            </VCol>

            <!-- 👉 Card actions -->
            <VCol
              cols="12"
              class="text-center"
            >
              <VBtn
                class="me-3"
                type="submit"
                @click="formSubmit"
              >
                Submit
              </VBtn>
              <VBtn
                color="secondary"
                variant="tonal"
                @click="$emit('update:modelValue', false)"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
