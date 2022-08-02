import { mainService } from 'services/config'
import { INote } from 'utils/interfaces/notes'

export const noteService = {
    getAll: () => {
        return mainService
            .get('/notes')
            .then(response => response.data)
    },

    add: (note: INote) => {
        return mainService
            .post('/notes', note)
            .then(response => response.data)
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