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
