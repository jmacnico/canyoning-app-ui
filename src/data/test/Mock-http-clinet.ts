import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/HttpPostClient'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  async Post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
  }
}
