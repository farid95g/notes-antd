import React, { Reducer, useReducer } from 'react'
import { noteService } from 'services/noteService'
import { Notes } from 'utils/enums/notes'
import { INote, INotesContext } from 'utils/interfaces/notes'
import { NotesContext } from 'context/NotesContext/NotesContext'
import { notesReducer } from 'context/NotesContext/notesReducer'

export const NotesProvider: React.FC<any> = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<INotesContext, any>>(notesReducer, {
        notes: [],
        total: undefined,
        currentPage: 1,
        isFetching: false,
        isAdding: false,
        getAllNotes: () => {},
        addNote: () => {},
        updateNote: () => {},
        removeNote: () => {},
        setCurrentPage: () => {}
    })

    const getAllNotes = (page: number) => {
        dispatch({ type: Notes.IS_FETCHING })
        
        noteService.getAll(page)
            .then(payload => {
                if (payload.notes.length) {
                    dispatch({ type: Notes.GET_ALL, payload })
                } else {
                    setCurrentPage(state.currentPage - 1)
                }
            })
    }

    const addNote = (note: INote) => {
        dispatch({ type: Notes.IS_ADDING })
        
        noteService.add(note)
            .then((note) => dispatch({
                type: Notes.ADD,
                payload: { note, total: state.total ? state.total + 1 : 1 }
            }))
    }

    const updateNote = (note: INote) => {
        noteService.update(note)
            .then((payload) => dispatch({ type: Notes.UPDATE, payload }))
    }

    const removeNote = (id: string) => {
        noteService.delete(id)
            .then(() => dispatch({ type: Notes.DELETE, payload: id }))
            .then(() => {
                getAllNotes(state.currentPage)
            })
    }

    const setCurrentPage = (page: number) => {
        noteService.getAll(page)
            .then(payload => {
                dispatch({ type: Notes.GET_ALL, payload })
                dispatch({ type: Notes.SET_CURRENT_PAGE, payload: page })
            })
    }

    const notesContext = {
        notes: state.notes,
        total: state.total,
        currentPage: state.currentPage,
        isFetching: state.isFetching,
        isAdding: state.isAdding,
        getAllNotes,
        addNote,
        updateNote,
        removeNote,
        setCurrentPage
    } as INotesContext

    return (
        <NotesContext.Provider value={notesContext}>
            {children}
        </NotesContext.Provider>
    )
}