<script lang="ts" setup>
const switchMe = ref(false)
</script>

<template>
  <v-switch
    v-model="switchMe"
    hide-details
  >
    <template #label>
      Turn on the progress: <v-progress-circular
        :indeterminate="switchMe"
        :value="0"
        size="24"
        class="ms-2"
      />
    </template>
  </v-switch>
</template>
