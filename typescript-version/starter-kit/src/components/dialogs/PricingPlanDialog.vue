<script setup lang="ts">
interface Props {
  isDialogVisible: boolean
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    class="v-dialog-xl"
    @update:model-value="dialogVisibleUpdate"
  >
    <VCard class="pricing-dialog pa-5 pa-sm-8">
      <!-- 👉 dialog close btn -->
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="emit('update:isDialogVisible', false)"
      />

      <VCardText>
        <AppPricing
          title="Subscription Plan"
          md="4"
        />

        <div class="text-center mt-4">
          <p class="text-sm mb-3">
            Still Not Convinced? Start with a 14-day FREE trial!
          </p>
          <VBtn>Start your trial</VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
