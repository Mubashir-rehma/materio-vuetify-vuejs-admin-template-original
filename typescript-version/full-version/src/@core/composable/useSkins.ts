import { VThemeProvider } from 'vuetify/lib/components/VThemeProvider/VThemeProvider.mjs'
import { EnumAppContentLayoutNav } from '@layouts/enums'

// TODO: Use `VThemeProvider` from dist instead of lib (Using this component from dist causes navbar to loose sticky positioning)
import { useThemeConfig } from '@core/composable/useThemeConfig'

export const useSkins = () => {
  const { isVerticalNavSemiDark, skin, appContentLayoutNav } = useThemeConfig()

  const layoutAttrs = computed(() => {
    const returnVal: { class: string; verticalNavAttrs?: Record<string, any> } = { class: `skin--${skin.value}`, verticalNavAttrs: undefined }

    if (isVerticalNavSemiDark.value && appContentLayoutNav.value === EnumAppContentLayoutNav.Vertical)
      returnVal.verticalNavAttrs = { tag: h(VThemeProvider, { tag: 'aside' }), withBackground: true, theme: 'dark' }

    return returnVal
  })

  return {
    layoutAttrs,
  }
}
