import { HttpResponse } from './HttpResponse'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface IHttpPostClient<T, R> {
  Post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}
