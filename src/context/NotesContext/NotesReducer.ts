import { INotesContext } from '../../utils/interfaces/notes'
import { Notes } from '../../utils/enums/notes'

export const notesReducer = (state: INotesContext, action: { type: string, payload: any }): INotesContext => {
    switch (action.type) {
        case Notes.ADD_NOTE: {
            return {
                ...state,
                notes: [
                    ...state.notes, action.payload
                ]
            }
        }

        default: {
            return state
        }
    }
}