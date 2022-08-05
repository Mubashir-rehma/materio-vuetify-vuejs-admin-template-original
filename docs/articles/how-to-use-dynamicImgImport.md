# How to use `dynamicImgImport`

In vue 2 with webpack, we used to render image like below:

```html
<img :src="require('@/path/to/img.extension')" />
```

However, we don't have `require` function in vue 3 using vite. In vue 3 + vite we had to import the image first and later we can use it:

<code-group>
<code-block title="TS">

```vue{2}
<script setup lang="ts">
import avatar1 from '@/assets/images/avatars/avatar-1.png'
</script>

<template>
    <img :src="avatar1" />
</template>
```

</code-block>

<code-block title="JS">

```vue{2}
<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
</script>

<template>
    <img :src="avatar1" />
</template>
```

</code-block>
</code-group>

However, this requires importing every image we use. Assume we have 10 images to render and for this we need 10 imports.

We can overcome this by our template's utility function `dynamicImgImport`. With this utility function we can write above code like below:

```vue
<template>
    <img :src="dynamicImgImport('@/assets/images/avatars/avatar-1.png')" />
</template>
```

You don't have to import `dynamicImgImport` as well it is auto imported 😍

Basically, `dynamicImgImport` is clone of `require`.
