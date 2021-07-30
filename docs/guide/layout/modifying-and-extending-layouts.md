# Modifying/Extending Layouts

You can modify existing layout and create your own custom layouts as well.

Template's core layouts and it's components have scoped slots so you can update layout components without breaking the core layouts and easily get update of bug fixes and features.

On the other hand if you don't want to extend your layout from base layout (Which is not recommended) and want to create layout of your own with your own styles you can do that as well. Isn't this template so flexible 😍?

Our provided layouts in `src/layouts` is extended layout from our core layouts.

1. **blank**: Blank layout
2. **vertical**: Layout /w layout components but navigation menu type is vertical
3. **horizontal**: Layout /w layout components but navigation menu type is horizontal

::: tip INFO
`vertical` & `horizontal` are Layouts with layout components (2nd type of layout). These names are assigned based on navigation type.

1. **Vertical Layout** means Layout with layout components and navigation menu type is vertical
2. **Horizontal Layout** means Layout with layout components and navigation menu type is horizontal
   :::

## 1. Extending `blank` layout

Import blank layout from core layout and use it's default slot to render route using `<router-view>`.

```vue
<template>
  <layout-blank>
    <slot></slot>
  </layout-blank>
</template>

<script>
import LayoutBlank from '@/@core/layouts/variants/blank/LayoutBlank.vue'

export default {
  components: {
    LayoutBlank,
  },
}
</script>
```

This layout is simple and minimal so there's no extra stuff other than default slot. Still you can check core layouts section to get details.

::: tip
Check source code of core layout and it's components to find out how it handles layouts and configurations and what slots/scoped-slots are available to use.
:::

## 2. Extending content layout (Vertical Nav)

Import content layout w/ vertical nav from core layouts and use it's default slot to render route using `<router-view>`. You can also use `v-app-content` slot to render customizer.

<!-- prettier-ignore-start -->
```vue
<template>
  <layout-content-vertical-nav :nav-menu-items="navMenuItems">
    <slot></slot>

    <!-- Slot: Navbar -->
    <template #navbar>
      <p class="px-1 mb-0">
        I am in navbar, Everything else is removed
      </p>
    </template>

    <!-- Slot: Footer -->
    <template #footer>
      {{ new Date().getFullYear() }} — <strong>Custom Admin</strong>
    </template>

    <!-- Slot: VAppContent -->
    <template #v-app-content>
      <app-customizer class="d-none d-md-block"></app-customizer>
    </template>
  </layout-content-vertical-nav>
</template>

<script>
import LayoutContentVerticalNav from '@/@core/layouts/variants/content/vertical-nav/LayoutContentVerticalNav.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import navMenuItems from '@/navigation/vertical'

export default {
  components: {
    AppCustomizer,
    LayoutContentVerticalNav,
  },
  setup() {
    return {
      navMenuItems,
    }
  },
}
</script>
```
<!-- prettier-ignore-end -->

You can use slots/scoped-slots provided by core vertical layout to tweak this layout.

## 3. Extending Content layout (horizontal nav)

Import content layout w/ horizontal nav from core layouts and use it's default slot to render route using `<router-view>`. You can also use `v-app-content` slot to render customizer.

<!-- prettier-ignore-start -->
```vue{7}
<template>
  <layout-content-horizontal-nav :nav-menu-items="navMenuItems">
    <slot></slot>

    <!-- Slot: Navbar -->
    <template #navbar>
      <div class="navbar-content-container w-full">
        <p class="px-1 mb-0">
          I am in navbar, Everything else is removed
        </p>
      </div>
    </template>

    <!-- Slot: Footer -->
    <template #footer>
      {{ new Date().getFullYear() }} — <strong>Custom Admin</strong>
    </template>

    <!-- Slot: VAppContent -->
    <template #v-app-content>
      <app-customizer class="d-none d-md-block"></app-customizer>
    </template>
  </layout-content-horizontal-nav>
</template>

<script>
import LayoutContentHorizontalNav from '@core/layouts/variants/content/horizontal-nav/LayoutContentHorizontalNav.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import navMenuItems from '@/navigation/horizontal'

export default {
  components: {
    LayoutContentHorizontalNav,
    AppCustomizer,
  },
  setup() {
    return {
      navMenuItems,
    }
  },
}
</script>
```
<!-- prettier-ignore-end -->

You can use slots/scoped-slots provided by core horizontal layout to tweak this layout.

::: warning
You have to use `.navbar-content-container` wrapper in `navbar` slot for proper alignment of nav content
:::

**Conclusion**

Extending layout is really simple just import the core layout and make use of slots/scoped-slots to render your custom content. All scoped-slots have default component rendering so you don't have to use all scoped-slots, like you can still update navigation menu's title, logo and items using our flexible configuration.
