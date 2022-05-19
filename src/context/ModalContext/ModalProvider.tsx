import React, { Reducer, useReducer } from 'react'
import { IModalContext } from '../../utils/interfaces/modal'
import { ModalContext } from './ModalContext'
import { modalReducer } from './modalReducer'

export const ModalProvider: React.FC<any> = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<IModalContext, any>>(modalReducer, {
        visibility: false,
        toggleModal: () => {}
    })
    
    const toggleModal = (type: string) => dispatch({ type })

    const modalContext = {
        visibility: state.visibility,
        toggleModal
    } as IModalContext

    return (
        <ModalContext.Provider value={modalContext}>
            {children}
        </ModalContext.Provider>
    )
}