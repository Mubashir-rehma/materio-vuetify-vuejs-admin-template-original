<script setup lang="ts">
import * as demoCode from '@/views/forms/form-elements/textarea/demos/demoCodeTextarea'

// 👉 Demos
import DemoTextareaBasic from '@/views/forms/form-elements/textarea/demos/DemoTextareaBasic.vue'
import DemoTextareaAutoGrow from '@/views/forms/form-elements/textarea/demos/DemoTextareaAutoGrow.vue'
import DemoTextareaVariant from '@/views/forms/form-elements/textarea/demos/DemoTextareaVariant.vue'
import DemoTextareaStates from '@/views/forms/form-elements/textarea/demos/DemoTextareaStates.vue'
import DemoTextareaClearable from '@/views/forms/form-elements/textarea/demos/DemoTextareaClearable.vue'
import DemoTextareaCounter from '@/views/forms/form-elements/textarea/demos/DemoTextareaCounter.vue'
import DemoTextareaIcons from '@/views/forms/form-elements/textarea/demos/DemoTextareaIcons.vue'
import DemoTextareaRows from '@/views/forms/form-elements/textarea/demos/DemoTextareaRows.vue'
import DemoTextareaNoResize from '@/views/forms/form-elements/textarea/demos/DemoTextareaNoResize.vue'
import DemoTextareaValidation from '@/views/forms/form-elements/textarea/demos/DemoTextareaValidation.vue'
import DemoTextareaBrowserAutocomplete from '@/views/forms/form-elements/textarea/demos/DemoTextareaBrowserAutocomplete.vue'
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
        <p>
          v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text.
        </p>

        <DemoTextareaBasic />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Auto Grow -->
      <AppCardCode
        title="Auto Grow"
        :code="demoCode.autoGrow"
      >
        <p>When using the <code>auto-grow</code> prop, textarea's will automatically increase in size when the contained text exceeds its size.</p>

        <DemoTextareaAutoGrow />
      </AppCardCode>
    </v-col>

    <v-col cols="12">
      <!-- 👉 Variant -->
      <AppCardCode
        title="Variant"
        :code="demoCode.variant"
      >
        <p>Use <code>filled</code>, <code>plain</code>, <code>outlined</code>, <code>contained</code> and <code>underlined</code> option of <code>variant</code> prop to change the look of file input.</p>

        <DemoTextareaVariant />
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
        <p>Use <code>disabled</code> and <code>readonly</code> prop to change the state of textarea.</p>

        <DemoTextareaStates />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Browser autocomplete -->
      <AppCardCode
        title="Browser autocomplete"
        :code="demoCode.browserAutocomplete"
      >
        <p>
          The <code>autocomplete</code> prop gives you the option to enable the browser to predict user input.
        </p>

        <DemoTextareaBrowserAutocomplete />
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
        <p>You can clear the text from a <code>v-textarea</code> by using the <code>clearable</code> prop, and customize the icon used with the <code>clearable-icon</code> prop.</p>

        <DemoTextareaClearable />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Counter -->
      <AppCardCode
        title="Counter"
        :code="demoCode.counter"
      >
        <p>
          The <code>counter</code> prop informs the user of a character limit for the <code>v-textarea</code>.
        </p>

        <DemoTextareaCounter />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Icons -->
      <AppCardCode
        title="Icons"
        :code="demoCode.icons"
      >
        <p>The <code>append-icon</code>, <code>prepend-icon</code>, <code>append-inner-icon</code> and <code>prepend-inner-icon</code> props help add context to v-textarea.</p>

        <DemoTextareaIcons />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Rows -->
      <AppCardCode
        title="Rows"
        :code="demoCode.rows"
      >
        <p>The <code>rows</code> prop allows you to define how many rows the textarea has, when combined with the <code>row-height</code> prop you can further customize your rows by defining their height.</p>

        <DemoTextareaRows />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 No resize -->
      <AppCardCode
        title="No resize"
        :code="demoCode.noResize"
      >
        <p><code>v-textarea</code>'s have the option to remain the same size regardless of their content's size, using the <code>no-resize</code> prop.</p>

        <DemoTextareaNoResize />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Validation -->
      <AppCardCode
        title="Validation"
        :code="demoCode.validation"
      >
        <p>Use <code>rules</code> prop to validate the textarea.</p>

        <DemoTextareaValidation />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
