import { useTheme } from 'vuetify'
import { useConfigStore } from '@core/stores/config'

const configStore = useConfigStore()

// composable function to return the image variant as per the current theme and skin
export const useGenerateImageVariant = (imgLight: string, imgDark: string, imgLightBordered?: string, imgDarkBordered?: string, bordered = false) => {
  const { global } = useTheme()

  return computed(() => {
    if (global.name.value === 'light') {
      if (configStore.skin === 'bordered' && bordered)
        return imgLightBordered

      else
        return imgLight
    }
    if (global.name.value === 'dark') {
      if (configStore.skin === 'bordered' && bordered)
        return imgDarkBordered

      else
        return imgDark
    }
  })
}
