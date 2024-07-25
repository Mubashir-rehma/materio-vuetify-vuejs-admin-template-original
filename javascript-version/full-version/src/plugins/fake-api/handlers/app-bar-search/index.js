import is from '@sindresorhus/is'
import { HttpResponse, http } from 'msw'
import { db } from '@db/app-bar-search/db'

export const handlerAppBarSearch = [
  // Get Search Items
  http.get('/api/app-bar/search', ({ request }) => {
    const url = new URL(request.url)
    const q = url.searchParams.get('q') ?? ''
    const searchQuery = is.string(q) ? q : undefined
    const queryLowered = (searchQuery ?? '').toString().toLowerCase()
    const filteredSearchData = []

    db.searchItems.forEach(item => {
      if (item.children) {
        const matchingChildren = item.children.filter(child => child.title.toLowerCase().includes(queryLowered))
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
    
    return HttpResponse.json([...filteredSearchData], { status: 200 })
  }),
]
