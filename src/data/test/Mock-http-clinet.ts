import { IHttpPostClient, HttpPostParams } from '@/data/protocols/http/HttpPostClient'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/HttpResponse'

export class HttpPostClientSpy<T, R> implements IHttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async Post (params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return this.response
  }
}
