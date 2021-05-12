<template>
  <div>
    <p class="text-2xl">
      Stepper With Custom Header
    </p>
    <demo-stepper-basic></demo-stepper-basic>
    <p class="text-2xl mt-16">
      Stepper With Transparent Header
    </p>
    <demo-stepper-transparent-header></demo-stepper-transparent-header>
    <p class="text-2xl mt-16">
      Vertical Stepper
    </p>
    <demo-stepper-vertical></demo-stepper-vertical>
  </div>
</template>

<script>
import DemoStepperBasic from './demos/DemoStepperBasic.vue'
import DemoStepperTransparentHeader from './demos/DemoStepperTransparentHeader.vue'
import DemoStepperVertical from './demos/DemoStepperVertical.vue'

export default {
  components: {
    DemoStepperBasic,
    DemoStepperTransparentHeader,
    DemoStepperVertical,
  },
}
</script>

<style>
</style>
