# Page Layout Examples

## Collapsed Menu

Demo: [View Live Demo](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/page-layouts/collapsed-menu)

### Using themeConfig file

You can set vertical navigation menu collapsed by just updating `/themeConfig.js` file.

```js{7}
export const $themeConfig = {
  // ...
  layout: {
    // ...
    menu: {
      hidden: false,
      isCollapsed: true,
    },
    // ...
  },
}
```

### Using vuex store

If you want to set collapsed menu for only any specific page then then you can achieve this using vuex store.

```vue
<script>
export default {
  // ...
  data() {
    return {
      // Store the value in data before we update the value so later we can restore the same value when user leaves the page
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
    }
  },
  created() {
    // Set `appConfig` when page/SFC is created
    this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', true)
  },
  destroyed() {
    // Restore the state value of `appConfig` when page/SFC is destroyed
    this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', this.isVerticalMenuCollapsed)
  },
}
</script>
```

## Boxed Content

Demo: [View Live Demo](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/page-layouts/boxed-layout)

### Using themeConfig file

You can use boxed content by just updating `/themeConfig.js` file.

```js{5}
export const $themeConfig = {
  // ...
  layout: {
    // ...
    contentWidth: 'boxed',
    // ...
  },
}
```

### Using vuex store

If you want to set boxed content for only any specific page then then you can achieve this using vuex store.

```vue
<script>
export default {
  // ...
  data() {
    return {
      // Store the value in data before we update the value so later we can restore the same value when user leaves the page
      contentWidth: this.$store.state.appConfig.layout.contentWidth,
    }
  },
  created() {
    // Set `appConfig` when page/SFC is created
    this.$store.commit('appConfig/UPDATE_CONTENT_WIDTH', 'boxed')
  },
  destroyed() {
    // Restore the state value of `appConfig` when page/SFC is destroyed
    this.$store.commit('appConfig/UPDATE_CONTENT_WIDTH', this.contentWidth)
  },
}
</script>
```

## Layout Without Menu

Demo: [View Live Demo](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/page-layouts/without-menu)

### Using themeConfig file

You can disable/hide navigation menu just updating `/themeConfig.js` file.

```js{6}
export const $themeConfig = {
  // ...
  layout: {
    // ...
    menu: {
      hidden: true,
      isCollapsed: false,
    },
    // ...
  },
}
```

### Using vuex store

If you want to hide/disable navigation menu for only any specific page then then you can achieve this using vuex store.

```vue
<script>
export default {
  // ...
  data() {
    return {
      // Store the value in data before we update the value so later we can restore the same value when user leaves the page
      menuHidden: this.$store.state.appConfig.layout.menu.hidden,
    }
  },
  created() {
    // Set `appConfig` when page/SFC is created
    this.$store.commit('appConfig/UPDATE_NAV_MENU_HIDDEN', true)
  },
  destroyed() {
    // Restore the state value of `appConfig` when page/SFC is destroyed
    this.$store.commit('appConfig/UPDATE_NAV_MENU_HIDDEN', this.menuHidden)
  },
}
</script>
```

## Layout Empty

Demo: [View Live Demo](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/page-layouts/layout-empty)

:::warning NOTE
This is means layout w/ layout components but with empty content.
:::

As this is preferred layout for most admin panels this layout is set as default. All you have to do is write content in your SFC and it will be rendered in your content area.

## Layout Blank

Demo: [View Live Demo](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/page-layouts/layout-blank)

This is blank layout type. You will have full control over your page layout as this layout type don't have any components included.

You can use blank layout type for page by setting `layout` route meta value to `full`.

```js{6}
{
  path: '/page-layouts/layout-blank',
  name: 'page-layout-layout-blank',
  component: () => import('@/views/ui/page-layouts/LayoutBlank.vue'),
  meta: {
    layout: 'full',
    pageTitle: 'Layout Blank',
  },
},
```
