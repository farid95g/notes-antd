import { INote } from "./notes"

export interface IModalContext {
    visibility: boolean
    selectedNote?: INote
    status?: string
    toggleModal: (type: string, status?: string) => void
    setSelectedNote: (type: string, selectedNote?: INote) => void
}

export interface IEditProps {
    title: string
    content: string
}
