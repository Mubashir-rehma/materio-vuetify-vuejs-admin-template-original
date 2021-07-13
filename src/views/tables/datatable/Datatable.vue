<template>
  <v-row>
    <!-- basic -->
    <v-col cols="12">
      <app-card-code
        title="Basic"
        :code="codeSnippets.codeTableBasic"
      >
        <datatable-basic></datatable-basic>
      </app-card-code>
    </v-col>

    <!-- dense -->
    <v-col cols="12">
      <app-card-code
        title="Dense"
        :code="codeSnippets.codeTableDense"
      >
        <datatable-dense></datatable-dense>
      </app-card-code>
    </v-col>

    <!-- Table cell Slot for custom data rendering -->
    <v-col cols="12">
      <app-card-code
        title="Table Cell Slot"
        :code="codeSnippets.codeTableCellSlot"
      >
        <datatable-cell-slot></datatable-cell-slot>
      </app-card-code>
    </v-col>

    <!-- row selection -->
    <v-col cols="12">
      <app-card-code
        title="Row selection"
        :code="codeSnippets.codeTableRowSelection"
      >
        <datatable-row-selection></datatable-row-selection>
      </app-card-code>
    </v-col>

    <!-- fixed header -->
    <v-col cols="12">
      <app-card-code
        title="Fixed Header"
        :code="codeSnippets.codeTableFixedHeader"
      >
        <datatable-fixed-header></datatable-fixed-header>
      </app-card-code>
    </v-col>

    <!-- grouping -->
    <v-col cols="12">
      <app-card-code
        title="Grouping"
        :code="codeSnippets.codeTableGrouping"
      >
        <datatable-grouping></datatable-grouping>
      </app-card-code>
    </v-col>

    <!-- expandable rows -->
    <v-col cols="12">
      <app-card-code
        title="Expandable Rows"
        :code="codeSnippets.codeTableExpandableRows"
      >
        <datatable-expandable-rows></datatable-expandable-rows>
      </app-card-code>
    </v-col>

    <!-- Row Editing via dialog -->
    <v-col cols="12">
      <app-card-code
        title="Row Editing via dialog"
        :code="codeSnippets.codeTableRowEditingViaDialog"
      >
        <datatable-row-editing-via-dialog></datatable-row-editing-via-dialog>
      </app-card-code>
    </v-col>

    <!-- Cell Editing via dialog -->
    <v-col cols="12">
      <app-card-code
        title="Cell Editing via dialog"
        :code="codeSnippets.codeTableCellEditingViaDialog"
      >
        <datatable-cell-editor-via-dialog></datatable-cell-editor-via-dialog>
      </app-card-code>
    </v-col>

    <!-- pagination -->
    <v-col cols="12">
      <app-card-code
        title="External Pagination"
        :code="codeSnippets.codeTableExternalPagination"
      >
        <datatable-external-pagination></datatable-external-pagination>
      </app-card-code>
    </v-col>

    <!-- kitchen sink -->
    <v-col cols="12">
      <app-card-code
        title="Kitchen Sink"
        :code="codeSnippets.codeTableKitchenSink"
      >
        <datatable-kitchen-sink></datatable-kitchen-sink>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DatatableBasic from './DatatableBasic.vue'
import DatatableDense from './DatatableDense.vue'
import DatatableFixedHeader from './DatatableFixedHeader.vue'
import DatatableGrouping from './DatatableGrouping.vue'
import DatatableCellSlot from './DatatableCellSlot.vue'
import DatatableExpandableRows from './DatatableExpandableRows.vue'
import DatatableRowEditingViaDialog from './DatatableRowEditingViaDialog.vue'
import DatatableCellEditorViaDialog from './DatatableCellEditorViaDialog.vue'
import DatatableExternalPagination from './DatatableExternalPagination.vue'
import DatatableKitchenSink from './DatatableKitchenSink.vue'
import DatatableRowSelection from './DatatableRowSelection.vue'

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
  codeTableRowSelection,
} from './code'

export default {
  components: {
    AppCardCode,
    DatatableBasic,
    DatatableDense,
    DatatableCellSlot,
    DatatableFixedHeader,
    DatatableGrouping,
    DatatableExpandableRows,
    DatatableRowEditingViaDialog,
    DatatableCellEditorViaDialog,
    DatatableExternalPagination,
    DatatableKitchenSink,
    DatatableRowSelection,
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
        codeTableRowSelection,
      },
    }
  },
}
</script>
