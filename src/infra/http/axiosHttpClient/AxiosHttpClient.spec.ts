import { AxiosHttpClient } from './AxiosHttpClient'
import axios from 'axios'
import faker from 'faker'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  const sut = new AxiosHttpClient()
  return sut
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient unit tests', () => {
  it('should call axios with correct URL and Verb', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.Post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url)
  })
})
