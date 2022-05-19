export interface INote {
    id: number
    title: string
    content: string
}

export interface INoteListProps {
    notes: Array<INote>
    loading: boolean
}

export interface INoteProps {
    id: number
    title: string
    content: string
    loading: boolean
}

export interface ICreateNoteProps {
    onFinish: (values: { title: string, content: string }) => void
    onFinishFailed: (errorInfo: any) => void
}

export interface INotesContext {
    notes: INote[]
    addNote: (note: INote) => void,
    removeNote: (id: number) => void
}