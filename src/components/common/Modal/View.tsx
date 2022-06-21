import React from 'react'
import { Input, Form } from 'antd'
import { IViewProps } from 'utils/interfaces/modal'

export const View: React.FC<IViewProps> = ({
    selectedNote,
    formRef,
    onFinish,
    onFinishFailed
}) => {
    return (
        <Form
            layout='vertical'
            initialValues={{
                title: selectedNote?.title,
                content: selectedNote?.content
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            form={formRef}
        >
            <Form.Item
                name='title'
                label='Post title'
            >
                <Input placeholder='Title' />
            </Form.Item>

            <Form.Item
                name='content'
                label='Post content'
            >
                <Input.TextArea rows={4} placeholder='Content'></Input.TextArea>
            </Form.Item>
        </Form>
    )
}