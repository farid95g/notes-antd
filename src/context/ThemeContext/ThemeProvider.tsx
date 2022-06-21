import React, { Reducer, useReducer } from 'react'
import { ThemeContext } from 'context/ThemeContext/ThemeContext'
import { IThemeContext } from 'utils/interfaces/theme'
import { themeReducer } from 'context/ThemeContext/themeReducer'
import { Theme } from 'utils/enums/theme'
import { localStorageService as ls } from 'services/localStorageService'

export const ThemeProvider: React.FC<any> = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<IThemeContext, any>>(themeReducer, {
        theme: 'light',
        setTheme: () => {}
    })

    const setTheme = (theme: string) => {
        dispatch({ type: Theme.SET_THEME, payload: theme })
        ls.set('theme', theme)
    }

    const themeContext = {
        theme: state.theme,
        setTheme
    } as IThemeContext

    return (
        <ThemeContext.Provider value={themeContext}>
            <div data-theme={themeContext.theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}