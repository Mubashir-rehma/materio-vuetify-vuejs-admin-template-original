# Layouts

We provide two layouts in our template:

1. Default
2. Blank layout

## Default layout

Default layout includes:

- Navigation (vertical or horizontal)
- Navbar
- Footer

Whenever you create a new page your content will get rendered in this layout.

Minimal code required for default layout is below:

<!-- TODO: Add code snippet for default layout  -->

Default layout provides below slots to render your desired content.

### default

This for rendering `router-view` tag. It doesn't have any slot props.

### vertical-nav-header

<!-- TODO: Add theme configuration page link -->
<!-- TODO: Add image here just like vuexy docs -->
<!-- TODO: Add code snippet here just like vuexy docs -->

We do provide simple config to update logo and title of the app via theme configuration. Still, if you want to render some custom content then `vertical-nav-header` slots allows you to render custom content.

### navbar

`navbar` slot allows you to render your desired content in navbar of default layout.

<!-- TODO: Add image here just like vuexy docs -->
<!-- TODO: Add code snippet here just like vuexy docs -->

### footer

`footer` slot allows you to render your desired content in footer of default layout.

<!-- TODO: Add image here just like vuexy docs -->
<!-- TODO: Add code snippet here just like vuexy docs -->

## Blank layout

Blank layout doesn't contain any element. It is completely blank so you can create pages however you like.

Please read [this](/guide/how-to-create-a-new-page.md#using-different-layout) guide to set blank layout for your page.

## Extending layouts

Generally, our provided slots are enough to get started. However, You can also create your own layouts using our layout components. check out [this](#) advanced guide for extending layouts.
