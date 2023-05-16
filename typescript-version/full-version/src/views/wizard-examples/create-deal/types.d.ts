export interface DealDetails {
  title: string
  code: string
  description: string
  offeredUItems: string[]
  cartCondition: string | undefined
  dealDuration: string
  notification: {
    email: boolean
    sms: boolean
    pushNotification: boolean
  }
}


export interface DealType {
  Offer: string
  discount: number | null
  region: string | undefined
}

export interface DealUsage {
  userType: string | undefined
  maxUsers: number | null
  cartAmount: number | null
  promotionFree: number | null
  paymentMethod: string | undefined
  dealStatus: string | undefined
  isSingleUserCustomer: boolean
}

export interface DealReviewComplete {
  isDealDetailsConfirmed: boolean
}

export interface CreateDealData {
  dealDetails: DealDetails
  dealType: DealType
  dealUsage:DealUsage
  dealReviewComplete:DealReviewComplete
}
