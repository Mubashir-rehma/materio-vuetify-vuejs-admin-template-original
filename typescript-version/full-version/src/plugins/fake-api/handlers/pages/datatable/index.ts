import { db } from '@db/pages/datatable/db'
import { http } from 'msw'

export const handlerPagesDatatable = [
  http.get(('/api/pages/datatable'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(db.salesDetails),
    )
  }),
]
