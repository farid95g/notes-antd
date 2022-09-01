import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEn from './en/translation.json'
import translationAz from './az/translation.json'
import translationRu from './ru/translation.json'

const resources = {
    en: {
        translation: translationEn
    },
    az: {
        translation: translationAz
    },
    ru: {
        translation: translationRu
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en'
    })

export default i18next