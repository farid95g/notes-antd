import { createContext } from 'react'
import { INote } from '../../utils/interfaces/notes'

export const notes: Array<INote> = [
    { id: 1, title: 'Note 1', content: 'Content 1 - lorem ipsum dolor set amet' },
    { id: 2, title: 'Note 2', content: 'Content 2 - lorem ipsum dolor set amet' },
    { id: 3, title: 'Note 3', content: 'Content 3 - lorem ipsum dolor set amet' },
]

export const NotesContext = createContext<INote[]>(notes)