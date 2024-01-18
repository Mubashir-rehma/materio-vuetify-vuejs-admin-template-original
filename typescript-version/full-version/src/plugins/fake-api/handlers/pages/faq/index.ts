import is from '@sindresorhus/is'
import { HttpResponse, http } from 'msw'
import type { FaqCategory } from '@/plugins/fake-api/handlers/pages/faq/types'
import { db } from '@db/pages/faq/db'

export const handlerPagesFaq = [
  http.get(('/api/pages/faq'), ({ request }) => {
    const url = new URL(request.url)

    const q = url.searchParams.get('q') ?? ''

    const searchQuery = is.string(q) ? q : undefined
    const queryLowered = (searchQuery ?? '').toString().toLowerCase()

    const filteredData: FaqCategory[] = []

    Object.entries(db.faqs).forEach(([_, faqObj]) => {
      const filteredQAndA = faqObj.faqs.filter(obj => {
        return obj.question.toLowerCase().includes(queryLowered)
      })

      if (filteredQAndA.length)
        filteredData.push({ ...faqObj, faqs: filteredQAndA })
    })

    return HttpResponse.json(filteredData,
      { status: 200 })
  }),

]
