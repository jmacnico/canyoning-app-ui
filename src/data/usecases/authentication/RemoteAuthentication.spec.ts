
import { HttpPostClientSpy } from '../../test/Mock-http-clinet'
import { RemoteAuthentication } from './RemoteAuthentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication unit tests', () => {
  it('Should call httpClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpPostClientSpy } = makeSut(url)

    await sut.Auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
