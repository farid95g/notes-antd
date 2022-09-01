import React, { useContext } from 'react'
import { Form, Input, Button, Row, Col, Tooltip } from 'antd'
import { FileDoneOutlined } from '@ant-design/icons'
import { NotesContext } from 'context/NotesContext/NotesContext'
import { useForm } from 'antd/lib/form/Form'
import { API_Response } from 'utils/enums/response'
import { useTranslation } from 'react-i18next'

export const CreateNote: React.FC = () => {
    const { t } = useTranslation()
    const { addNote, isAdding } = useContext(NotesContext)!
    const [form] = useForm()

    const onFinish = async (values: { title: string, content: string }): Promise<void> => {
        const status = await addNote({
            title: values.title,
            content: values.content,
            id: Math.random().toString()
        })

        if (status === API_Response.CREATED) {
            form.resetFields()
        }
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
                        label={t('labels.title')}
                        name='title'
                        rules={[{ required: true, message: 'Please enter note title!' }]}
                    >
                        <Input placeholder={t('placeholders.title')} />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={12}>
                    <Form.Item
                        label={t('labels.content')}
                        name='content'
                        rules={[{ required: true, message: 'Please enter note content!' }]}
                    >
                        <Input placeholder={t('placeholders.content')} />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item wrapperCol={{ span: 24 }}>
                <Tooltip title='Submit' placement='top'>
                    <Button
                        type='primary'
                        htmlType='submit'
                        icon={<FileDoneOutlined />}
                        className='create-note'
                        loading={isAdding}
                    >{t('buttons.save')}</Button>
                </Tooltip>
            </Form.Item>
        </Form>
    )
}