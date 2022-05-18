import React from 'react'
import { Layout } from 'antd'
import { ILayoutProps } from '../../utils/interfaces/layout'

const { Header, Footer, Sider, Content } = Layout

export const AppLayout: React.FC<ILayoutProps> = ({ 
    children
 }) => (
    <Layout>
        <Header>
            <div className='header'>
                <h1>Notes Ant Design</h1>
            </div>
        </Header>

        <Layout className='main'>
            {/* <Sider></Sider> */}

            <Content>
                {children}
            </Content>
        </Layout>

        <Footer>
            <div className='footer'>
                <strong>&copy; Ant Design Footer</strong>
                <strong>{new Date().getFullYear()}</strong>
            </div>
        </Footer>
    </Layout>
)