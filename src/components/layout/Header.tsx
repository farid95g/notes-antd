import React, { useContext } from 'react'
import { Header as AntHeader } from 'antd/lib/layout/layout'
import { Row, Col, Select, Space, Switch } from 'antd'
import { ThemeContext } from 'context/ThemeContext/ThemeContext'
import { useTranslation } from 'react-i18next'

type Language = Record<string, string>
const languages: Language = {
    en: 'en',
    az: 'az',
    ru: 'ru'
}

const { Option } = Select

export const Header: React.FC = () => {
    const { t, i18n } = useTranslation()
    const { theme, setTheme } = useContext(ThemeContext)!

    const handleLanguageSelection = (value: string) => {
        i18n.changeLanguage(value)
    }

    const onThemeChange = (value: boolean) => {
        if (value) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <AntHeader>
            <Row className='header'>
                <Col span={12}>
                    <h1>Notes AntD</h1>
                </Col>

                <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Space size='middle'>
                        <Select
                            value={t(`languages.${i18n.language}`)}
                            style={{ width: 120, marginRight: '1rem' }}
                            onChange={handleLanguageSelection}
                        >
                            {Object.keys(languages).map(language => (
                                <Option
                                    value={language}
                                    key={language}
                                >{t(`languages.${language}`)}</Option>
                            ))}
                        </Select>
                    </Space>
                    
                    <Space size='middle'>
                        <Switch
                            checkedChildren={t('theme.light')}
                            unCheckedChildren={t('theme.dark')}
                            checked={theme === 'dark' ? true : false}
                            style={{ width: '4.2rem' }}
                            onChange={value => onThemeChange(value)}
                        />
                    </Space>
                </Col>
            </Row>
        </AntHeader>
    )
}