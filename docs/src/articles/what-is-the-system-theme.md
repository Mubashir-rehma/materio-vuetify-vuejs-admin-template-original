# What is the system theme?

We have implemented a new feature called `system theme` in our theme. This feature automatically detects the current theme of the user's operating system and adjusts the template theme accordingly, providing a seamless and cohesive experience.

## How it works

We can utilize the composable function [usePreferredDark](https://vueuse.org/core/usepreferreddark/#usepreferreddark) from the third-party Vueuse plugin to detect the current system theme preference of the user. The composable returns a boolean value, indicating whether the user prefers a dark theme (true) or a light theme (false). With this information, we can then assign the appropriate theme to Vuetify based on the response of the `usePreferredDark` composable.

How to get/calculate vuetify theme when system theme is enabled.

```ts

console.log(usePreferredDark().value ? 'dark' : 'light' ); // dark/light
```

## Reading theme

To get vuetify’s current theme (light/dark), you can use:

```ts
const currentTheme = vuetify.theme.global.name.value // light/dark
```

To get template’s current theme (light/dark/system), you can use:

```ts
import { useConfigStore } from '@core/stores/config'

const configStore = useConfigStore()

console.log(configStore.theme); //system/light/dark
```
