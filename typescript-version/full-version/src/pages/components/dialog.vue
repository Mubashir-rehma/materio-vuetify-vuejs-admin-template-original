<script setup lang="ts">
import * as demoCode from '@/views/components/dialog/demos/demoCodeDialog'
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
        <p>A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.</p>

        <DemoDialogBasic />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Persistent -->
      <AppCardCode
        title="Persistent"
        :code="demoCode.persistent"
      >
        <p>Use <code>persistent</code> prop to create persistent dialog.</p>

        <DemoDialogPersistent />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Scrollable -->
      <AppCardCode
        title="Scrollable"
        :code="demoCode.scrollable"
      >
        <p>Use <code>scrollable</code> prop to create scrollable dialog.</p>

        <DemoDialogScrollable />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Loader -->
      <AppCardCode
        title="Loader"
        :code="demoCode.loader"
      >
        <p>The <code>v-dialog</code> component makes it easy to create a customized loading experience for your application.</p>

        <DemoDialogLoader />
      </AppCardCode>
    </v-col>

    <v-col
      col="12"
      md="6"
    >
      <!-- 👉 Nesting -->
      <AppCardCode
        title="Nesting"
        :code="demoCode.nesting"
      >
        <p>Dialogs can be nested: you can open one dialog from another.</p>

        <DemoDialogNesting />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Overflowed -->
      <AppCardCode
        title="Overflowed"
        :code="demoCode.overflowed"
      >
        <p>Modals that do not fit within the available window space will scroll the container.</p>

        <DemoDialogOverflowed />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Fullscreen -->
      <AppCardCode
        title="Fullscreen"
        :code="demoCode.fullScreen"
      >
        <p>Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.</p>

        <DemoDialogFullScreen />
      </AppCardCode>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- 👉 Form -->
      <AppCardCode
        title="Form"
        :code="demoCode.form"
      >
        <p>Just a simple example of a form in a dialog.</p>

        <DemoDialogForm />
      </AppCardCode>
    </v-col>
  </v-row>
</template>
