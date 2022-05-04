<script setup lang="ts">

// Demos
import DemoCheckboxBasic from '@/views/forms/form-elements/checkbox/demos/DemoCheckboxBasic.vue'
import DemoCheckboxColors from '@/views/forms/form-elements/checkbox/demos/DemoCheckboxColors.vue'
import DemoCheckboxDensity from '@/views/forms/form-elements/checkbox/demos/DemoCheckboxDensity.vue'
import DemoCheckboxIcon from '@/views/forms/form-elements/checkbox/demos/DemoCheckboxIcon.vue'
import DemoCheckboxInlineTextField from '@/views/forms/form-elements/checkbox/demos/DemoCheckboxInlineTextField.vue'
import DemoCheckboxLabelSlot from '@/views/forms/form-elements/checkbox/demos/DemoCheckboxLabelSlot.vue'
import DemoCheckboxModelAsArray from '@/views/forms/form-elements/checkbox/demos/DemoCheckboxModelAsArray.vue'
import DemoCheckboxStates from '@/views/forms/form-elements/checkbox/demos/DemoCheckboxStates.vue'
import DemoCheckboxValue from '@/views/forms/form-elements/checkbox/demos/DemoCheckboxValue.vue'

// code
import * as demoCode from '@/views/forms/form-elements/checkbox/demos/demoCodeCheckbox'

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
        <p><code>v-checkbox</code> in its simplest form provides a toggle between 2 values.</p>

        <DemoCheckboxBasic />
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
        <p>Use <code>density</code> prop to reduces the input height. Available options are: <code>default</code>, <code>comfortable</code>, and <code>compact</code>.</p>

        <DemoCheckboxDensity />
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
        <p>Checkboxes can be colored by using any of the builtin colors and contextual names using the <code>color</code> prop.</p>

        <DemoCheckboxColors />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Model as array -->
      <AppCardCode
        title="Model as array"
        :code="demoCode.modelAsArray"
      >
        <p>Multiple <code>v-checkbox</code>'s can share the same <code>v-model</code> by using an array.</p>

        <DemoCheckboxModelAsArray />
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
        <p>Use <code>off-icon</code> and <code>on-icon</code> prop to change the icon on the checkbox.</p>

        <DemoCheckboxIcon />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Checkbox Value -->
      <AppCardCode
        title="Checkbox Value"
        :code="demoCode.checkboxValue"
      >
        <p>Use <code>false-value</code> and <code>true-value</code> prop to sets value for truthy and falsy state</p>

        <DemoCheckboxValue />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 States -->
      <AppCardCode
        title="States"
        :code="demoCode.states"
      >
        <p><code>v-checkbox</code> can have different states such as <code>default</code>, <code>disabled</code>, and <code>indeterminate</code>.</p>

        <DemoCheckboxStates />
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
        <p>Checkbox labels can be defined in <code>label</code> slot - that will allow to use HTML content.</p>

        <DemoCheckboxLabelSlot />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Inline text-field -->
      <AppCardCode
        title="Inline text-field"
        :code="demoCode.inlineTextField"
      >
        <p>You can place <code>v-checkbox</code> in line with other components such as <code>v-text-field</code>.</p>

        <DemoCheckboxInlineTextField />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
