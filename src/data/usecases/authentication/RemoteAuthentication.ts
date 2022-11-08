import { AuthenticationParams } from '../../../domain/usecases/Authentication'
import { HttpPostClient } from '../../protocols/http/HttpPostClient'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }

  async Auth (params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.Post({ url: this.url, body: params })
  }
}
