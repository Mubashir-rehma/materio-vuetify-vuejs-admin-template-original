// Customer Types
export interface Customer {
  id: number
  customer: string
  customer_id: number
  email: string
  country: string
  country_code: string
  order: number
  total_spent: string
  avatar: string
}

export interface Referrals {
  id: number
  user: string
  email: string
  avatar: string
  referred_id: number
  status: string
  value: string
  earning: string

}

export interface Review {
  id: number
  product: string
  company_name: string
  product_image: string
  reviewer: string
  email: string
  avatar: string
  date: string
  status: string
  review: number
  head: string
  para: string
}

export interface ECommerceProduct {
  id: number
  product_name: string
  category: string
  stock: boolean
  sku: number
  price: string
  qty: number
  status: string
  image: string
  product_brand: string
}

export interface Order {
  id: number
  order: number
  customer: string
  email: string
  avatar: string
  payment: number
  status: string
  spent: string
  method: string
  date: string
  time: string
  method_number: number
}
