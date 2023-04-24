# How to use `useThemeConfig.ts` file

In our template, there is a composable function named `useThemeConfig.ts` which facilitates getting or setting a variety of configuration options related to the theme and template.

This function is used in the implementation of our customizer feature, which allows users to customize the theme and template according to their preferences. By utilizing useThemeConfig.ts, users can easily modify various configuration settings to achieve the desired appearance and functionality of the template.

- `theme`: You can get and set the current theme of the application.

```js
import { useThemeConfig } from '@core/composable/useThemeConfig'
const { theme } = useThemeConfig()

// Get
console.log(theme.value); // system/dark/light

// Set
theme.value = 'dark'
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
