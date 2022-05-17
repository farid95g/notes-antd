import React from 'react'
import { Layout, Form, Input, Button, Row, Col } from 'antd'
import './App.css'
import 'antd/dist/antd.min.css'

const { Header, Footer, Sider, Content } = Layout

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  };

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
            name="basic"
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
          >
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <Form.Item
                  label="Title"
                  name="title"
                  rules={[{ required: true, message: 'Please enter note title!' }]}
                >
                  <Input placeholder='Note title' />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Content"
                  name="content"
                  rules={[{ required: true, message: 'Please enter ntoe content!' }]}
                >
                  <Input placeholder='Note content' />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
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
