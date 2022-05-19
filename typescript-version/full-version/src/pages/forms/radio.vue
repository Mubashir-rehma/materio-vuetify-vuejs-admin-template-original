<script setup lang="ts">
import * as demoCode from '@/views/forms/form-elements/radio/demos/demoCodeRadio'
// 👉 Demos
import DemoRadioBasic from '@/views/forms/form-elements/radio/demos/DemoRadioBasic.vue'
import DemoRadioColors from '@/views/forms/form-elements/radio/demos/DemoRadioColors.vue'
import DemoRadioDensity from '@/views/forms/form-elements/radio/demos/DemoRadioDensity.vue'
import DemoRadioIcon from '@/views/forms/form-elements/radio/demos/DemoRadioIcon.vue'
import DemoRadioInline from '@/views/forms/form-elements/radio/demos/DemoRadioInline.vue'
import DemoRadioLabelSlot from '@/views/forms/form-elements/radio/demos/DemoRadioLabelSlot.vue'
import DemoRadioValidation from '@/views/forms/form-elements/radio/demos/DemoRadioValidation.vue'


</script>

<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Basic -->
      <AppCardCode
        title="Basic"
        :code="demoCode.basic"
      >
        <p>The <code>v-radio</code> component is a simple radio button.</p>

        <DemoRadioBasic />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Colors -->
      <AppCardCode
        title="Colors"
        :code="demoCode.colors"
      >
        <p>Radios can be colored by using any of the built-in colors and contextual names using the <code>color</code> prop.</p>

        <DemoRadioColors />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Inline -->
      <AppCardCode
        title="Inline"
        :code="demoCode.inline"
      >
        <p>Use <code>inline</code> prop to displays radio buttons in row.</p>

        <DemoRadioInline />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Density -->
      <AppCardCode
        title="Density"
        :code="demoCode.density"
      >
        <p>Use <code>density</code> prop to adjusts the spacing within the component. Available options are: <code>default</code>, <code>comfortable</code>, and <code>compact</code>.</p>

        <DemoRadioDensity />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Label Slot -->
      <AppCardCode
        title="Label Slot"
        :code="demoCode.labelSlot"
      >
        <p>Radio Group labels can be defined in <code>label</code> slot - that will allow to use HTML content.</p>

        <DemoRadioLabelSlot />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Icon -->
      <AppCardCode
        title="Icon"
        :code="demoCode.icon"
      >
        <p>Use <code>false-icon</code> and <code>true-icon</code> prop to set icon on inactive and active state.</p>

        <DemoRadioIcon />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Validation -->
      <AppCardCode
        title="Validation"
        :code="demoCode.validation"
      >
        <p>Use <code>rules</code> prop to validate a radio. Accepts a mixed array of types <code>function</code>, <code>boolean</code> and <code>string</code>. Functions pass an input value as an argument and must return either <code>true</code> / <code>false</code> or a string containing an error message.</p>

        <DemoRadioValidation />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
