export interface IService {
  readonly baseUrl: string
  getAll: (params?: string) => void
  get: (id: string) => void
  add: (body: any) => void
  update: (id: string, body: any) => void
  remove: (id: string) => void
}
