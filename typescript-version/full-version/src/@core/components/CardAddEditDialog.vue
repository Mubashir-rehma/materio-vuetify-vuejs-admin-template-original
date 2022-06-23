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
    <v-card class="pa-5 pa-sm-15">
      <v-card-text>
        <!-- 👉 Title -->
        <div class="text-center mb-6">
          <h3 class="text-h5 font-weight-medium mb-4">
            {{ cardDetails.number ? 'Edit Card' : 'Add Card' }}
          </h3>
          <p>{{ cardDetails.number ? 'Edit your saved card details' : 'Add your saved card details' }}</p>
        </div>

        <v-form @submit.prevent="() => {}">
          <v-row>
            <!-- 👉 Card Number -->
            <v-col cols="12">
              <v-text-field
                v-model="cardDetails.number"
                label="Card Number"
                type="number"
              />
            </v-col>

            <!-- 👉 Card Name -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="cardDetails.name"
                label="Name"
              />
            </v-col>

            <!-- 👉 Card Expiry -->
            <v-col
              cols="6"
              md="3"
            >
              <v-text-field
                v-model="cardDetails.expiry"
                label="Expiry Date"
              />
            </v-col>

            <!-- 👉 Card CVV -->
            <v-col
              cols="6"
              md="3"
            >
              <v-text-field
                v-model="cardDetails.cvv"
                type="password"
                label="CVV Code"
              />
            </v-col>

            <!-- 👉 Card Primary Set -->
            <v-col cols="12">
              <v-switch
                v-model="cardDetails.isPrimary"
                label="Set as primary card"
              />
            </v-col>

            <!-- 👉 Card actions -->
            <v-col
              cols="12"
              class="text-center"
            >
              <v-btn
                class="me-3"
                type="submit"
                @click="formSubmit"
              >
                Submit
              </v-btn>
              <v-btn
                color="secondary"
                variant="contained-text"
                @click="$emit('update:modelValue', false)"
              >
                Cancel
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
