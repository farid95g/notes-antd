import React, { Reducer, useReducer } from 'react'
import { IModalContext } from '../../utils/interfaces/modal'
import { INote } from '../../utils/interfaces/notes'
import { ModalContext } from './ModalContext'
import { modalReducer } from './modalReducer'

export const ModalProvider: React.FC<any> = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<IModalContext, any>>(modalReducer, {
        visibility: false,
        selectedNote: undefined,
        toggleModal: () => {}
    })
    
    const toggleModal = (type: string, selectedNote?: INote) => dispatch({ type, selectedNote })

    const modalContext = {
        visibility: state.visibility,
        selectedNote: state.selectedNote,
        toggleModal
    } as IModalContext

    return (
        <ModalContext.Provider value={modalContext}>
            {children}
        </ModalContext.Provider>
    )
}