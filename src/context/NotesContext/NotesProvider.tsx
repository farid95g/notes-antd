import React, { Reducer, useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { noteService } from '../../services/noteService'
import { Notes } from '../../utils/enums/notes'
import { INote, INotesContext } from '../../utils/interfaces/notes'
import { NotesContext } from './NotesContext'
import { notesReducer } from './notesReducer'

// const notes: Array<INote> = new Array(50).fill(undefined).map((_, i) => ({
//     id: uuidv4(),
//     title: `Note ${i + 1}`,
//     content: `Content ${i + 1} - Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
// }))

export const NotesProvider: React.FC<any> = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<INotesContext, any>>(notesReducer, {
        notes: [],
        addNote: () => {},
        updateNote: () => {},
        removeNote: () => {}
    })

    useEffect(() => {
        noteService.getNotes()
            .then(payload => dispatch({ type: Notes.FETCH_NOTES, payload }))
    }, [])

    const addNote = (note: INote) => {
        noteService.addNote(note)
            .then(() => dispatch({ type: Notes.ADD_NOTE, payload: note }))
    }

    const updateNote = (note: INote) => dispatch({ type: Notes.UPDATE_NOTE, payload: note })

    const removeNote = (id: string) => dispatch({ type: Notes.REMOVE_NOTE, payload: id })

    const notesContext = {
        notes: state.notes,
        addNote,
        updateNote,
        removeNote
    } as INotesContext

    return (
        <NotesContext.Provider value={notesContext}>
            {children}
        </NotesContext.Provider>
    )
}