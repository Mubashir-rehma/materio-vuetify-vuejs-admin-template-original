<script lang="ts" setup>
const BlankLayout = defineAsyncComponent(() => import('./components/BlankLayout.vue'))
</script>

<template>
  <Component :is="BlankLayout" />
</template>
