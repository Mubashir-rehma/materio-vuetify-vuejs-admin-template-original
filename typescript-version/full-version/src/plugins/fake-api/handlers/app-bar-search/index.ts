import is from '@sindresorhus/is'
import { rest } from 'msw'
import { db } from '@/plugins/fake-api/handlers/app-bar-search/db'
import type { SearchResults } from '@/plugins/fake-api/handlers/app-bar-search/type'
import { buildURL } from '@/plugins/fake-api/utils/buildURL'

export const handlerAppBarSearch = [
  // Get Search Items
  rest.get(buildURL('app-bar/search'), (req, res, ctx) => {
    const q = req.url.searchParams.get('q') ?? ''
    const searchQuery = is.string(q) ? q : undefined
    const queryLowered = (searchQuery ?? '').toString().toLowerCase()

    const filteredSearchData = [] as SearchResults[]

    db.searchItems.forEach(item => {
      if (item.children) {
        const matchingChildren = item.children.filter(
          child => child.title.toLowerCase().includes(queryLowered),
        )

        if (matchingChildren.length > 0) {
          const parentCopy = { ...item }

          if (matchingChildren.length > 5)
            parentCopy.children = matchingChildren.slice(0, 5)

          else
            parentCopy.children = matchingChildren

          filteredSearchData.push(parentCopy)
        }
      }
    })

    if (filteredSearchData.length > 1) {
      filteredSearchData.forEach((item, index) => {
        if (item.children.length > 3)
          filteredSearchData[index].children.splice(0, 3)
      })
    }

    return res(
      ctx.status(200),
      ctx.json([...filteredSearchData]),
    )
  }),
]