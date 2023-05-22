<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        placeholder="placeholder text"
        prepend-icon="mdi-comment-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="mdi-comment-outline"
        placeholder="placeholder text"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="mdi-comment-outline"
        label="prepend-inner-icon"
        placeholder="placeholder text"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="mdi-comment-outline"
        label="append-inner-icon"
        placeholder="placeholder text"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
