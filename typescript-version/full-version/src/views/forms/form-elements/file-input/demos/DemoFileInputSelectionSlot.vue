<script lang="ts" setup>
const files = ref<File[]>([])
</script>

<template>
  <v-file-input
    v-model="files"
    multiple
    label="File input"
    placeholder="Upload your documents"
    prepend-icon="mdi-paperclip"
    hide-details
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <v-chip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </v-chip>
      </template>
    </template>
  </v-file-input>
</template>
