import { AccountModel } from '@/domain/models/AccountModel'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface IAuthentication {
  Auth: (params: AuthenticationParams) => Promise<AccountModel>
}
