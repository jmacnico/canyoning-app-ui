export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }

  async Auth (): Promise<void> {
    await this.httpPostClient.Post(this.url)
  }
}
