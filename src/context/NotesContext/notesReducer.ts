import { INotesContext } from 'utils/interfaces/notes'
import { Notes } from 'utils/enums/notes'

export const notesReducer = (state: INotesContext, action: { type: string, payload: any }): INotesContext => {
    const { type, payload } = action

    switch (type) {
        case Notes.GET_ALL: {
            return {
                ...state,
                ...payload
            }
        }
        
        case Notes.ADD: {
            return {
                ...state,
                notes: [
                    ...state.notes, payload
                ]
            }
        }

        case Notes.UPDATE: {
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === payload.id)
                        return payload

                    return note
                })
            }
        }

        case Notes.DELETE: {
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