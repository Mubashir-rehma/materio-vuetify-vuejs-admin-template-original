# Composables

## createUrl

createUrl composable returns reactive url and to append required params to the query.
By using this composable, it will call an api endpoint every time there is a change in any of the query parameter.

```ts

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

We need to provide different images based on our current theme. For instance, we want to use `imgDark.png` for the dark theme and `imgLight.png` for the light mode. We'll pass both of these images as parameters to `useGenerateImageVariant` composable, and it will return the appropriate image depending on the current theme of the template. Refer to below code snippet.

```ts
import darkImage from '/assets/imgDark.png'
import lightImage from '/assets/imgLight.png'

const lightTheme = useGenerateImageVariant(lightImage, darkImage)
```

## useThemeConfig

This composable exposes various configs like theme, isVerticalNavSemiDark, skin and layout configs. Please refer to `src/@core/composable/useThemeConfig.ts` for more details.

```ts

const { isAppRtl, theme, skin } = useThemeConfig()
```
