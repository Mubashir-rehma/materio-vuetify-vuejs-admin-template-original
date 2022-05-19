<script setup lang="ts">
import * as demoCode from '@/views/forms/form-layout/demos/demoCodeFormLayout'

// 👉 Demos
import DemoFormLayoutCollapsible from '@/views/forms/form-layout/demos/DemoFormLayoutCollapsible.vue'
import DemoFormLayoutHint from '@/views/forms/form-layout/demos/DemoFormLayoutHint.vue'
import DemoFormLayoutHorizontal from '@/views/forms/form-layout/demos/DemoFormLayoutHorizontal.vue'
import DemoFormLayoutHorizontalIcon from '@/views/forms/form-layout/demos/DemoFormLayoutHorizontalIcon.vue'
import DemoFormLayoutMultipleColumn from '@/views/forms/form-layout/demos/DemoFormLayoutMultipleColumn.vue'
import DemoFormLayoutTabs from '@/views/forms/form-layout/demos/DemoFormLayoutTabs.vue'
import DemoFormLayoutValidation from '@/views/forms/form-layout/demos/DemoFormLayoutValidation.vue'
import DemoFormLayoutVerticalForm from '@/views/forms/form-layout/demos/DemoFormLayoutVerticalForm.vue'
import DemoFormLayoutVerticalFormWithIcons from '@/views/forms/form-layout/demos/DemoFormLayoutVerticalFormWithIcons.vue'
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Horizontal Form -->
      <AppCardCode
        title="Horizontal Form"
        :code="demoCode.horizontalForm"
      >
        <DemoFormLayoutHorizontal />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Horizontal Form with Icons -->
      <AppCardCode
        title="Horizontal Form with Icons"
        :code="demoCode.horizontalFormWithIcons"
      >
        <DemoFormLayoutHorizontalIcon />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Vertical Form -->
      <AppCardCode
        title="Vertical Form"
        :code="demoCode.verticalForm"
      >
        <DemoFormLayoutVerticalForm />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Vertical Form with Icons -->
      <AppCardCode
        title="Vertical Form with Icons"
        :code="demoCode.verticalFormWithIcons"
      >
        <DemoFormLayoutVerticalFormWithIcons />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Multiple Column -->
      <AppCardCode
        title="Multiple Column"
        :code="demoCode.multipleColumn"
      >
        <DemoFormLayoutMultipleColumn />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Form Hint -->
      <AppCardCode
        title="Form Hint"
        :code="demoCode.formHint"
      >
        <DemoFormLayoutHint />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Form Validation -->
      <AppCardCode
        title="Form Validation"
        :code="demoCode.formValidation"
      >
        <DemoFormLayoutValidation />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Form with Tabs -->
      <AppCardCode
        title="Form with Tabs"
        no-padding
        :code="demoCode.formWithTabs"
      >
        <DemoFormLayoutTabs />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Collapsible Section -->
      <h4 class="text-h6 font-weight-medium mb-5">
        Collapsible Section
      </h4>

      <DemoFormLayoutCollapsible />
    </v-col>
  </v-row>
</template>
