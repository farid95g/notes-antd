import { mainService } from "./config"
import { INote } from "../utils/interfaces/notes"

export const noteService = {
    getNotes: () => {
        return mainService
            .get('/notes.json')
            .then(response => Object.keys(response.data).map(key => ({
                id: key,
                ...response.data[key]
            })))
    },
    addNote: (note: INote) => {
        return mainService
            .post('/notes.json', note)
            .then(response => response)
    }
}