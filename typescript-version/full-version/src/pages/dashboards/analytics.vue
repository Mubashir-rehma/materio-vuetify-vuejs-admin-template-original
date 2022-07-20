<template>
  <div>
    <p
      v-for="i in 100"
      :key="i"
    >
      analytics
    </p>
  </div>
</template>

<route lang="yaml">
meta:
  layoutWrapperClasses: layout-content-height-fixed
</route>
