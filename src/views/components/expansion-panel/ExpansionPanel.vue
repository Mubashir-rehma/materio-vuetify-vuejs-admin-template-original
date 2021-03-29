<template>
  <v-row>
    <v-col
      md="6"
      cols="12"
    >
      <!-- default -->
      <app-card-code
        title="Default"
        :code="codeSnippets.exPanelDefault"
        class="mb-6"
      >
        <v-card-text>
          Expansion panels in their simplest form display a list of expandable items. However, with the <code>multiple</code> prop, the expansion-panel can remain open until explicitly closed.
        </v-card-text>

        <v-card-text>
          <demo-expansion-panel-default></demo-expansion-panel-default>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- accordion -->
      <app-card-code
        title="Accordion"
        :code="codeSnippets.exPanelAccordion"
        class="mb-6"
      >
        <v-card-text>
          Use <code>accordion</code> prop to create Accordion Panels. <span class="font-weight-bold">Accordion</span> expansion-panel hasn’t got margins around active panel.
        </v-card-text>

        <v-card-text>
          <demo-expansion-panel-accordion></demo-expansion-panel-accordion>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- focusable -->
      <app-card-code
        title="Focusable"
        :code="codeSnippets.exPanelFocusable"
        class="mb-6"
      >
        <v-card-text>
          The expansion-panel headers can be made focusable with the prop <code>focusable</code>.
        </v-card-text>

        <v-card-text>
          <demo-expansion-panel-focusable></demo-expansion-panel-focusable>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- inset -->
      <app-card-code
        title="Inset"
        :code="codeSnippets.exPanelInset"
        class="mb-6"
      >
        <v-card-text>
          Use <code>inset</code> prop to create Inset Panels. <span class="font-weight-bold">inset</span> expansion-panel becomes smaller when activated.
        </v-card-text>

        <v-card-text>
          <demo-expansion-panel-inset></demo-expansion-panel-inset>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- popout  -->
      <app-card-code
        title="Popout"
        :code="codeSnippets.exPanelPopout"
        class="mb-6"
      >
        <v-card-text>
          Use <code>popout</code> prop to create expansion-panel with <span class="font-weight-bold">popout</span> design. With it, expansion-panel is enlarged when activated.
        </v-card-text>

        <v-card-text>
          <demo-expansion-panel-popout></demo-expansion-panel-popout>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- custom icons -->
      <app-card-code
        title="Custom Icon"
        :code="codeSnippets.exPanelIcon"
      >
        <v-card-text>
          Expand action icon can be customized with <code>expand-icon</code> prop or the <code>actions</code> slot.
        </v-card-text>

        <v-card-text>
          <demo-expansion-panel-icon></demo-expansion-panel-icon>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- model -->
      <app-card-code
        title="Model"
        :code="codeSnippets.exPanelModel"
        class="mb-6"
      >
        <v-card-text>
          Expansion panels can be controlled externally by modifying the <code>v-model</code>. If <code>multiple</code> prop is used then it is an array containing the indices of the open items.
        </v-card-text>

        <v-card-text>
          <demo-expansion-panel-model></demo-expansion-panel-model>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoExpansionPanelDefault from './demos/DemoExpansionPanelDefault.vue'
import DemoExpansionPanelAccordion from './demos/DemoExpansionPanelAccordion.vue'
import DemoExpansionPanelFocusable from './demos/DemoExpansionPanelFocusable.vue'
import DemoExpansionPanelInset from './demos/DemoExpansionPanelInset.vue'
import DemoExpansionPanelModel from './demos/DemoExpansionPanelModel.vue'
import DemoExpansionPanelPopout from './demos/DemoExpansionPanelPopout.vue'
import DemoExpansionPanelIcon from './demos/DemoExpansionPanelIcon.vue'

// code
import {
  exPanelDefault,
  exPanelAccordion,
  exPanelFocusable,
  exPanelInset,
  exPanelModel,
  exPanelPopout,
  exPanelIcon,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoExpansionPanelDefault,
    DemoExpansionPanelAccordion,
    DemoExpansionPanelFocusable,
    DemoExpansionPanelInset,
    DemoExpansionPanelModel,
    DemoExpansionPanelPopout,
    DemoExpansionPanelIcon,
  },
  setup() {
    return {
      codeSnippets: {
        exPanelDefault,
        exPanelAccordion,
        exPanelFocusable,
        exPanelInset,
        exPanelModel,
        exPanelPopout,
        exPanelIcon,
      },
    }
  },
}
</script>
