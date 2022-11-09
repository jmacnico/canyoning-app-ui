import { AxiosHttpClient } from './AxiosHttpClient'
import axios from 'axios'
import faker from 'faker'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockedAxiosResult = {
  data: faker.random.objectElement(),
  status: faker.random.number()
}

mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  const sut = new AxiosHttpClient()
  return sut
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient unit tests', () => {
  it('should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.Post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  it('should return correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.Post(mockPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
