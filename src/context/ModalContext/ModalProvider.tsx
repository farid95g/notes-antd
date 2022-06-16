import React, { Reducer, useReducer } from 'react'
import { IModalContext } from '../../utils/interfaces/modal'
import { INote } from '../../utils/interfaces/notes'
import { ModalContext } from './ModalContext'
import { modalReducer } from './modalReducer'

export const ModalProvider: React.FC<any> = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<IModalContext, any>>(modalReducer, {
        visibility: false,
        selectedNote: undefined,
        status: undefined,
        toggleModal: () => {},
        setSelectedNote: () => {}
    })

    const toggleModal = (type: string, payload: string) => dispatch({ type, payload })
    
    const setSelectedNote = (type: string, payload?: INote) => dispatch({ type, payload })

    const modalContext = {
        visibility: state.visibility,
        selectedNote: state.selectedNote,
        status: state.status,
        toggleModal,
        setSelectedNote
    } as IModalContext

    return (
        <ModalContext.Provider value={modalContext}>
            {children}
        </ModalContext.Provider>
    )
}