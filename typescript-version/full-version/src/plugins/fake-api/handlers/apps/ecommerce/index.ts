import is from '@sindresorhus/is'
import { destr } from 'destr'
import { rest } from 'msw'
import { db } from '@/plugins/fake-api/handlers/apps/ecommerce/db'
import { buildURL } from '@/plugins/fake-api/utils/buildURL'
import { paginateArray } from '@/plugins/fake-api/utils/paginateArray'

export const handlerAppsEcommerce = [

  // 👉 Products
  // Get Product List
  rest.get(buildURL('apps/ecommerce/products'), (req, res, ctx) => {
    const q = req.url.searchParams.get('q')
    const stock = req.url.searchParams.get('stock')
    const category = req.url.searchParams.get('category')
    const status = req.url.searchParams.get('status')
    const sortBy = req.url.searchParams.get('sortBy')
    const orderBy = req.url.searchParams.get('orderBy')
    const itemsPerPage = req.url.searchParams.get('itemsPerPage')
    const page = req.url.searchParams.get('page')

    const searchQuery = is.string(q) ? q : undefined
    const queryLower = (searchQuery ?? '').toString().toLowerCase()

    const stockLocal = is.string(stock) ? stock : null

    const parsedSortBy = destr(sortBy)
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : ''

    const parsedOrderBy = destr(orderBy)
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : ''

    const parsedItemsPerPage = destr(itemsPerPage)
    const parsedPage = destr(page)

    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10
    const pageLocal = is.number(parsedPage) ? parsedPage : 1

    // Filtering Products
    let filteredProducts = db.products.filter(product => (
      (product.product_name.toLowerCase().includes(queryLower) || product.product_brand.toLowerCase().includes(queryLower))
        && product.category === (category || product.category) && (product.status === (status || product.status)) && (stockLocal === null || product.stock === (stockLocal === 'true'))
    )).reverse()

    // Sort
    if (sortByLocal) {
      if (sortByLocal === 'product') {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.product_name.toLowerCase() > b.product_name.toLowerCase() ? 1 : -1
          else if (orderByLocal === 'desc')
            return a.product_name.toLowerCase() < b.product_name.toLowerCase() ? 1 : -1

          return 0
        })
      }

      if (sortByLocal === 'category') {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.category > b.category ? 1 : -1
          else if (orderByLocal === 'desc')
            return a.category < b.category ? 1 : -1

          return 0
        })
      }

      if (sortByLocal === 'status') {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.status > b.status ? 1 : -1
          else if (orderByLocal === 'desc')
            return a.status < b.status ? 1 : -1

          return 0
        })
      }

      if (sortByLocal === 'price') {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (orderByLocal === 'asc')
            return Number(a.price.slice(1)) > Number(b.price.slice(1)) ? 1 : -1
          else if (orderByLocal === 'desc')
            return Number(a.price.slice(1)) < Number(b.price.slice(1)) ? 1 : -1

          return 0
        })
      }

      if (sortByLocal === 'qty') {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.qty > b.qty ? 1 : -1
          else if (orderByLocal === 'desc')
            return a.qty < b.qty ? 1 : -1

          return 0
        })
      }

      if (sortByLocal === 'sku') {
        filteredProducts = filteredProducts.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.sku > b.sku ? 1 : -1
          else if (orderByLocal === 'desc')
            return a.sku < b.sku ? 1 : -1

          return 0
        })
      }
    }

    return res(
      ctx.status(200),
      ctx.json({
        products: paginateArray(filteredProducts, itemsPerPageLocal, pageLocal), total: filteredProducts.length,
      }))
  }),

  // 👉 Orders
  // Get Order List
  rest.get(buildURL('apps/ecommerce/orders'), (req, res, ctx) => {
    const q = req.url.searchParams.get('q')
    const sortBy = req.url.searchParams.get('sortBy')
    const orderBy = req.url.searchParams.get('orderBy')
    const itemsPerPage = req.url.searchParams.get('itemsPerPage')
    const page = req.url.searchParams.get('page')

    const searchQuery = is.string(q) ? q : undefined
    const queryLower = (searchQuery ?? '').toString().toLowerCase()

    const parsedSortBy = destr(sortBy)
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : ''

    const parsedOrderBy = destr(orderBy)
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : ''

    const parsedItemsPerPage = destr(itemsPerPage)
    const parsedPage = destr(page)

    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10
    const pageLocal = is.number(parsedPage) ? parsedPage : 1

    const filterOrders = db.orderData.filter(order => {
      return (
        order.customer.toLowerCase().includes(queryLower)
            || order.email.toLowerCase().includes(queryLower)
            || order.order.toString().includes(queryLower)
      )
    }).reverse()

    if (sortByLocal) {
      if (sortByLocal === 'order') {
        filterOrders.sort((a, b) => {
          if (orderByLocal === 'desc')
            return b.order - a.order
          else
            return a.order - b.order
        })
      }
      if (sortByLocal === 'customers') {
        filterOrders.sort((a, b) => {
          if (orderByLocal === 'desc')
            return b.customer.localeCompare(a.customer)
          else
            return a.customer.localeCompare(b.customer)
        })
      }

      if (sortByLocal === 'date') {
        filterOrders.sort((a, b) => {
          if (orderByLocal === 'desc')
            return Number(new Date(b.date)) - Number(new Date(a.date))
          else
            return Number(new Date(a.date)) - Number(new Date(b.date))
        })
      }

      if (sortByLocal === 'status') {
        filterOrders.sort((a, b) => {
          if (orderByLocal === 'desc')
            return b.status.localeCompare(a.status)
          else
            return a.status.localeCompare(b.status)
        })
      }
    }

    return res(
      ctx.status(200),
      ctx.json({
        orders: paginateArray(filterOrders, itemsPerPageLocal, pageLocal), total: filterOrders.length,
      }),
    )
  }),

  // Delete Order
  rest.delete(buildURL('apps/ecommerce/orders/:id'), (req, res, ctx) => {
    const id = Number(req.params.id)

    const orderIndex = db.orderData.findIndex(e => e.id === id)

    if (orderIndex >= 0)
      db.orderData.splice(orderIndex, 1)

    return res(
      ctx.status(204),
    )
  }),

  // 👉 Customers
  // Get single Customer
  rest.get(buildURL('apps/ecommerce/customers/:id'), (req, res, ctx) => {
    const customerId = Number(req.params.id)

    const customerIndex = db.customerData.findIndex(e => e.customer_id === customerId)

    const customer = db.customerData[customerIndex]

    Object.assign(customer, {
      status: 'Active',
      contact: '+1 (234) 567 890',
    })

    if (customer) {
      return res(
        ctx.status(200),
        ctx.json(
          customer,
        ),
      )
    }
    else {
      return res(
        ctx.status(404),
      )
    }
  }),

  // Get Customer List
  rest.get(buildURL('apps/ecommerce/customers'), (req, res, ctx) => {
    const q = req.url.searchParams.get('q')
    const sortBy = req.url.searchParams.get('sortBy')
    const orderBy = req.url.searchParams.get('orderBy')
    const itemsPerPage = req.url.searchParams.get('itemsPerPage')
    const page = req.url.searchParams.get('page')

    const parsedSortBy = destr(sortBy)
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : ''

    const parsedOrderBy = destr(orderBy)
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : ''

    const parsedItemsPerPage = destr(itemsPerPage)
    const parsedPage = destr(page)

    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10
    const pageLocal = is.number(parsedPage) ? parsedPage : 1

    const searchQuery = is.string(q) ? q : undefined
    const queryLowered = (searchQuery ?? '').toString().toLowerCase()

    const filteredCustomers = db.customerData.filter(customer => {
      return (
        customer.customer.toLowerCase().includes(queryLowered)
              || customer.country.toLowerCase().includes(queryLowered)
              || customer.email.toLowerCase().includes(queryLowered)
      )
    }).reverse()

    // Sort Customers
    if (sortByLocal) {
      console.log(sortByLocal)
      if (sortByLocal === 'customer') {
        filteredCustomers.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.customer.localeCompare(b.customer)

          return b.customer.localeCompare(a.customer)
        })
      }
      if (sortByLocal === 'country') {
        filteredCustomers.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.country.localeCompare(b.country)

          return b.country.localeCompare(a.country)
        })
      }

      if (sortByLocal === 'customerId') {
        filteredCustomers.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.customer_id - b.customer_id

          return b.customer_id - a.customer_id
        })
      }

      if (sortByLocal === 'orders') {
        filteredCustomers.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.order - b.order

          return b.order - a.order
        })
      }
    }

    if (sortByLocal === 'total_spent') {
      filteredCustomers.sort((a, b) => {
        if (orderByLocal === 'asc')
          return a.total_spent - b.total_spent

        return b.total_spent - a.total_spent
      })
    }

    return res(
      ctx.status(200),
      ctx.json({
        customers: paginateArray(filteredCustomers, itemsPerPageLocal, pageLocal), total: filteredCustomers.length,
      }),
    )
  }),

  // 👉 Manage Reviews.
  // Get Reviews
  rest.get(buildURL('apps/ecommerce/reviews'), (req, res, ctx) => {
    const q = req.url.searchParams.get('q')
    const sortBy = req.url.searchParams.get('sortBy')
    const orderBy = req.url.searchParams.get('orderBy')
    const itemsPerPage = req.url.searchParams.get('itemsPerPage')
    const page = req.url.searchParams.get('page')

    const parsedSortBy = destr(sortBy)
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : ''

    const parsedOrderBy = destr(orderBy)
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : ''

    const parsedItemsPerPage = destr(itemsPerPage)
    const parsedPage = destr(page)

    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10
    const pageLocal = is.number(parsedPage) ? parsedPage : 1

    const searchQuery = is.string(q) ? q : undefined
    const queryLower = (searchQuery ?? '').toString().toLowerCase()

    // Filtering Reviews

    const filteredReviews = db.reviews.filter(review => {
      const { product, reviewer, email } = review

      return (
        (product.toLowerCase().includes(queryLower) || reviewer.toLowerCase().includes(queryLower) || email.toLowerCase().includes(queryLower) || review.head.toLowerCase().includes(queryLower) || review.para.toLowerCase().includes(queryLower))
      )
    })

    // Sort
    if (sortByLocal) {
      if (sortByLocal === 'product') {
        filteredReviews.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.product.toLowerCase() > b.product.toLowerCase() ? 1 : -1
          else if (orderByLocal === 'desc')
            return a.product.toLowerCase() < b.product.toLowerCase() ? 1 : -1

          return 0
        })
      }

      if (sortByLocal === 'reviewer') {
        filteredReviews.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.reviewer.toLowerCase() > b.reviewer.toLowerCase() ? 1 : -1
          else if (orderByLocal === 'desc')
            return a.reviewer.toLowerCase() < b.reviewer.toLowerCase() ? 1 : -1

          return 0
        })
      }

      if (sortByLocal === 'date') {
        filteredReviews.sort((a, b) => {
          if (orderByLocal === 'desc')
            return Number(new Date(b.date)) - Number(new Date(a.date))
          else if (orderByLocal === 'asc')
            return Number(new Date(a.date)) - Number(new Date(b.date))

          return 0
        })
      }
    }

    return res(
      ctx.status(200),
      ctx.json({
        reviews: paginateArray(filteredReviews, itemsPerPageLocal, pageLocal), total: filteredReviews.length,
      }),
    )
  }),

  // Delete Review
  rest.delete(buildURL('apps/ecommerce/reviews/:id'), (req, res, ctx) => {
    const id = Number(req.params.id)

    const reviewIndex = db.reviews.findIndex(e => e.id === id)

    if (reviewIndex !== -1) {
      db.reviews.splice(reviewIndex, 1)

      return res(
        ctx.status(200),
      )
    }

    return res(
      ctx.status(404),
    )
  }),

  // 👉 Referrals
  // Get Referrals
  rest.get(buildURL('apps/ecommerce/referrals'), (req, res, ctx) => {
    const sortBy = req.url.searchParams.get('sortBy')
    const orderBy = req.url.searchParams.get('orderBy')
    const itemsPerPage = req.url.searchParams.get('itemsPerPage')
    const page = req.url.searchParams.get('page')

    const parsedSortBy = destr(sortBy)
    const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : ''

    const parsedOrderBy = destr(orderBy)
    const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : ''

    const parsedItemsPerPage = destr(itemsPerPage)
    const parsedPage = destr(page)

    const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10
    const pageLocal = is.number(parsedPage) ? parsedPage : 1

    const filteredReferrals = db.referrals
    if (sortByLocal) {
      if (sortByLocal === 'users') {
        filteredReferrals.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.user.toLowerCase() > b.user.toLowerCase() ? 1 : -1
          else if (orderByLocal === 'desc')
            return a.user.toLowerCase() < b.user.toLowerCase() ? 1 : -1

          return 0
        })
      }

      if (sortByLocal === 'referred-id') {
        filteredReferrals.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.referred_id - b.referred_id
          else if (orderByLocal === 'desc')
            return b.referred_id - a.referred_id

          return 0
        })
      }

      if (sortByLocal === 'earning') {
        filteredReferrals.sort((a, b) => {
          if (orderByLocal === 'asc')
            return Number(a.earning.slice(1)) - Number(b.earning.slice(1))
          else if (orderByLocal === 'desc')
            return Number(b.earning.slice(1)) - Number(a.earning.slice(1))

          return 0
        })
      }

      if (sortByLocal === 'status') {
        filteredReferrals.sort((a, b) => {
          if (orderByLocal === 'asc')
            return a.status.toLowerCase() > b.status.toLowerCase() ? 1 : -1
          else if (orderByLocal === 'desc')
            return a.status.toLowerCase() < b.status.toLowerCase() ? 1 : -1

          return 0
        })
      }
    }

    return res(
      ctx.status(200),
      ctx.json({
        referrals: paginateArray(filteredReferrals, itemsPerPageLocal, pageLocal),
        total: filteredReferrals.length,
      }),
    )
  }),
]
