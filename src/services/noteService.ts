import { mainService } from 'services/config'
import { INote } from 'utils/interfaces/notes'

export const noteService = {
    getAll: (page: number) => {
        return mainService
            .get(`/notes?_page=${page}&_limit=4`)
            .then(response => ({
                notes: response.data,
                total: parseInt(response.headers['x-total-count'])
            }))
    },

    add: (note: INote) => {
        return mainService
            .post('/notes', note)
            .then(response => ({ note: response.data, status: response.status }))
    },

    update: (note: INote) => {
        return mainService
            .put(`/notes/${note.id}`, note)
            .then(response => response.data)
    },
    
    delete: (id: string) => {
        return mainService
            .delete(`/notes/${id}`)
            .then(response => response)
    }
}