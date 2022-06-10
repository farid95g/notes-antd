import { mainService } from './config'
import { INote } from '../utils/interfaces/notes'

export const noteService = {
    getAll: () => {
        return mainService
            .get('/notes.json')
            .then(response => Object.keys(response.data).map(key => ({
                id: key,
                ...response.data[key]
            })))
    },

    add: (note: INote) => {
        return mainService
            .post('/notes.json', note)
            .then(response => response.data)
    },

    update: (note: INote) => {
        return mainService
            .put(`/notes/${note.id}.json`, note)
            .then(response => response.data)
    },
    
    delete: (id: string) => {
        return mainService
            .delete(`/notes/${id}.json`)
            .then(response => response)
    }
}