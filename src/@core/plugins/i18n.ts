export const tryI18n = async() => {
  // let returnObj = { t: (key: any) => key }
  // try {
  //   import('vue-i18n')
  //     .then(({ useI18n }) => returnObj = useI18n())
  //     .catch(e => {
  //       console.log('e :>> ', e)
  //     })
  // }
  // finally {
  //   console.log('object')
  // }

  // return returnObj

  // ---

  // let useI18n

  // let returnObj = { t: (key: any) => key }

  // try {
  //   if (typeof useI18n === 'function') returnObj = (useI18n as Function)()
  // }
  // catch {
  //   console.log('else')
  // }

  // return returnObj

  try {
    const { useI18n } = await import('vue-i18n')

    return useI18n()
  }
  catch (e) {
    console.error(e)

    return { t: (key: any) => key }
  }
}
