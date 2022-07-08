<script setup lang="ts">
interface Props {
  confirmationMsg: string
}

interface Emit {
  (e: 'update:modelValue', value: boolean): void
  (e: 'confirm', value: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const onConfirmation = () => {
  emit('confirm', true)
  emit('update:modelValue', false)
}

const onCancel = () => {
  emit('confirm', false)
  emit('update:modelValue', false)
}
</script>

<template>
  <!-- 👉 Confirm Dialog -->
  <VDialog>
    <VCard class="text-center px-10 py-4">
      <VCardText>
        <VBtn
          icon="mdi-help"
          variant="tonal"
          color="warning"
          class="pa-4"
          :size="65"
        />
      </VCardText>
      <VCardText>
        {{ props.confirmationMsg }}
      </VCardText>

      <VCardText>
        <VBtn
          class="me-3"
          @click="onConfirmation"
        >
          Confirm
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          @click="onCancel"
        >
          Cancel
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
