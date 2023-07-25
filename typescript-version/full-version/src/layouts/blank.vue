<script lang="ts" setup>
const { injectSkinClasses } = useSkins()

// ℹ️ This will inject classes in body tag for accurate styling
injectSkinClasses()
</script>

<template>
  <Suspense>
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
