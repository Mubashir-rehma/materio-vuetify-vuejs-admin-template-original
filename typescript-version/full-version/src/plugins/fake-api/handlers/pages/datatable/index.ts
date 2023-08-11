import { rest } from 'msw'
import { db } from '@/plugins/fake-api/handlers/pages/datatable/db'
import { buildURL } from '@/plugins/fake-api/utils/buildURL'

export const handlerPagesDatatable = [
  rest.get(buildURL('pages/datatable'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(db.salesDetails),
    )
  }),
]
