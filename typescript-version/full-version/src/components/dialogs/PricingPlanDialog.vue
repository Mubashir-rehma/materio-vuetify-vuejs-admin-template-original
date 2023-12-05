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
    <VCard class="pricing-dialog pa-5 pa-sm-11">
      <!-- 👉 dialog close btn -->
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="emit('update:isDialogVisible', false)"
      />

      <VCardText class="pt-5">
        <AppPricing
          title="Pricing Plan"
          md="4"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
