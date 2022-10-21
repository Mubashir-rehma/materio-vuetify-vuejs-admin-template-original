# RTL

## Changing direction to RTL

For changing direction to RTL just set `app.isRtl` in theme config to `true`

## Writing RTL compatible SCSS

For RTL, we use [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) just like vuetify for styles.

Logical properties allows writing style for both LTR & RTL without any extra efforts.

We are using stylelint to convert existing property into logical property on save. E.g. If you write `width: 100px;` then stylelint will show linting error suggesting we should write `inline-size` instead of `width`. Without changing `width` to `inline-size` if you save your file in VSCode, stylelint will automatically fix this and convert `width` to `inline-size` 😍

:::warning
You need [stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) to convert property to logical property on save with proper configuration
:::

## Mutating direction at runtime

To get current direction of the app, you can use `useThemeConfig` composable:

```ts
import { useThemeConfig } from '@core/composable/useThemeConfig'

const { isAppRtl } = useThemeConfig()
```

`isAppRtl` is [ref](https://vuejs.org/api/reactivity-core.html#ref), you can set boolean value to mutate the app direction.

e.g. Set app direction to RTL via:

```ts
import { useThemeConfig } from '@core/composable/useThemeConfig'

const { isAppRtl } = useThemeConfig()

isAppRtl.value = true
```
