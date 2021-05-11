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

    <!-- dense -->
    <v-col cols="12">
      <app-card-code
        title="Dense"
        :code="codeSnippets.codeTableDense"
      >
        <demo-table-dense></demo-table-dense>
      </app-card-code>
    </v-col>

    <!-- Table cell Slot for custom data rendering -->
    <v-col cols="12">
      <app-card-code
        title="Table Cell Slot"
        :code="codeSnippets.codeTableCellSlot"
      >
        <demo-table-cell-slot></demo-table-cell-slot>
      </app-card-code>
    </v-col>

    <!-- fixed header -->
    <v-col cols="12">
      <app-card-code
        title="Fixed Header"
        :code="codeSnippets.codeTableFixedHeader"
      >
        <demo-table-fixed-header></demo-table-fixed-header>
      </app-card-code>
    </v-col>

    <!-- grouping -->
    <v-col cols="12">
      <app-card-code
        title="Grouping"
        :code="codeSnippets.codeTableGrouping"
      >
        <demo-table-grouping></demo-table-grouping>
      </app-card-code>
    </v-col>

    <!-- expandable rows -->
    <v-col cols="12">
      <app-card-code
        title="Expandable Rows"
        :code="codeSnippets.codeTableExpandableRows"
      >
        <demo-table-expandable-rows></demo-table-expandable-rows>
      </app-card-code>
    </v-col>

    <!-- Row Editing via dialog -->
    <v-col cols="12">
      <app-card-code
        title="Row Editing via dialog"
        :code="codeSnippets.codeTableRowEditingViaDialog"
      >
        <demo-table-row-editing-via-dialog></demo-table-row-editing-via-dialog>
      </app-card-code>
    </v-col>

    <!-- Cell Editing via dialog -->
    <v-col cols="12">
      <app-card-code
        title="Cell Editing via dialog"
        :code="codeSnippets.codeTableCellEditingViaDialog"
      >
        <demo-table-cell-editor-via-dialog></demo-table-cell-editor-via-dialog>
      </app-card-code>
    </v-col>

    <!-- pagination -->
    <v-col cols="12">
      <app-card-code
        title="External Pagination"
        :code="codeSnippets.codeTableExternalPagination"
      >
        <demo-table-external-pagination></demo-table-external-pagination>
      </app-card-code>
    </v-col>

    <!-- kitchen sink -->
    <v-col cols="12">
      <app-card-code
        title="Kitchen Sink"
        :code="codeSnippets.codeTableKitchenSink"
      >
        <demo-table-kitchen-sink></demo-table-kitchen-sink>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// Demos
import DemoTableBasic from './demos/DemoTableBasic.vue'
import DemoTableDense from './demos/DemoTableDense.vue'
import DemoTableCellSlot from './demos/DemoTableCellSlot.vue'
import DemoTableFixedHeader from './demos/DemoTableFixedHeader.vue'
import DemoTableGrouping from './demos/DemoTableGrouping.vue'
import DemoTableExpandableRows from './demos/DemoTableExpandableRows.vue'
import DemoTableRowEditingViaDialog from './demos/DemoTableRowEditingViaDialog.vue'
import DemoTableCellEditorViaDialog from './demos/DemoTableCellEditorViaDialog.vue'
import DemoTableExternalPagination from './demos/DemoTableExternalPagination.vue'
import DemoTableKitchenSink from './demos/DemoTableKitchenSink.vue'

// code
import {
  codeTableBasic,
  codeTableDense,
  codeTableCellSlot,
  codeTableFixedHeader,
  codeTableGrouping,
  codeTableExpandableRows,
  codeTableRowEditingViaDialog,
  codeTableCellEditingViaDialog,
  codeTableExternalPagination,
  codeTableKitchenSink,
} from './demos/code'

export default {
  components: {
    DemoTableBasic,
    AppCardCode,
    DemoTableDense,
    DemoTableCellSlot,
    DemoTableFixedHeader,
    DemoTableGrouping,
    DemoTableExpandableRows,
    DemoTableRowEditingViaDialog,
    DemoTableCellEditorViaDialog,
    DemoTableExternalPagination,
    DemoTableKitchenSink,
  },
  setup() {
    return {
      codeSnippets: {
        codeTableBasic,
        codeTableDense,
        codeTableCellSlot,
        codeTableFixedHeader,
        codeTableGrouping,
        codeTableExpandableRows,
        codeTableRowEditingViaDialog,
        codeTableCellEditingViaDialog,
        codeTableExternalPagination,
        codeTableKitchenSink,
      },
    }
  },
}
</script>
