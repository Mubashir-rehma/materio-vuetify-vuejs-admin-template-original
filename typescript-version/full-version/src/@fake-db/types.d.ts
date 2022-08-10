import type { Actions, Subjects } from '@/plugins/casl/AppAbility'

export interface KnowledgeBaseCategory {
  character: string
  category: string
  title: string
  desc: string
}
export interface KnowledgeBaseQuestion {
  slug: string
  question: string
}

export interface KnowledgeBaseQuestionAndAnswer {
  postImg?: string
  postContent?: {
    title: string
    postDesc: string
  }
  relatedQuestions?: KnowledgeBaseQuestion[]
}

export interface KnowledgeBaseSubcategory {
  icon: string
  iconColor?: string
  title: string
  questions: KnowledgeBaseQuestion[]
}

export interface KnowledgeBaseDB {
  knowledgeBaseCategories: KnowledgeBaseCategory[]
  knowledgeBaseSubcategories: KnowledgeBaseSubcategory[]
  KnowledgeBaseQuestionsAndAnswers: KnowledgeBaseQuestionAndAnswer[]
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

export interface UserAbility {
  action: Actions
  subject: Subjects
}

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
