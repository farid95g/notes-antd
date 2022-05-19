import { IModalContext } from '../../utils/interfaces/modal'
import { Modal } from '../../utils/enums/modal'

export const modalReducer = (state: IModalContext, action: { type: string }): IModalContext => {
    const { type } = action

    switch (type) {
        case Modal.SHOW_MODAL: {
            return {
                ...state,
                visibility: true
            }
        }
        
        case Modal.HIDE_MODAL: {
            return {
                ...state,
                visibility: false
            }
        }

        default: {
            return state
        }
    }
}