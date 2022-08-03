export interface INote {
    id?: string
    title: string
    content: string
}

export interface INoteListProps {
    loading: boolean
}

export interface INoteProps {
    id?: string
    title: string
    content: string
    loading: boolean
}

export interface INotesContext {
    notes: INote[]
    total: number | undefined,
    currentPage: number
    getAllNotes: (page: number) => void
    addNote: (note: INote) => void
    updateNote: (note: INote) => void
    removeNote: (id: string) => void,
    setCurrentPage: (currentPage: number) => void
}