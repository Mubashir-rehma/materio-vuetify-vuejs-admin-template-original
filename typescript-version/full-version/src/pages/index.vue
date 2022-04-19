<script lang="ts" setup>
</script>

<template>
  <div>
    <TheCustomizer />
    <p
      v-for="i in 100"
      :key="i"
    >
      {{ i }}
    </p>
  </div>
</template>

<style lang="scss">

</style>
