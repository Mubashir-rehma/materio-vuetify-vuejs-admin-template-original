import { db } from '@db/pages/profile/db'
import { http } from 'msw'

export const handlerPagesProfile = [
  // GET /pages/profile
  http.get(('/api/pages/profile'), (req, res, ctx) => {
    const tab = req.url.searchParams.get('tab') || ''

    return res(
      ctx.status(200),
      ctx.json(db.data[tab as keyof typeof db.data]),
    )
  }),

  // GET /pages/profile/header
  http.get(('/api/pages/profile/header'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(db.data.profileHeader),
    )
  }),
]
