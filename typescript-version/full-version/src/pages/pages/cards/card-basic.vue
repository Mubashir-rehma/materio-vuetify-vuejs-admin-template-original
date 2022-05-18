<script setup lang="ts">
import CardBasic from '@/views/pages/cards/card-basic/CardBasic.vue'
import CardNavigation from '@/views/pages/cards/card-basic/CardNavigation.vue'
import CardSolid from '@/views/pages/cards/card-basic/CardSolid.vue'
</script>

<template>
  <p class="text-h5 mb-6 text-medium-emphasis">
    Basic Cards
  </p>

  <CardBasic />

  <p class="text-h5 text-medium-emphasis mb-6 mt-14">
    Navigation Cards
  </p>

  <CardNavigation />

  <p class="text-h5 text-medium-emphasis mt-14 mb-6 ">
    Solid Cards
  </p>

  <CardSolid />
</template>
