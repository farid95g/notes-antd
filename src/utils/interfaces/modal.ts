import { INote } from "utils/interfaces/notes"

export interface IModalContext {
    visibility: boolean
    selectedNote?: INote
    status?: string
    toggleModal: (type: string, status?: string) => void
    setSelectedNote: (type: string, selectedNote?: INote) => void
}

export interface IViewProps {
    title: string
    content: string
}

export interface IEditProps {
    selectedNote: INote
    formRef: any
    onFinish: (values: { title: string, content: string }) => void
    onFinishFailed: (errorInfo: any) => void
}