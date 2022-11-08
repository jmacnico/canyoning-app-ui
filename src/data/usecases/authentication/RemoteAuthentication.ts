import { AuthenticationParams } from '@/domain/usecases/Authentication'
import { HttpPostClient } from '@/data/protocols/http/HttpPostClient'
import { HttpStatusCode } from '@/data/protocols/http/HttpResponse'
import { InvalidCredentialsError } from '@/domain/errors/InvalidCredentialsError'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }

  async Auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.Post({ url: this.url, body: params })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        return await Promise.resolve()
    }
  }
}
