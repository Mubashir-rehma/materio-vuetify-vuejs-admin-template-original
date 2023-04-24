# Perfect Scrollbar

We use perfect scrollbar to replace browser default scrollbar.

## Usage

We have used local registration in our whole template for perfect scrollbar.

Please refer to the official docs [here](https://github.com/mercs600/vue3-perfect-scrollbar#local-registration).

::: code-group

```vue [TS]
<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
</script>

<template>
  <PerfectScrollbar>
    <!-- Your long content -->
  </PerfectScrollbar>
</template>
```

```vue [JS]
<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
</script>

<template>
  <PerfectScrollbar>
    <!-- Your long content -->
  </PerfectScrollbar>
</template>
```

:::

## Styles

There's no need to import styles locally as shown in official docs as it is already imported by layouts plugin.
