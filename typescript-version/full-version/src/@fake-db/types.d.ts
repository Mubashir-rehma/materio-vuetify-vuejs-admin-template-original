import type { UserAbility } from '@/plugins/casl/AppAbility'

// 👉 Help center
export type HelpCenterSubcategoryArticlesType = {
  slug: string
  title: string
  content: string
}
export type HelpCenterSubcategoriesType = {
  icon: string
  slug: string
  title: string
  articles: HelpCenterSubcategoryArticlesType[]
}
export type HelpCenterCategoriesType = {
  icon: string
  slug: string
  title: string
  avatarColor: string
  subCategories: HelpCenterSubcategoriesType[]
}
export type HelpCenterArticlesOverviewType = {
  img: string
  slug: string
  title: string
  subtitle: string
}

export interface Faq {
  question: string
  answer: string
}

export interface FaqCategory {
  faqTitle: string
  faqIcon: string
  faqSubtitle: string
  faqs: Faq[]
}

// SECTION
// 👉 JWT

export interface User {
  id: number
  fullName?: string
  username: string
  password: string
  avatar?: string
  email: string
  role: string
  abilities: UserAbility[]
}

export interface UserOut {
  userAbilities: User['abilities']
  accessToken: string
  userData: Omit<User, 'abilities' | 'password'>
}

export interface LoginResponse {
  accessToken: string
  userData: AuthUserOut
  userAbilities: UserAbility[]
}

export interface RegisterResponse {
  accessToken: string
  userData: AuthUserOut
  userAbilities: UserAbility[]
}

// !SECTION

// SECTION
// App: User
export interface UserProperties {
  id: number
  fullName: string
  company: string
  role: string
  username: string
  country: string
  contact: string
  email: string
  currentPlan: string
  status: string
  avatar: string
}
// !SECTION

// SECTION App: Calendar
export interface CalendarEvent {
  id: string
  url: string
  title: string
  start: string
  end: string
  allDay: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extendedProps: Record<string, any>
}
// !SECTION

// SECTION App: Invoice

// 👉 Client
export interface Client {
  address: string
  company: string
  companyEmail: string
  country: string
  contact: string
  name: string
}

// 👉 Invoice
export interface Invoice {
    id: number,
    issuedDate: string
    client: Client
    service: string
    total: number
    avatar: string
    invoiceStatus: string
    balance: string | number
    dueDate: string
}

// 👉 PaymentDetails
export interface PaymentDetails {
  totalDue: string
  bankName: string
  country: string,
  iban: string,
  swiftCode: string,
}
