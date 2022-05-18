import { createContext } from 'react'
import { INotesContext } from '../../utils/interfaces/notes'

export const NotesContext = createContext<INotesContext | null>(null)