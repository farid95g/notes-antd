import { Theme } from 'utils/enums/theme'
import { IThemeContext } from 'utils/interfaces/theme'

export const themeReducer = (state: IThemeContext, action: { type: string, payload: string }): IThemeContext => {
    const { type, payload } = action

    switch (type) {
        case Theme.SET_THEME: {
            return {
                ...state,
                theme: payload
            }
        }

        default: {
            return state
        }
    }
}