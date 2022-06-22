import { VThemeProvider } from 'vuetify/lib/components/VThemeProvider/VThemeProvider.mjs'
import { EnumSkins } from '../enums'
import { EnumAppContentLayoutNav } from '@layouts/enums'

// TODO: Use `VThemeProvider` from dist instead of lib (Using this component from dist causes navbar to loose sticky positioning)
import { useThemeConfig } from '@core/composable/useThemeConfig'

export const useSkins = () => {
  const { theme, skin, appContentLayoutNav } = useThemeConfig()

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
        class: 'skin--semi-dark',
        verticalNavAttrs: appContentLayoutNav.value === EnumAppContentLayoutNav.Vertical ? { tag: h(VThemeProvider, { tag: 'aside' }), withBackground: true, theme: 'dark' } : {},
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
