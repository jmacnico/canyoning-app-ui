import faker from 'faker'
import { AuthenticationParams } from '@/domain/usecases/Authentication'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
