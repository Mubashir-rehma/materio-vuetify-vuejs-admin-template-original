<template>
  <v-row>
    <!-- basic -->
    <v-col cols="12">
      <app-card-code
        title="Basic"
        :code="codeSnippets.codeTableBasic"
      >
        <demo-table-basic></demo-table-basic>
      </app-card-code>
    </v-col>

    <!-- dark -->
    <v-col cols="12">
      <app-card-code
        title="Dark"
        :code="codeSnippets.codeTableDark"
      >
        <v-card-text>
          Use <code>dark</code> prop to switch table to the dark theme.
        </v-card-text>
        <demo-table-dark></demo-table-dark>
      </app-card-code>
    </v-col>

    <!-- Dense -->
    <v-col cols="12">
      <app-card-code
        title="Dense"
        :code="codeSnippets.codeTableDense"
      >
        <v-card-text>
          You can show a dense version of the table by using the <code>dense</code> prop.
        </v-card-text>
        <demo-table-dense></demo-table-dense>
      </app-card-code>
    </v-col>

    <!-- height -->
    <v-col cols="12">
      <app-card-code
        title="Height"
        :code="codeSnippets.codeTableHeight"
      >
        <v-card-text>
          Use the <code>height</code> prop to set the height of the table.
        </v-card-text>
        <demo-table-height></demo-table-height>
      </app-card-code>
    </v-col>

    <!-- fixed header -->
    <v-col cols="12">
      <app-card-code
        title="Fixed header"
        :code="codeSnippets.codeTableHeight"
      >
        <v-card-text>
          Use the <code>fixed-header</code> prop together with the <code>height</code> prop to fix the header to the top of the table.
        </v-card-text>

        <demo-table-fixed-header></demo-table-fixed-header>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'
import { defineComponent } from '@vue/composition-api'

// demos
import DemoTableBasic from './demos/DemoTableBasic.vue'
import DemoTableDark from './demos/DemoTableDark.vue'
import DemoTableDense from './demos/DemoTableDense.vue'
import DemoTableHeight from './demos/DemoTableHeight.vue'
import DemoTableFixedHeader from './demos/DemoTableFixedHeader.vue'

// code
import {
  codeTableBasic, codeTableDark, codeTableDense, codeTableHeight,
} from './demos/code'

export default defineComponent({
  components: {
    AppCardCode,
    DemoTableBasic,
    DemoTableDark,
    DemoTableDense,
    DemoTableHeight,
    DemoTableFixedHeader,
  },
  setup() {
    return {
      codeSnippets: {
        codeTableBasic,
        codeTableDark,
        codeTableDense,
        codeTableHeight,
      },
    }
  },
})
</script>
