<template>
  <div class="demo-space-x">
    <v-btn>
      Accept
      <v-icon
        end
        icon="mdi-checkbox-marked-circle-outline"
      />
    </v-btn>

    <v-btn color="secondary">
      <v-icon
        start
        icon="mdi-minus-circle-outline"
      />Cancel
    </v-btn>

    <v-btn color="success">
      Upload
      <v-icon
        end
        icon="mdi-cloud-upload-outline"
      />
    </v-btn>

    <v-btn color="info">
      <v-icon
        start
        icon="mdi-arrow-left"
      />
      Back
    </v-btn>

    <v-btn color="warning">
      <v-icon icon="mdi-wrench-outline" />
    </v-btn>

    <v-btn color="error">
      <v-icon icon="mdi-cancel" />
    </v-btn>
  </div>
</template>
