<script setup lang="ts">
const api = new Promise(resolve => { setTimeout(() => resolve(true), 10000) })

await api
</script>

<template>
  <h1>Crm</h1>
</template>
