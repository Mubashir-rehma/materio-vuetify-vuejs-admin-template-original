export const kFormatter = (num, fraction = 2) => (num > 999 ? `${(num / 1000).toFixed(fraction)}k` : num)

export const title = (value, replacer = ' ') => {
  if (!value) return ''
  const str = value.toString()

  const arr = str.split(replacer)
  const capitalizedArray = []
  arr.forEach(word => {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
    capitalizedArray.push(capitalized)
  })

  return capitalizedArray.join(' ')
}

export const avatarText = value => {
  if (!value) return ''
  const nameArray = value.split(' ')

  return nameArray.map(word => word.charAt(0).toUpperCase()).join('')
}

// Strip all the tags from markup and return plain text
export const filterTags = value => value.replace(/<\/?[^>]+(>|$)/g, '')
