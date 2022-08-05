<script setup lang="ts">
import DemoCardBasic from '@/views/pages/cards/card-basic/DemoCardBasic.vue'
import DemoCardNavigation from '@/views/pages/cards/card-basic/DemoCardNavigation.vue'
import DemoCardSolid from '@/views/pages/cards/card-basic/DemoCardSolid.vue'
</script>

<template>
  <div>
    <p class="text-2xl mb-6">
      Basic Cards
    </p>

    <DemoCardBasic />

    <p class="text-2xl mb-6 mt-14">
      Navigation Cards
    </p>

    <DemoCardNavigation />

    <p class="text-2xl mt-14 mb-6 ">
      Solid Cards
    </p>

    <DemoCardSolid />
  </div>
</template>
