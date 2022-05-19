import React from 'react'
import { Layout as AntLayout } from 'antd'
import { ILayoutProps } from '../../utils/interfaces/layout'

const { Header, Footer, Sider, Content } = AntLayout

export const Layout: React.FC<ILayoutProps> = ({ 
    children
 }) => (
    <AntLayout>
        <Header>
            <div className='header'>
                <h1>Notes Ant Design</h1>
            </div>
        </Header>

        <AntLayout className='main'>
            {/* <Sider></Sider> */}

            <Content>
                {children}
            </Content>
        </AntLayout>

        <Footer>
            <div className='footer'>
                <strong>&copy; Ant Design Footer</strong>
                <strong>{new Date().getFullYear()}</strong>
            </div>
        </Footer>
    </AntLayout>
)