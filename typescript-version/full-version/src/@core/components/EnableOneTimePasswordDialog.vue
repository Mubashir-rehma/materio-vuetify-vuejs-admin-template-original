<script setup lang="ts">
interface Emit {
  (e: 'update:isDialogVisible', value: boolean): void
  (e: 'submit', value: string): void
}
interface Props {
  mobileNumber: string
  isDialogVisible: boolean
}
const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const phoneNumber = ref(structuredClone(toRaw(props.mobileNumber)))

const formSubmit = () => {
  if (phoneNumber.value) {
    emit('submit', phoneNumber.value)
    emit('update:isDialogVisible', false)
  }
}

const resetPhoneNumber = () => {
  phoneNumber.value = structuredClone(toRaw(props.mobileNumber))
  emit('update:isDialogVisible', false)
}

// watch(props, resetPhoneNumber, { immediate: true })
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    class="v-dialog-lg"
    @update:model-value="(val) => $emit('update:isDialogVisible', val)"
  >
    <VCard class="pa-5 pa-sm-15">
      <VCardItem>
        <VCardTitle class="text-h5 font-weight-medium">
          Enable One Time Password
        </VCardTitle>
        <VCardSubtitle class="font-weight-medium">
          Verify Your Mobile Number for SMS
        </VCardSubtitle>
      </VCardItem>

      <VCardText>
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
          </VBtn>
          <VBtn
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
