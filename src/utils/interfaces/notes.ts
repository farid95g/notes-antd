export interface INote {
    id?: string
    title: string
    content: string
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
    loading: boolean
    getAllNotes: (page: number) => void
    addNote: (note: INote) => void
    updateNote: (note: INote) => void
    removeNote: (id: string) => void,
    setCurrentPage: (currentPage: number) => void
}