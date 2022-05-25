<script setup lang="ts">
import * as demoCode from '@/views/demos/forms/form-layout/demoCodeFormLayout'
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
        <DemoFormLayoutHorizontalForm />
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
        <DemoFormLayoutHorizontalFormWithIcons />
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
  </v-row>

  <v-row class="match-height my-3">
    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Form Hint -->
      <AppCardCode
        title="Form Hint"
        :code="demoCode.formHint"
      >
        <DemoFormLayoutFormHint />
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
        <DemoFormLayoutFormValidation />
      </AppCardCode>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12">
      <!-- 👉 Form with Tabs -->
      <AppCardCode
        title="Form with Tabs"
        no-padding
        :code="demoCode.formWithTabs"
      >
        <DemoFormLayoutFormWithTabs />
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
