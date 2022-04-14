<script lang="ts" setup>
import AppCardCode from '@core/components/AppCardCode.vue'
</script>

<template>
  <!-- Basic -->
  <AppCardCode
    title="Basic"
    :code="codeDemoAlertBasic"
  >
    <DemoAlertBasic />
  </AppCardCode>

  <!-- Colors -->
  <AppCardCode
    title="Colors"
    :code="codeDemoAlertColors"
  >
    <p>The <code>color</code> prop is used to change the background color of the alert.</p>
    <DemoAlertColors />
  </AppCardCode>

  <!-- Icons -->
  <AppCardCode
    title="Icons"
    :code="codeDemoAlertIcons"
  >
    <p>The icon prop allows you to add an icon to the beginning of the alert component. If a type is provided, this will override the default type icon.</p>
    <DemoAlertIcons />
  </AppCardCode>

  <!-- Border -->
  <AppCardCode
    title="Border"
    :code="codeDemoAlertBorder"
  >
    <p>The Border prop allows you to add an Border to the beginning of the alert component. If a type is provided, this will override the default type Border.</p>
    <DemoAlertBorder />
  </AppCardCode>

  <!-- ColoredBorder -->
  <AppCardCode
    title="ColoredBorder"
    :code="codeDemoAlertColoredBorder"
  >
    <p>The colored-border prop removes the alert background in order to accent the border prop.</p>
    <DemoAlertColoredBorder />
  </AppCardCode>
</template>
