<script lang="ts" setup>
const isDialogVisible = ref(false)
</script>

<template>
  <v-dialog
    v-model="isDialogVisible"
    persistent
    width="500"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <v-btn v-bind="props">
        Open Dialog
      </v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card>
      <v-card-title class="headline">
        Use Google's location service?
      </v-card-title>

      <v-card-text>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </v-btn>
        <v-btn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
