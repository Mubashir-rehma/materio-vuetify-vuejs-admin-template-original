import { db } from '@db/pages/help-center/db'
import { http } from 'msw'

export const handlerPagesHelpCenter = [
  http.get(('/api/pages/help-center'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ allArticles: db.allArticles, popularArticles: db.popularArticles, keepLearning: db.keepLearning }),
    )
  }),

  http.get(('/api/pages/help-center/article'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.articleData))
  },
  ),
]
