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