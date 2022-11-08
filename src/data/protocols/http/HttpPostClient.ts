export type HttpPostParams = {
  url: string
}
export interface HttpPostClient {
  Post: (params: HttpPostParams) => Promise<void>
}
