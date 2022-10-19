import { HttpPostClient } from 'data/protocols/http/HttpPostClient'
import { RemoteAuthentication } from './RemoteAuthentication'

class HttpPostClientSpy implements HttpPostClient {
  url?: string
  async Post (url: string): Promise<void> {
    this.url = url
  }
}

describe('RemoteAuthentication unit tests', () => {
  it('Should call httpClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.Auth()
    expect(httpPostClientSpy.url).toBe(url)
  })

  it('', () => {
    expect(2).toBe(2)
  })
})
