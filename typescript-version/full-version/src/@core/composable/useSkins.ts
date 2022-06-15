// TODO: Use `VThemeProvider` from dist instead of lib (Using this component from dist causes navbar to loose sticky positioning)
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { VThemeProvider } from 'vuetify/lib/components/VThemeProvider/VThemeProvider.mjs'
import { EnumSkins } from '../enums'

export const useSkins = () => {
  const { theme, skin } = useThemeConfig()

  /*
    💡 This will disallow setting skin to semi-dark and theme to dark at the same time
    In our template using semi-dark skin and dark theme at the same time is invalid configuration
  */
  const useValidSkin = () => watch([skin, theme], ([valSkin, valTheme]) => {
    if (valTheme !== 'light' && valSkin === EnumSkins['Semi Dark'])
      skin.value = EnumSkins.Default
  })

  const layoutAttrs = computed(() => {
    if (skin.value === EnumSkins['Semi Dark']) {
      return {
        verticalNavAttrs:
              { tag: h(VThemeProvider, { tag: 'aside' }), withBackground: true, theme: 'dark' },
        class: 'skin--semi-dark',
      }
    }
    else if (skin.value === EnumSkins.Bordered) {
      return {
        class: 'skin--bordered',
      }
    }
    else { return { class: 'skin--default' } }
  })

  return {
    useValidSkin,
    layoutAttrs,
  }
}
