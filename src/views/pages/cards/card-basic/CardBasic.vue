<template>
  <div>
    <p class="text-2xl mb-10">
      Basic Card
    </p>

    <demo-card-basic></demo-card-basic>

    <p class="text-2xl mt-14 mb-10">
      Navigation Card
    </p>

    <demo-card-navigation></demo-card-navigation>

    <p class="text-2xl mt-14 mb-10">
      Solid Card
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
