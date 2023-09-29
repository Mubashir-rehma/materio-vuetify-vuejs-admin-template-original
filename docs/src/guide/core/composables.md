# Composables

We have created a set of composables that simplifies our development. You can find all the composables at: `src/@core/composable/`. Below, you can find the comprehensive descriptions of each composable with their functionalities, intended use cases and example code snippet.

## createUrl

The createUrl composable appends query parameters to the URL and returns a reactive URL. Since it returns a reactive URL, any changes in the parameters will return a newly generated URL. We utilize this composable to make API calls to our endpoint. When the parameters change, the composable returns a new URL, allowing us to fetch data based on the updated parameters. This dynamic behavior ensures that our application can adapt to changing user input, enabling real-time updates and a seamless user experience.

```ts
//file: src/@core/composable/createurl.ts

const { data: referralData } = await useApi<any>(createUrl('/apps/ecommerce/referrals', {
  query: {
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}))
```

## useGenerateImageVariant

We need to provide different images based on our current theme. For instance, we want to use `imgDark.png` for the dark theme and `imgLight.png` for the light theme. We'll pass both of these images as parameters to `useGenerateImageVariant` composable, and it will return the appropriate image depending on the current theme. Please refer to below code snippet.

```ts
//file: src/@core/composable/useGenerateImageVariant.ts

import darkImage from '/assets/imgDark.png'
import lightImage from '/assets/imgLight.png'

const lightTheme = useGenerateImageVariant(lightImage, darkImage)
```

## useThemeConfig

This composable exposes various configs like theme, isVerticalNavSemiDark, skin and layout configs. Please refer to `src/@core/composable/useThemeConfig.ts` for more details.

```ts
// file: src/@core/composable/useThemeConfig.ts

const { isAppRtl, theme, skin } = useThemeConfig()
```
