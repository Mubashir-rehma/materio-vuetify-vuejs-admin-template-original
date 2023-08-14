export interface SalesDetails {
  product: Product
  buyer: Buyer
  date: string
  payment: Payment
}

export interface Product {
  id: number
  name: string
  slug: string
  brand: string
  category: string
  price: number
  image: string
  hasFreeShipping: boolean
  rating: number
  description: string
}

export interface Buyer {
  name: string
  avatar: string | null
}

export interface Payment {
  total: number
  received_payment_status: string
  paid_amount: number
  status: string
}

export interface Data {
  responsive_id: string
  id: number
  avatar: string
  full_name: string
  post: string
  email: string
  city: string
  start_date: string
  salary: number
  age: string | number
  experience: string
  status: number
}
