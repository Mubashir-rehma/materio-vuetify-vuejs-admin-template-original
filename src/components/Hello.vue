<script lang="ts" setup>
const count = ref(0)

interface Props {
  msg?: string
}

withDefaults(defineProps<Props>(), {
  msg: 'welcome',
})
</script>

<template>
  <p>{{ msg }},</p>
  <p>COunt: {{ count }}</p>
</template>

<style lang="scss">

</style>
