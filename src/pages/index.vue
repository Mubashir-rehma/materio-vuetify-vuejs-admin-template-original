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
