import { HttpResponse } from './HttpResponse'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  Post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}
