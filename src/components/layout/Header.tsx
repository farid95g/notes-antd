import React from 'react'
import { Header as AntHeader } from 'antd/lib/layout/layout'
import { Select } from 'antd'

const { Option } = Select

export const Header: React.FC = () => {
    const handleLanguageSelection = (value: string) => {
        console.log(`selected ${value}`)
    }

    return (
        <AntHeader>
            <div className='header'>
                <h1>Notes Ant Design</h1>

                <div>
                    <Select defaultValue="en" style={{ width: 120 }} onChange={handleLanguageSelection}>
                        <Option value="en">English</Option>
                        <Option value="az">Azerbaijani</Option>
                        <Option value="ru">Russian</Option>
                    </Select>
                </div>
            </div>
        </AntHeader>
    )
}