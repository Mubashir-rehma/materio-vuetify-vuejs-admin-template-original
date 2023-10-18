# How to update/modify configs in our template?

In our template, we have defined a store `useConfigStore` which facilitates getting and setting a variety of configuration options related to the theme and template. You can find this store in `@core/store/config.ts` file.

This store is used in the implementation of our customizer feature, which allows users to customize the theme and template according to their preferences. By utilizing `useConfigStore` store, users can easily modify various configuration settings to achieve the desired appearance and functionality of the template. Please refer to below code snippet for more info.

- `theme`: You can get and set the current theme of the application.

```js
import { useConfigStore } from '@core/stores/config'
const configStore = useConfigStore()

// Get
console.log(configStore.theme); // system/dark/light

// Set
configStore.theme = 'dark'
```

- `isVerticalNavSemiDark`: Semi dark options (`true` / `false`).
- `skin`: Skin options ( `bordered` / `default`).
- `appRouteTransition`: Route transition options (`fade` / `none`).
- `navbarType`: Navbar Options (`sticky` / `static` / `hidden`).
- `isNavbarBlurEnabled`: Navbar Blur options (`true` / `false`).
- `footerType`: Footer Options (`sticky` / `static` / `hidden`).
- `isVerticalNavCollapsed`: Vertical Nav Options (`true` / `false`).
- `appContentWidth`: App content width options (`boxed` / `fluid`).
- `appContentLayoutNav`: Layout nav options (`Vertical` / `Horizontal`).
- `horizontalNavType`: Horizontal nav type options (`sticky` / `static` / `hidden`).
- `isAppRtl`: App rtl options (`true` / `false`).
