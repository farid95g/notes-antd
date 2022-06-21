import { createContext } from 'react'
import { IThemeContext } from 'utils/interfaces/theme'

export const ThemeContext = createContext<IThemeContext | null>(null)