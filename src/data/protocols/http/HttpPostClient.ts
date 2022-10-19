export interface HttpPostClient {
  Post: (url: string) => Promise<void>
}
