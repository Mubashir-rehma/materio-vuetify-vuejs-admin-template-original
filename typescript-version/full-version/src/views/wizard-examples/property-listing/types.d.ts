export interface PersonalDetails {
  userType: 'builder' | 'owner' | 'broker'
  firstName: string
  lastName: string
  username: string
  password: string
  email: string
  contact: number | null
}

export interface PriceDetails {
  expectedPrice: number | null
  pricePerSqft: number | null
  maintenanceCharge: number | null
  maintenancePeriod: string | undefined
  bookingAmount: number | null
  otherAmount: number | null
  priceDisplayType: string
  priceIncludes: string[]
}

export interface PropertyArea {
  totalArea: number | null
  carpetArea: number | null
  plotArea: number | null
  availableFrom: string | null
  possessionStatus: string
  transactionType: string
  isOnMainRoad: string
  isGatedColony: string
}

export interface PropertyDetails {
  propertyDealType: 'sell' | 'rent'
  propertyType: string | undefined
  zipCode: number | null
  country: string | undefined
  state: string
  city: string
  landmark: string
  address: string
}

export interface PropertyFeatures {
  bedroomCount: string
  floorNo: string
  bathroomCount: string
  isCommonArea: boolean
  furnishedStatus: string | undefined
  furnishingDetails: string[]
  isCommonArea1: string
  isCommonArea2: string
}

export interface PropertyListingData {
  personalDetails: PersonalDetails
  propertyDetails: PropertyDetails
  propertyFeatures: PropertyFeatures
  propertyArea: PropertyArea
  priceDetails: PriceDetails
}
