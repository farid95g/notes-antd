import { INote } from "./notes"

export interface IModalContext {
    visibility: boolean
    selectedNote?: INote
    toggleModal: (type: string, selectedNote?: INote) => void
}