import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  async Post (params: HttpPostParams<any>): Promise<void> {
    await axios.post(params.url)
  }
}
