<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
</script>

<template>
  <!-- Dialog Activator -->
  <v-btn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </v-btn>

  <!-- Dialog -->
  <v-dialog
    v-model="isDialogVisible"
    persistent
    width="300"
  >
    <v-card
      color="primary"
      width="300"
    >
      <v-card-text class="pt-3">
        Please stand by
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
