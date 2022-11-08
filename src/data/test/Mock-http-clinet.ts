import { HttpPostClient } from '../protocols/http/HttpPostClient'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  async Post (url: string): Promise<void> {
    this.url = url
  }
}
