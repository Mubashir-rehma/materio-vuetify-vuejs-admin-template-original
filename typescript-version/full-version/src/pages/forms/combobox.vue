<script lang="ts" setup>

// code
import * as demoCode from '@/views/forms/form-elements/combobox/demos/demoCodeCombobox'

// demos
import DemoComboboxBasic from '@/views/forms/form-elements/combobox/demos/DemoComboboxBasic.vue'
import DemoComboboxClearable from '@/views/forms/form-elements/combobox/demos/DemoComboboxClearable.vue'
import DemoComboboxDensity from '@/views/forms/form-elements/combobox/demos/DemoComboboxDensity.vue'
import DemoComboboxMultiple from '@/views/forms/form-elements/combobox/demos/DemoComboboxMultiple.vue'
import DemoComboboxNoDataWithChips from '@/views/forms/form-elements/combobox/demos/DemoComboboxNoDataWithChips.vue'
import DemoComboboxVariant from '@/views/forms/form-elements/combobox/demos/DemoComboboxVariant.vue'

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
        <p>With Combobox, you can allow a user to create new values that may not be present in a provided items list.</p>

        <DemoComboboxBasic />
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
        <p>
          You can use <code>Density</code> prop to reduce combobox height and lower max height of list items. Available options are: <code>default</code>, <code>comfortable</code>, and <code>compact</code>.
        </p>

        <DemoComboboxDensity />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Variant -->
      <AppCardCode
        title="Variant"
        :code="demoCode.variant"
      >
        <p>Use <code>contained</code>, <code>outlined</code>, <code>underlined</code>, <code>filled</code> and <code>plain</code> options of <code>variant</code> prop to change the look of combobox. </p>

        <DemoComboboxVariant />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Multiple -->
      <AppCardCode
        title="Multiple"
        :code="demoCode.multiple"
      >
        <p>Previously known as tags - user is allowed to enter more than 1 value</p>

        <DemoComboboxMultiple />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 No data with chips -->
      <AppCardCode
        title="No data with chips"
        :code="demoCode.noDataWithChips"
      >
        <p>Previously known as tags - user is allowed to enter more than 1 value</p>

        <DemoComboboxNoDataWithChips />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Clearable -->

      <AppCardCode
        title="Clearable"
        :code="demoCode.clearable"
      >
        <p>Use <code>clearable</code> prop to clear combobox.</p>

        <DemoComboboxClearable />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
