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
  <v-dialog>
    <v-card class="text-center px-10 py-4">
      <v-card-text>
        <v-btn
          icon="mdi-help"
          variant="contained-text"
          color="warning"
          class="pa-4"
          :size="65"
        />
      </v-card-text>
      <v-card-text>
        {{ props.confirmationMsg }}
      </v-card-text>

      <v-card-text>
        <v-btn
          class="me-3"
          @click="onConfirmation"
        >
          Confirm
        </v-btn>
        <v-btn
          color="secondary"
          variant="contained-text"
          @click="onCancel"
        >
          Cancel
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
