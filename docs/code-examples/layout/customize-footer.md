# Customize footer

In this guide we will look at how you can customize the footer in both layout components (`VerticalNavLayout` and `HorizontalNavLayout`) provided by `layouts` plugin.

Both components provide `footer` slot that you can use to add custom content to the footer.

## Vertical nav layout

This layout component is used in `@/layouts/components/DefaultLayoutWithVerticalNav.vue` file. In there, there's already a `footer` slot in use, you can customize it according to your needs.

```vue{7-11}
<template>
  <VerticalNavLayout
    :nav-items="navItems"
    v-bind="layoutAttrs"
  >
    <!-- 👉 footer -->
    <template #footer>
      <div class="h-100 d-flex align-center">
        <span>My custom content</span>
      </div>
    </template>

    <!-- Other content -->
  </VerticalNavLayout>
</template>
```

_Result:_

<img :src="$withBase('/images/code-examples/layout/footer-slot-usage-vertical.png')" alt="footer-slot-usage-vertical.png">

## Horizontal nav layout

This layout component is used in `@/layouts/components/DefaultLayoutWithHorizontalNav.vue` file. In there, there's already a `footer` slot in use, you can customize it according to your needs.

```vue{7-11}
<template>
  <HorizontalNavLayout
    :nav-items="navItems"
    v-bind="layoutAttrs"
  >
    <!-- 👉 footer -->
    <template #footer>
      <div class="h-100 d-flex align-center">
        <span>My custom content</span>
      </div>
    </template>

    <!-- Other content -->
  </HorizontalNavLayout>
</template>
```

_Result:_

<img :src="$withBase('/images/code-examples/layout/footer-slot-usage-horizontal.png')" alt="footer-slot-usage-horizontal.png">
