<script setup lang="ts">
import DemoCardBasic from '@/views/pages/cards/card-basic/DemoCardBasic.vue'
import DemoCardNavigation from '@/views/pages/cards/card-basic/DemoCardNavigation.vue'
import DemoCardSolid from '@/views/pages/cards/card-basic/DemoCardSolid.vue'
</script>

<template>
  <div>
    <h6 class="text-2xl font-weight-medium mb-6">
      Basic Cards
    </h6>

    <DemoCardBasic />

    <h6 class="text-2xl font-weight-medium mb-6 mt-14">
      Navigation Cards
    </h6>

    <DemoCardNavigation />

    <h6 class="text-2xl font-weight-medium mt-14 mb-6 ">
      Solid Cards
    </h6>

    <DemoCardSolid />
  </div>
</template>
