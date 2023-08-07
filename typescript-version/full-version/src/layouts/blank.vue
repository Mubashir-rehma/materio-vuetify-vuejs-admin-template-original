<script lang="ts" setup>
const { injectSkinClasses } = useSkins()

// ℹ️ This will inject classes in body tag for accurate styling
injectSkinClasses()

const isFallbackStateActive = ref(false)
const refLoadingIndicator = ref<any>(null)

// watching if the fallback state is active and the refLoadingIndicator component is available
watch([isFallbackStateActive, refLoadingIndicator], () => {
  if (isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.fallbackHandle()

  if (!isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.resolveHandle()
}, {
  immediate: true,
})
</script>

<template>
  <AppLoadingIndicator ref="refLoadingIndicator" />

  <Suspense
    :timeout="0"
    @fallback="isFallbackStateActive = true"
    @resolve="isFallbackStateActive = false"
  >
    <div class="layout-wrapper layout-blank">
      <RouterView />
    </div>
  </Suspense>
</template>

<style>
.layout-wrapper.layout-blank {
  flex-direction: column;
}
</style>
