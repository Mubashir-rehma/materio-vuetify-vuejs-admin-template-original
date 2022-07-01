import { useThemeConfig } from '@core/composable/useThemeConfig'

const { theme, skin } = useThemeConfig()

// composable function to return the image variant as per the current theme and skin
export const useGenerateImageVariant = (imageURL: string, bordered = false) => {
  return computed(() => {
    const currentSkin = (skin.value === 'bordered' && bordered) ? 'bordered-' : ''

    /*
    Assume img url is: '@/assets/images/pages/knowledge-base-bg.png'

    url.split('@/')[1] <= Will remove leading `@/` from path => assets/images/pages/knowledge-base-bg.png
    url.split('@/')[1].split('.') will give => ['assets/images/pages/knowledge-base-bg', 'png']
  */
    const [img_path, ext] = imageURL.split('@/')[1].split('.')

    return new URL(`../../${img_path}-${currentSkin}${theme.value}.${ext}`, import.meta.url).href
  })
}
