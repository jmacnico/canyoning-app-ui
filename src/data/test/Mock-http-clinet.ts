import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/HttpPostClient'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/HttpResponse'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent
  }

  async Post (params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return this.response
  }
}
