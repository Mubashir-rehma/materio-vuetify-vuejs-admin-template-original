import { rest } from 'msw'
import { db } from '@db-types/pages/datatable/db'

export const handlerPagesDatatable = [
  rest.get(('/api/pages/datatable'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(db.salesDetails),
    )
  }),
]
