import React, { useContext, useEffect } from 'react'
import { Modal as AntModal, Form, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { ModalContext } from '../../../context/ModalContext/ModalContext'
import { Modal as ModalEnum, ModalStatus } from '../../../utils/enums/modal'
import { NotesContext } from '../../../context/NotesContext/NotesContext'
import { Edit } from './Edit'
import { View } from './View'
import { INote } from '../../../utils/interfaces/notes'

export const Modal: React.FC = () => {
    const { visibility, selectedNote, toggleModal, status } = useContext(ModalContext)!
    const { updateNote } = useContext(NotesContext)!
    const [form] = Form.useForm()

    useEffect(() => {
        form.setFieldsValue({
            title: selectedNote?.title,
            content: selectedNote?.content
        })
    }, [visibility])

    const onFinish = (values: { title: string, content: string }): void => {
        const { title, content } = values

        if (form.isFieldsTouched()) {
            updateNote({
                id: selectedNote?.id,
                title: title,
                content: content
            })
        }

        toggleModal(ModalEnum.HIDE_MODAL)
    }

    const onFinishFailed = (errorInfo: any): void => {
        console.error('Failed: ', errorInfo)
    }

    const okHandler = () => {
        if (form.isFieldsTouched()) {
            form.submit()
        }
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
                        <strong>{status === ModalStatus.VIEW ? 'View' : 'Edit'} Note</strong>
                    </Space>
                }
                okText='Update'
                centered
                visible={visibility}
                onOk={okHandler}
                onCancel={cancelHandler}
                destroyOnClose={true}
                forceRender
            >
                {
                    status === ModalStatus.VIEW
                        ? <Edit
                            title={selectedNote!.title}
                            content={selectedNote!.content}
                        />
                        : <View
                            selectedNote={selectedNote as INote}
                            formRef={form}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        />
                }
            </AntModal>
        </>
    )
}