import { IModalContext } from '../../utils/interfaces/modal'
import { Modal } from '../../utils/enums/modal'
import { INote } from '../../utils/interfaces/notes'

export const modalReducer = (state: IModalContext, action: { type: string, selectedNote?: INote }): IModalContext => {
    const { type, selectedNote } = action

    switch (type) {
        case Modal.SHOW_MODAL: {
            return {
                ...state,
                visibility: true,
                selectedNote
            }
        }
        
        case Modal.HIDE_MODAL: {
            return {
                ...state,
                visibility: false,
                selectedNote
            }
        }

        default: {
            return state
        }
    }
}