export type HttpPostParams = {
  url: string
  body?: object
}
export interface HttpPostClient {
  Post: (params: HttpPostParams) => Promise<void>
}
