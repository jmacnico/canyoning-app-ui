
import { HttpPostClientSpy } from '../../test/Mock-http-clinet'
import { RemoteAuthentication } from './RemoteAuthentication'

describe('RemoteAuthentication unit tests', () => {
  it('Should call httpClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.Auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
