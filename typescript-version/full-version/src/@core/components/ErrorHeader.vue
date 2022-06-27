<script setup lang="ts">
interface Props {
  errorCode: string
  errorTitle: string
  errorDescription: string
}

const prop = defineProps<Props>()
</script>

<template>
  <div class="text-center mb-4">
    <!-- 👉 Title and subtitle -->
    <h1 class="text-h1 font-weight-medium">
      {{ prop.errorCode }}
    </h1>
    <h5 class="text-h5 font-weight-medium mb-3">
      {{ prop.errorTitle }}
    </h5>
    <p>{{ prop.errorDescription }}</p>
  </div>
</template>
