import React from 'react'
import { Footer as AntFooter } from 'antd/lib/layout/layout'

export const Footer: React.FC = () => (
    <AntFooter>
        <div className='footer'>
            <strong>&copy; AntD App Footer</strong>
            <strong>{new Date().getFullYear()}</strong>
        </div>
    </AntFooter>
)