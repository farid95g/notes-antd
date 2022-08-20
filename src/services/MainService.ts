import axios from 'axios'
import { IService } from 'utils/interfaces/service'

export default class MainService implements IService {
  readonly baseUrl: string = 'http://localhost:5000'

  constructor(resourcePath: string) {
    this.baseUrl = this.baseUrl.concat(resourcePath)
  }
  
  async getAll(params?: string) {
    return await axios.get(`${this.baseUrl}/?${params}`)
  }
  
  async get(id: string) {
    return await axios.get(`${this.baseUrl}/${id}`)
  }

  async add(body: any) {
    return await axios.post(this.baseUrl, body)
  }
  
  async update(id: string, body: any) {
    return await axios.put(`${this.baseUrl}/${id}`, body)
  }

  async remove(id: string) {
    return await axios.delete(`${this.baseUrl}/${id}`)
  }
}