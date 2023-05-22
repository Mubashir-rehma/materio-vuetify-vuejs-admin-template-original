<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        placeholder="placeholder text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        placeholder="placeholder text"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
