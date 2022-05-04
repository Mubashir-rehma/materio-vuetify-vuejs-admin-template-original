<script setup lang="ts">
import * as demoCode from '@/views/components/expansion-panel/demos/demoCodeExpansionPanel'

// demos
import DemoExpansionPanelAccordion from '@/views/components/expansion-panel/demos/DemoExpansionPanelAccordion.vue'
import DemoExpansionPanelBasic from '@/views/components/expansion-panel/demos/DemoExpansionPanelBasic.vue'
import DemoExpansionPanelIcon from '@/views/components/expansion-panel/demos/DemoExpansionPanelIcon.vue'
import DemoExpansionPanelInset from '@/views/components/expansion-panel/demos/DemoExpansionPanelInset.vue'
import DemoExpansionPanelModel from '@/views/components/expansion-panel/demos/DemoExpansionPanelModel.vue'
import DemoExpansionPanelPopout from '@/views/components/expansion-panel/demos/DemoExpansionPanelPopout.vue'

</script>

<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Basic  -->
      <AppCardCode
        title="Basic"
        variant="outlined"
        :code="demoCode.basic"
      >
        <p>Expansion panels in their simplest form display a list of expandable items. However, with the <code>multiple</code> prop, the expansion-panel can remain open until explicitly closed.</p>

        <DemoExpansionPanelBasic />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Accordion -->
      <AppCardCode
        title="Accordion"
        variant="outlined"
        :code="demoCode.accordion"
      >
        <p>Use <code>accordion</code> variant option to create <strong>Accordion</strong> Panels. Accordion expansion-panel hasn't got margins around active panel.</p>

        <DemoExpansionPanelAccordion />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Inset -->
      <AppCardCode
        title="Inset"
        variant="outlined"
        :code="demoCode.inset"
      >
        <p>Use <code>inset</code> variant option to create Inset Panels. The Inset expansion-panel becomes smaller when activated.</p>

        <DemoExpansionPanelInset />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Popout -->
      <AppCardCode
        title="Popout"
        variant="outlined"
        :code="demoCode.popout"
      >
        <p>
          Use <code>popout</code> variant option to create expansion-panel with popout design. With it, expansion-panel is enlarged when activated.
        </p>

        <DemoExpansionPanelPopout />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Custom Icon -->
      <AppCardCode
        title="Custom Icon"
        variant="outlined"
        :code="demoCode.customIcon"
      >
        <p>Expand action icon can be customized with <code>expand-icon</code> prop or the <code>actions</code> slot.</p>

        <DemoExpansionPanelIcon />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Model -->
      <AppCardCode
        title="Model"
        variant="outlined"
        :code="demoCode.model"
      >
        <p>Expansion panels can be controlled externally by modifying the <code>v-model</code>. If <code>multiple</code> prop is used then it is an array containing the indices of the open items.</p>

        <DemoExpansionPanelModel />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
