<template>
  <div>
    <p class="text-2xl mb-6">
      Basic Cards
    </p>

    <demo-card-basic></demo-card-basic>

    <p class="text-2xl mt-14 mb-6">
      Navigation Cards
    </p>

    <demo-card-navigation></demo-card-navigation>

    <p class="text-2xl mt-14 mb-6">
      Solid Cards
    </p>

    <demo-card-solid></demo-card-solid>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

// demos
import DemoCardBasic from './demos/DemoCardBasic.vue'
import DemoCardNavigation from './demos/DemoCardNavigation.vue'
import DemoCardSolid from './demos/DemoCardSolid.vue'

export default defineComponent({
  components: {
    DemoCardBasic,
    DemoCardNavigation,
    DemoCardSolid,
  },
})
</script>
