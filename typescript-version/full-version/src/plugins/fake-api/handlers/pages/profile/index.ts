import { rest } from 'msw'
import { db } from '@/plugins/fake-api/handlers/pages/profile/db'
import { buildURL } from '@/plugins/fake-api/utils/buildURL'

export const handlerPagesProfile = [
  // GET /pages/profile
  rest.get(buildURL('pages/profile'), (req, res, ctx) => {
    const tab = req.url.searchParams.get('tab') || ''

    return res(
      ctx.status(200),
      ctx.json(db.data[tab as keyof typeof db.data]),
    )
  }),

  // GET /pages/profile/header
  rest.get(buildURL('pages/profile/header'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(db.data.profileHeader),
    )
  }),
]
