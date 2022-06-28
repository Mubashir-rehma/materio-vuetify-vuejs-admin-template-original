<script setup lang="ts">
interface Emit {
  (e: 'update:modelValue', value: boolean): void
  (e: 'submit', value: number): void
}
const emit = defineEmits<Emit>()

const phoneNumber = ref<number>()

const formSubmit = () => {
  if (phoneNumber.value) {
    emit('submit', phoneNumber.value)
    emit('update:modelValue', false)
  }
}
</script>

<template>
  <v-dialog class="v-dialog-lg">
    <v-card class="pa-5 pa-sm-15">
      <v-card-text>
        <h3 class="text-h5 font-weight-medium mb-5">
          Enable One Time Password
        </h3>
        <p class="text-body-1 font-weight-medium">
          Verify Your Mobile Number for SMS
        </p>
        <p>Enter your mobile phone number with country code and  we will send you a verification code.</p>

        <v-form @submit.prevent="() => {}">
          <v-text-field
            v-model="phoneNumber"
            name="mobile"
            label="Phone Number"
            class="mb-6"
            type="number"
          />

          <v-btn
            type="submit"
            class="me-3"
            @click="formSubmit"
          >
            Submit
          </v-btn>
          <v-btn
            type="reset"
            color="secondary"
            variant="tonal"
            @click="$emit('update:modelValue', false)"
          >
            Cancel
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
