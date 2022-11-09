import { AxiosHttpClient } from './AxiosHttpClient'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  const sut = new AxiosHttpClient()
  return sut
}

describe('AxiosHttpClient unit tests', () => {
  it('should call axios with correct URL and Verb', async () => {
    const url = faker.internet.url()
    const sut = makeSut()
    await sut.Post({ url })
    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })
})
