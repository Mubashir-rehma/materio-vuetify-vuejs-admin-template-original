import { cleanDoubleSlashes, joinURL } from 'ufo'
import type { MaybeRefOrGetter } from 'vue'

export const CreateUrl = (url: MaybeRefOrGetter<string>, params?: MaybeRefOrGetter<Record<string, any>>) => {
  const _url = toValue(url)
  const _params = toValue(params)

  let _filteredParams = _params

  if (_params) {
    _filteredParams = Object.fromEntries(Object.entries(_params).filter(([_, value]) => {
      let rawValue = value

      if (isReactive(rawValue))
        rawValue = toRefs(rawValue)

      rawValue = toValue(rawValue)

      return rawValue !== null && rawValue !== undefined && rawValue !== '' && rawValue.length !== 0
    }))
  }

  if (!_filteredParams)
    return url

  const newSearchParams = new URLSearchParams(toValue(
    typeof _filteredParams === 'object' ? reactive(_filteredParams) : _filteredParams,
  ))

  let dummyUrlIns: null | URL = null
  const fakeDomain = 'https://fa.ke/'

  try {
    dummyUrlIns = new URL(_url)
  }
  catch (error) {
    dummyUrlIns = new URL(`${fakeDomain}${_url}`)
  }

  const existingSearchParams = dummyUrlIns.searchParams

  const searchParams = new URLSearchParams({
    ...Object.fromEntries(existingSearchParams),
    ...Object.fromEntries(newSearchParams),
  })

  // Create new url with new params
  const appendQueries = searchParams.size ? `?${searchParams}` : ''

  const newUrl = new URL(cleanDoubleSlashes(joinURL(dummyUrlIns.origin, dummyUrlIns.pathname, appendQueries)))

  return newUrl.href.replace(fakeDomain, '')
}
