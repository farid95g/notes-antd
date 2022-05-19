import { INotesContext } from '../../utils/interfaces/notes'
import { Notes } from '../../utils/enums/notes'

export const notesReducer = (state: INotesContext, action: { type: string, payload: any }): INotesContext => {
    const { type, payload } = action

    switch (type) {
        case Notes.ADD_NOTE: {
            return {
                ...state,
                notes: [
                    ...state.notes, payload
                ]
            }
        }

        case Notes.REMOVE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== payload)
            }
        }

        default: {
            return state
        }
    }
}