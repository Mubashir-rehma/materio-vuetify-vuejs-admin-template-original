<script lang="ts" setup>
const isAlertVisible = ref(true)
</script>

<template>
  <div class="alert-demo-v-model-wrapper">
    <v-alert
      v-model="isAlertVisible"
      color="warning"
      variant="contained-text"
    >
      non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </v-alert>
  </div>

  <!-- button -->
  <v-btn @click="isAlertVisible = !isAlertVisible">
    {{ isAlertVisible ? "Hide Alert" : "Show Alert" }}
  </v-btn>
</template>

<style lang="scss">
.alert-demo-v-model-wrapper {
  margin-block-end: 1rem;
  min-block-size: 80px;
}
</style>
