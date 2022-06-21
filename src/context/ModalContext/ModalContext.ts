import { createContext } from 'react'
import { IModalContext } from 'utils/interfaces/modal'

export const ModalContext = createContext<IModalContext | null>(null)