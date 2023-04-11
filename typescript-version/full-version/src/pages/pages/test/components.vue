<template>
  <h1>Components</h1>

  <div>
    <VCard>
      <VRow class="pa-5">
        <VCol cols="12">
          <VToolbar
            dark
            :elevation="7"
          >
            <VAppBarNavIcon>
              <VIcon>mdi-magnify</VIcon>
            </VAppBarNavIcon>
            <VToolbarTitle>Vuetify</VToolbarTitle>
            <VSpacer />

            <VBtn icon>
              <VIcon>mdi-export</VIcon>
            </VBtn>
          </VToolbar>
        </VCol>

        <VCol cols="12">
          <VToolbar density="compact">
            <VAppBarNavIcon />

            <VToolbarTitle>Toolbar compact density</VToolbarTitle>

            <VSpacer />

            <VBtn icon>
              <VIcon>mdi-magnify</VIcon>
            </VBtn>

            <VBtn icon>
              <VIcon>mdi-heart</VIcon>
            </VBtn>

            <VBtn icon>
              <VIcon>mdi-dots-vertical</VIcon>
            </VBtn>
          </VToolbar>
        </VCol>

        <VCol cols="12">
          <VToolbar density="comfortable">
            <VAppBarNavIcon />

            <VToolbarTitle>Toolbar comfortable density</VToolbarTitle>

            <VSpacer />

            <VBtn icon>
              <VIcon>mdi-magnify</VIcon>
            </VBtn>

            <VBtn icon>
              <VIcon>mdi-heart</VIcon>
            </VBtn>

            <VBtn icon>
              <VIcon>mdi-dots-vertical</VIcon>
            </VBtn>
          </VToolbar>
        </VCol>
      </VRow>
    </VCard>

    <br>
  </div>
</template>
