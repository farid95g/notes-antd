import React, { useContext } from 'react'
import { Modal as AntModal, Input, Form, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { ModalContext } from '../../../context/ModalContext/ModalContext'
import { Modal as ModalEnum, ModalStatus } from '../../../utils/enums/modal'
import { NotesContext } from '../../../context/NotesContext/NotesContext'
import { Edit } from './Edit'

export const Modal: React.FC = () => {
    const { visibility, selectedNote, toggleModal, status } = useContext(ModalContext)!
    const { updateNote } = useContext(NotesContext)!
    const [form] = Form.useForm()

    const onFinish = (values: { title: string, content: string }): void => {
        const { title, content } = values

        if (form.isFieldsTouched()) {
            updateNote({
                id: selectedNote!.id,
                title: title,
                content: content
            })
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    const okHandler = () => {
        if (form.isFieldsTouched()) {
            form.submit()
        }

        toggleModal(ModalEnum.HIDE_MODAL)
    }

    const cancelHandler = () => {
        toggleModal(ModalEnum.HIDE_MODAL)
    }

    return (
        <>
            <AntModal
                title={
                    <Space size='middle'>
                        <EditOutlined />
                        <strong>Edit Note</strong>
                    </Space>
                }
                okText='Update'
                centered
                visible={visibility}
                onOk={okHandler}
                onCancel={cancelHandler}
                destroyOnClose={true}
            >
                {
                    status === ModalStatus.VIEW
                        ? <Edit
                            title={selectedNote!.title}
                            content={selectedNote!.content}
                        />
                        : <Form
                            layout='vertical'
                            initialValues={{
                                title: selectedNote?.title,
                                content: selectedNote?.content
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            form={form}
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
                }
            </AntModal>
        </>
    )
}