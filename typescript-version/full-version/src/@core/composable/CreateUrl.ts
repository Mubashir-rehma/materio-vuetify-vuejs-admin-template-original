import { stringifyQuery } from 'ufo'
import type { MaybeRefOrGetter } from 'vue'

export const createUrl = (url: MaybeRefOrGetter<string>, params?: MaybeRefOrGetter<Record<string, any>>) => {
  const _url = toValue(url)
  const _params = toValue(params)

  return `${_url}${_params ? `?${stringifyQuery(_params)}` : ''}`
}
