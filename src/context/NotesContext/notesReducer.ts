import { INotesContext } from 'utils/interfaces/notes'
import { Notes } from 'utils/enums/notes'

export const notesReducer = (state: INotesContext, action: { type: string, payload: any }): INotesContext => {
    const { type, payload } = action

    switch (type) {
        case Notes.LOADING: {
            return {
                ...state,
                loading: true
            }
        }
            
        case Notes.GET_ALL: {
            return {
                ...state,
                ...payload,
                loading: false
            }
        }
        
        case Notes.ADD: {
            return {
                ...state,
                notes: [
                    ...state.notes, payload.note
                ],
                total: payload.total
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

        case Notes.SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: payload
            }
        }

        default: {
            return state
        }
    }
}