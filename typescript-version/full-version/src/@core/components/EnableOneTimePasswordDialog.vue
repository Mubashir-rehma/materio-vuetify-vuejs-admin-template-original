<script setup lang="ts">
interface Emit {
  (e: 'update:modelValue', value: boolean): void
  (e: 'submit', value: string): void
}
interface Props {
  mobileNumber: string
}
const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const phoneNumber = ref(structuredClone(toRaw(props.mobileNumber)))

const formSubmit = () => {
  if (phoneNumber.value) {
    emit('submit', phoneNumber.value)
    emit('update:modelValue', false)
  }
}

const resetPhoneNumber = () => {
  phoneNumber.value = structuredClone(toRaw(props.mobileNumber))
  emit('update:modelValue', false)
}

watch(props, resetPhoneNumber, { immediate: true })
</script>

<template>
  <v-dialog class="v-dialog-lg">
    <v-card class="pa-5 pa-sm-15">
      <v-card-item>
        <v-card-title class="text-h5 font-weight-medium">
          Enable One Time Password
        </v-card-title>
        <v-card-subtitle class="font-weight-medium">
          Verify Your Mobile Number for SMS
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <p>Enter your mobile phone number with country code and  we will send you a verification code.</p>

        <VForm @submit.prevent="() => {}">
          <VTextField
            v-model="phoneNumber"
            name="mobile"
            label="Phone Number"
            class="mb-6"
          />

          <VBtn
            type="submit"
            class="me-3"
            @click="formSubmit"
          >
            Submit
          </v-btn>
          <v-btn
            color="secondary"
            variant="tonal"
            @click="resetPhoneNumber"
          >
            Cancel
          </VBtn>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
