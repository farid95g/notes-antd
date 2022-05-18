import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { FileDoneOutlined } from '@ant-design/icons'
import { ICreateNoteProps } from '../utils/interfaces/notes'

export const CreateNote: React.FC<ICreateNoteProps> = ({ 
    onFinish, 
    onFinishFailed
}) => (
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
)