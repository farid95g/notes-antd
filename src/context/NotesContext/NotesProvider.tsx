import React, { Reducer, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Notes } from '../../utils/enums/notes'
import { INote, INotesContext } from '../../utils/interfaces/notes'
import { NotesContext } from './NotesContext'
import { notesReducer } from './notesReducer'

const notes: Array<INote> = new Array(5).fill(undefined).map((_, i) => ({
    id: uuidv4(),
    title: `Note ${i + 1}`,
    content: `Content ${i + 1} - lorem ipsum dolor set amet`
}))

export const NotesProvider: React.FC<any> = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<INotesContext, any>>(notesReducer, {
        notes: notes,
        addNote: () => {},
        removeNote: () => {}
    })

    const addNote = (note: INote) => dispatch({ type: Notes.ADD_NOTE, payload: note })

    const removeNote = (id: string) => dispatch({ type: Notes.REMOVE_NOTE, payload: id })

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