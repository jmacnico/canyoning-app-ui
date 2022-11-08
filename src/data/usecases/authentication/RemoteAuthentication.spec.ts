
import faker from 'faker'
import { HttpPostClientSpy } from '@/data//test/Mock-http-clinet'
import { RemoteAuthentication } from './RemoteAuthentication'
import { InvalidCredentialsError } from '@/domain/errors/InvalidCredentialsError'
import { HttpStatusCode } from '@/data/protocols/http/HttpResponse'
import { UnexpectedError } from '@/domain/errors/UnexpectedError'
import { AuthenticationParams } from '@/domain/usecases/Authentication'
import { AccountModel } from '@/domain/models/AccountModel'
import { mockAccountModel, mockAuthentication } from '@/domain/test/mock-account'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication unit tests', () => {
  it('Should call httpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)

    await sut.Auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  it('Should call httpClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = mockAuthentication()
    await sut.Auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })

  it('Should throw InvalidCredentialsError if httpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    await expect(sut.Auth(mockAuthentication())).rejects.toThrow(new InvalidCredentialsError())
  })

  it('Should throw UnexpectedError error if httpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    await expect(sut.Auth(mockAuthentication())).rejects.toThrow(new UnexpectedError())
  })

  it('Should throw UnexpectedError error if httpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    await expect(sut.Auth(mockAuthentication())).rejects.toThrow(new UnexpectedError())
  })

  it('Should throw UnexpectedError error if httpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    await expect(sut.Auth(mockAuthentication())).rejects.toThrow(new UnexpectedError())
  })

  it('Should return an AccountModel if httpPostClient returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const httpResult = mockAccountModel()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const account = await sut.Auth(mockAuthentication())

    expect(account).toEqual(httpResult)
  })
})
