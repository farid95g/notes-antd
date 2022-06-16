import { IModalContext } from '../../utils/interfaces/modal'
import { Modal } from '../../utils/enums/modal'
import { INote } from '../../utils/interfaces/notes'

export const modalReducer = (state: IModalContext, action: { type: string, payload?: INote | string }): IModalContext => {
    const { type, payload } = action

    switch (type) {
        case Modal.SHOW_MODAL: {
            return {
                ...state,
                visibility: true,
                status: payload as string
            }
        }

        case Modal.SET_SELECTED_NOTE: {
            return {
                ...state,
                selectedNote: payload as INote
            }
        }
        
        case Modal.HIDE_MODAL: {
            return {
                ...state,
                visibility: false,
                status: undefined,
                selectedNote: undefined
            }
        }

        default: {
            return state
        }
    }
}