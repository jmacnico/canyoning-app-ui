import { AxiosHttpClient } from './AxiosHttpClient'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient unit tests', () => {
  it('should call axios with correct URL', async () => {
    const url = faker.internet.url()

    const sut = new AxiosHttpClient()
    await sut.Post({ url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
