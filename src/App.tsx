import React, { useContext, useEffect, useState } from 'react'
import { Layout, Form, Input, Button, Row, Col } from 'antd'
import { FileDoneOutlined } from '@ant-design/icons'
import { NoteList } from './components/NoteList'
import { NotesContext } from './context/NotesContext/NoteContext'
import 'antd/dist/antd.min.css'
import './App.css'

const { Header, Footer, Sider, Content } = Layout

const App: React.FC = () => {
  const notes = useContext(NotesContext)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  })

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Layout>
      <Header>
        <div className='header'>
          <h1>Notes Ant Design</h1>
        </div>
      </Header>

      <Layout className='main'>
        {/* <Sider></Sider> */}

        <Content>
          <Form
            name='basic'
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            layout='vertical'
          >
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label='Title'
                  name='title'
                  rules={[{ required: true, message: 'Please enter note title!' }]}
                >
                  <Input placeholder='Note title' />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label='Content'
                  name='content'
                  rules={[{ required: true, message: 'Please enter ntoe content!' }]}
                >
                  <Input placeholder='Note content' />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button type='primary' htmlType='submit' icon={<FileDoneOutlined />} className='create-note'>
                Submit
              </Button>
            </Form.Item>
          </Form>

          <NoteList notes={notes} loading={loading} />
        </Content>
      </Layout>

      <Footer>
        <div className='footer'>
          <strong>&copy;Ant Design Footer</strong>
          <strong>{new Date().getFullYear()}</strong>
        </div>
      </Footer>
    </Layout>
  )
}

export default App
