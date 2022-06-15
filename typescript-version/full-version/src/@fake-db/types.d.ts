export interface UserAbility {
  action: string
  subject: string
}

interface AuthUserBase {
  id: number
  fullName: string
  username: string
  email: string
  role: string
}

export interface AuthUserOut extends AuthUserBase {}

export interface LoginResponse {
  accessToken: string
  userData: AuthUserOut
  userAbilities: UserAbility[]
}

export interface DbAuthUser extends AuthUserBase {
  password: string
  abilities: UserAbility[]
}

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

