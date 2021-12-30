import { useLayouts } from '@layouts'
import type { PartialDeep } from 'type-fest'
import type { InjectionKey, Plugin, Ref } from 'vue'
import type { Config } from './config'
import { config } from './config'
import { mergeConfig } from './utils'

const { _setAppDir } = useLayouts()

export const createLayouts = (userConfig?: PartialDeep<Config>): Plugin => {
  mergeConfig(config, userConfig)

  return (): void => {
    console.info('installing layouts...')
    _setAppDir(config.app.isRtl.value ? 'rtl' : 'ltr')
  }
}

export const injectionKeyIsVerticalNavHovered: InjectionKey<Ref<boolean>> = Symbol('isVerticalNavHovered')

export { useDynamicVhCssProperty } from './composable/useDynamicVhCssProperty'
export { useLayouts } from './composable/useLayouts'

