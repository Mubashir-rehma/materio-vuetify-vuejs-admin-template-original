<template>
  <v-row>
    <!-- basic -->
    <v-col cols="12">
      <app-card-code
        title="Basic"
        :code="codeSnippets.codeTableBasic"
      >
        <simple-table-basic></simple-table-basic>
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
        <simple-table-dark></simple-table-dark>
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
        <simple-table-dense></simple-table-dense>
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
        <simple-table-height></simple-table-height>
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

        <simple-table-fixed-header></simple-table-fixed-header>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import SimpleTableBasic from './SimpleTableBasic.vue'
import SimpleTableDark from './SimpleTableDark.vue'
import SimpleTableDense from './SimpleTableDense.vue'
import SimpleTableHeight from './SimpleTableHeight.vue'
import SimpleTableFixedHeader from './SimpleTableFixedHeader.vue'

// code
// eslint-disable-next-line object-curly-newline
import { codeTableBasic, codeTableDark, codeTableDense, codeTableHeight } from './code'

export default {
  components: {
    AppCardCode,
    SimpleTableBasic,
    SimpleTableDark,
    SimpleTableDense,
    SimpleTableHeight,
    SimpleTableFixedHeader,
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
}
</script>
