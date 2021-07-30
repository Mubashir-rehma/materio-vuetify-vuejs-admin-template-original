# Core Layouts

There's two layouts in core same your layouts.

1. Blank Layout
2. Content Layout
   1. With Vertical Nav
   2. With Horizontal Nav

Let's dive in what each of them has to offer so you can customize the template and render your own content in our flexible layouts.

## 1. Blank Layout

Blank layout is really simple it just have layout classes wrapper and default slot.

## 2.1 Content Layout w/ Vertical Nav

Content layout w/ Vertical nav provides below slots/scoped-slots to render your custom content in component:

### navbar (scoped slot)

Use this scoped slot to render your custom navbar. You need to use this scoped slots to override our template's default navbar, you will not use our demo navbar in your project, right? 😉

<!-- prettier-ignore-start -->
```html{5-10}
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

_Result:_

<img :src="$withBase('/images/demo-imgs/layout/vertical-layout-navbar-slot.png')" alt="vertical-layout-navbar-slot" class="medium-zoom rounded bordered">

_Slot Props:_

| name                        | description                                            | type     |
| --------------------------- | ------------------------------------------------------ | -------- |
| isVerticalNavMenuActive     | Property indicating if vertical nav menu is active     | boolean  |
| toggleVerticalNavMenuActive | Toggle visibility of vertical menu (For small screens) | function |

### default

This for rendering `router-view` tag. It doesn't have any slot props.

### footer

This is useful to render your content in footer.

<!-- prettier-ignore-start -->
```html{12-15}
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

_Result:_

<img :src="$withBase('/images/demo-imgs/layout/footer-slot.png')" alt="footer-slot" class="medium-zoom rounded bordered">

### v-app-content

This slot is useful if you want to render something as child of `v-app`. In our case we are rendering customizer.

<!-- prettier-ignore-start -->
```html{17-20}
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

## 3. Horizontal Layout

Horizontal layout provides below slots/scoped-slots to render your custom content in component:

### navbar (scoped slot)

Same as vertical layout. For rendering your own navbar content.

<!-- prettier-ignore-start -->
```html{5-12}
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

_Result:_

<img :src="$withBase('/images/demo-imgs/layout/horizontal-layout-navbar-slot.png')" alt="horizontal-layout-navbar-slot" class="medium-zoom rounded bordered">

### default slot

_Same as vertical layout_

### footer slot

_Same as vertical layout_

### v-app-content

_Same as vertical layout_
