import { useThemeConfig } from '@core/composable/useThemeConfig'

const { theme, skin } = useThemeConfig()

// composable function to return the image variant as per the current theme and skin
export const useGenerateImageVariant = (
  lightImg: string,
  darkImg: string,
  lightBorderImg?: string,
  darkBorderImg?: string,
) => {
  return computed(() => {
    if (theme.value === 'dark') {
      if (skin.value === 'bordered' && darkBorderImg)
        return darkBorderImg
      else
        return darkImg
    }
    else {
      if (skin.value === 'bordered' && lightBorderImg)
        return lightBorderImg
      else
        return lightImg
    }
  })
}
