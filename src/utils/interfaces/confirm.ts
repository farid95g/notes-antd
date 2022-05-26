export interface IConfirm {
    question: string
    cb: (id: string) => void
    id: string
    notification: string
    children: any
}