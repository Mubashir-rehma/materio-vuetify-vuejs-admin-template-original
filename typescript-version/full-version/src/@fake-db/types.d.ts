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
    lastUpdated: string
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

// !SECTION
