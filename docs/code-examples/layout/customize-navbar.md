# Customize navbar

In this guide we will look at how you can customize the navbar in both layout components (`VerticalNavLayout` and `HorizontalNavLayout`) provided by `layouts` plugin.

Both components provide `navbar` scoped slot that you can use to add custom content to the navbar.

## Vertical nav layout

This layout component is used in `@/layouts/components/DefaultLayoutWithVerticalNav.vue` file. In there, there's already a `navbar` scoped slot in use, you can customize it according to your needs.

```vue{7-9}
<template>
  <VerticalNavLayout
    :nav-items="navItems"
    v-bind="layoutAttrs"
  >
    <!-- 👉 navbar -->
    <template #navbar>
      <span>My custom content</span>
    </template>

    <!-- Other content -->
  </VerticalNavLayout>
</template>
```

_Result:_

![Navbar slot usage](/images/code-examples/layout/navbar-slot-usage-vertical.png)

## Horizontal nav layout

This layout component is used in `@/layouts/components/DefaultLayoutWithHorizontalNav.vue` file. In there, there's already a `navbar` scoped slot in use, you can customize it according to your needs.

```vue{7-9}
<template>
  <HorizontalNavLayout
    :nav-items="navItems"
    v-bind="layoutAttrs"
  >
    <!-- 👉 navbar -->
    <template #navbar>
      <span>My custom content</span>
    </template>

    <!-- Other content -->
  </HorizontalNavLayout>
</template>
```

_Result:_

![Navbar slot usage](/images/code-examples/layout/navbar-slot-usage-horizontal.png)