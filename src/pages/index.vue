<script lang="ts" setup>
const { locale } = useI18n()

setTimeout(() => {
  locale.value = 'fr'
  console.log('object')
}, 3000)

const enableI18n = true
const computedProps = computed(() => (key: string) => ({
  'keypath': enableI18n ? key : null,
  'v-text': enableI18n ? null : key,
}))
console.log('object :>> ', computedProps.value('Basic'))

// 'keypath': enableI18n ? key : null,
// 'v-text': enableI18n ? null : key,
</script>

<template>
  <div>
    <TheCustomizer />
    <p
      v-for="i in 100"
      :key="i"
    >
      {{ i }} - <component :is="enableI18n ? 'i18n-t' : 'span'" :keypath="enableI18n ? 'Basic' : null" v-text="enableI18n ? null : 'Basic'" />
    </p>
  </div>
</template>

<style lang="scss">

</style>
