import React, { Reducer, useReducer } from 'react'
import { Notes } from '../../utils/enums/notes'
import { INote, INotesContext } from '../../utils/interfaces/notes'
import { NotesContext } from './NotesContext'
import { notesReducer } from './notesReducer'

const notes: Array<INote> = [
    { id: 1, title: 'Note 1', content: 'Content 1 - lorem ipsum dolor set amet' },
    { id: 2, title: 'Note 2', content: 'Content 2 - lorem ipsum dolor set amet' },
    { id: 3, title: 'Note 3', content: 'Content 3 - lorem ipsum dolor set amet' },
]

export const NotesProvider: React.FC<any> = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<INotesContext, any>>(notesReducer, {
        notes: notes,
        addNote: () => {},
        removeNote: () => {}
    })

    const addNote = (note: INote) => dispatch({ type: Notes.ADD_NOTE, payload: note })

    const removeNote = (id: number) => dispatch({ type: Notes.REMOVE_NOTE, payload: id })

    const notesContext = {
        notes: state.notes,
        addNote,
        removeNote
    } as INotesContext

    return (
        <NotesContext.Provider value={notesContext}>
            {children}
        </NotesContext.Provider>
    )
}