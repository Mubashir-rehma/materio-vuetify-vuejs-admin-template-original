import is from '@sindresorhus/is'
import { destr } from 'destr'
import { rest } from 'msw'
import { db } from '@/plugins/fake-api/handlers/apps/logistics/db'
import { buildURL } from '@/plugins/fake-api/utils/buildURL'
import { paginateArray } from '@/plugins/fake-api/utils/paginateArray'

export const handlerAppLogistics = [
  rest.get(buildURL('apps/logistics/vehicles'), (req, res, ctx) => {
    const sortBy = req.url.searchParams.get('sortBy')
    const page = req.url.searchParams.get('page') ?? 1
    const itemsPerPage = req.url.searchParams.get('itemsPerPage') ?? 10
    const orderBy = req.url.searchParams.get('orderBy')

    const parsedSortBy = destr(sortBy)
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : ''

    const parsedOrderBy = destr(orderBy)
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : ''

    const parsedItemsPerPage = destr(itemsPerPage)
    const parsedPage = destr(page)

    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10
    const pageLocal = is.number(parsedPage) ? parsedPage : 1

    // Sorting Vehicles

    if (sortByLocal && sortByLocal === 'location') {
      db.vehicles = db.vehicles.sort((a, b) => {
        if (orderByLocal === 'asc')
          return a.location - b.location

        return b.location - a.location
      })
    }

    if (sortByLocal && sortByLocal === 'startRoute') {
      db.vehicles = db.vehicles.sort((a, b) => {
        if (orderByLocal === 'asc')
          return a.startCity.localeCompare(b.startCity)

        return b.startCity.localeCompare(a.startCity)
      })
    }

    if (sortByLocal && sortByLocal === 'endRoute') {
      db.vehicles = db.vehicles.sort((a, b) => {
        if (orderByLocal === 'asc')
          return a.endCity.localeCompare(b.endCity)

        return b.endCity.localeCompare(a.endCity)
      })
    }

    if (sortByLocal && sortByLocal === 'warnings') {
      db.vehicles = db.vehicles.sort((a, b) => {
        if (orderByLocal === 'asc')
          return a.warnings.localeCompare(b.warnings)

        return b.warnings.localeCompare(a.warnings)
      })
    }

    if (sortByLocal && sortByLocal === 'progress') {
      db.vehicles = db.vehicles.sort((a, b) => {
        if (orderByLocal === 'asc')
          return a.progress - b.progress

        return b.progress - a.progress
      })
    }

    return res(
      ctx.status(200),
      ctx.json({
        vehicles: paginateArray(db.vehicles, itemsPerPageLocal, pageLocal),
        totalVehicles: db.vehicles.length,
      }),
    )
  }),
]
