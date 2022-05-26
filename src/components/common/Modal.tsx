import React, { useContext, useRef, useState } from 'react'
import { Modal as AntModal, Input, Form, Row, Col, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { ModalContext } from '../../context/ModalContext/ModalContext'
import { Modal as ModalEnum } from '../../utils/enums/modal'
import { NotesContext } from '../../context/NotesContext/NotesContext'

export const Modal: React.FC = () => {
    const { visibility, selectedNote, toggleModal } = useContext(ModalContext)!
    const { updateNote } = useContext(NotesContext)!
    const [modified, setModified] = useState<Boolean>(false)
    const form = useRef<any>()

    const onFinish = (values: { title: string, content: string }): void => {
        const { title, content } = values
        const isChanged = title.trim() !== selectedNote?.title || content.trim() !== selectedNote?.content

        if (!isChanged) {
            return
        }

        updateNote({
            id: selectedNote!.id,
            title: title,
            content: content
        })
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    const onValuesChange = () => {
        setModified(true)
    }

    const okHandler = () => {
        if (modified) {
            form.current.submit()
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
                        <strong>Update Note</strong>
                    </Space>
                }
                okText='Update'
                centered
                visible={visibility}
                onOk={okHandler}
                onCancel={cancelHandler}
                destroyOnClose={true}
            >
                <Form
                    layout='vertical'
                    initialValues={{
                        title: selectedNote?.title,
                        content: selectedNote?.content
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    onValuesChange={onValuesChange}
                    ref={form}
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
            </AntModal>
        </>
    )
}