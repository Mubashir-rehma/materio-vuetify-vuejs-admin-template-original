<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Tooltip on End
      <VTooltip
        activator="parent"
        anchor="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Start
      <VTooltip
        activator="parent"
        anchor="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Top
      <VTooltip
        activator="parent"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="outlined">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        anchor="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
