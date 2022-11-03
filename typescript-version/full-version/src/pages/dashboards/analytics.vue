<template>
  <div>
    <p
      v-for="i in 1"
      :key="i"
    >
      analytics
      {{ String($vuetify.locale.isRtl) }}
    </p>
  </div>
</template>

<route lang="yaml">
meta:
  layoutWrapperClasses: layout-content-height-fixed
</route>
