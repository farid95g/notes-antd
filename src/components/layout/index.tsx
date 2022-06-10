import React from 'react'
import { Layout as AntLayout } from 'antd'
import { ILayoutProps } from '../../utils/interfaces/layout'
import { Header } from './Header'
import { Footer } from './Footer'

const { Content } = AntLayout

export const Layout: React.FC<ILayoutProps> = ({ 
    children
 }) => (
    <AntLayout>
        <Header />

        <AntLayout className='main'>
            <Content>
                {children}
            </Content>
        </AntLayout>

        <Footer />
    </AntLayout>
)