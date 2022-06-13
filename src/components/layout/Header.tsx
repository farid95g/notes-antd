import React, { useContext } from 'react'
import { Header as AntHeader } from 'antd/lib/layout/layout'
import { Row, Col, Select, Space, Switch } from 'antd'
import { ThemeContext } from '../../context/ThemeContext/ThemeContext'

const { Option } = Select

export const Header: React.FC = () => {
    const { setTheme } = useContext(ThemeContext)!

    const handleLanguageSelection = (value: string) => {
        console.log(`selected ${value}`)
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
                    <h1>Notes Ant Design</h1>
                </Col>

                <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Space size='middle'>
                        <Select defaultValue="en" style={{ width: 120, marginRight: '1rem' }} onChange={handleLanguageSelection}>
                            <Option value="en">English</Option>
                            <Option value="az">Azerbaijani</Option>
                            <Option value="ru">Russian</Option>
                        </Select>
                    </Space>
                    
                    <Space size='middle'>
                        <Switch
                            checkedChildren='Light'
                            unCheckedChildren='Dark'
                            defaultChecked={false}
                            style={{ width: '4.2rem' }}
                            onChange={value => onThemeChange(value)}
                        />
                    </Space>
                </Col>
            </Row>
        </AntHeader>
    )
}