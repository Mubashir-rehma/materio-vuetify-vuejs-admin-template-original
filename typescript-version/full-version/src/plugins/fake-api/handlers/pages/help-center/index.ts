import { rest } from 'msw'
import { db } from '@/plugins/fake-api/handlers/pages/help-center/db'
import { buildURL } from '@/plugins/fake-api/utils/buildURL'

export const handlerPagesHelpCenter = [
  rest.get(buildURL('pages/help-center'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ allArticles: db.allArticles, popularArticles: db.popularArticles, keepLearning: db.keepLearning }),
    )
  }),

  rest.get(buildURL('pages/help-center/article'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.articleData))
  },
  ),
]
