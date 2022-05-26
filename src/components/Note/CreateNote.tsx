import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Form, Input, Button, Row, Col, Tooltip } from 'antd'
import { FileDoneOutlined } from '@ant-design/icons'
import { NotesContext } from '../../context/NotesContext/NotesContext'
import { useForm } from 'antd/lib/form/Form'

export const CreateNote: React.FC = () => {
    const { addNote } = useContext(NotesContext)!
    const [form] = useForm()

    const onFinish = (values: { title: string, content: string }): void => {
        addNote({
            id: uuidv4(),
            title: values.title,
            content: values.content
        })

        form.resetFields()
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <Form
            name='basic'
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            layout='vertical'
            form={form}
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
                        rules={[{ required: true, message: 'Please enter note content!' }]}
                    >
                        <Input placeholder='Note content' />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item wrapperCol={{ span: 24 }}>
                <Tooltip title='Submit' placement='top'>
                    <Button type='primary' htmlType='submit' icon={<FileDoneOutlined />} className='create-note'>
                        Submit
                    </Button>
                </Tooltip>
            </Form.Item>
        </Form>
    )
}