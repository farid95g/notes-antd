import React, { useContext, useEffect } from 'react'
import { Modal as AntModal, Form, Space, Button } from 'antd'
import { EditOutlined, FontSizeOutlined } from '@ant-design/icons'
import { ModalContext } from 'context/ModalContext/ModalContext'
import { Modal as ModalEnum, ModalStatus } from 'utils/enums/modal'
import { NotesContext } from 'context/NotesContext/NotesContext'
import { View } from 'components/common/Modal/View'
import { Edit } from 'components/common/Modal/Edit'
import { INote } from 'utils/interfaces/notes'
import { ThemeContext } from 'context/ThemeContext/ThemeContext'

export const Modal: React.FC = () => {
    const { visibility, selectedNote, toggleModal, status } = useContext(ModalContext)!
    const { updateNote } = useContext(NotesContext)!
    const { theme } = useContext(ThemeContext)!
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

    const footer = status === ModalStatus.EDIT ? [
        <Button key="back"
            onClick={cancelHandler}
        >Cancel</Button>,
        <Button key="submit" type="primary"
            // loading={loading}
            onClick={okHandler}
        >Update</Button>
    ] : [
        <Button key="back"
            onClick={cancelHandler}
        >Cancel</Button>
    ]

    return (
        <>
            <AntModal
                title={
                    <Space size='middle'>
                        {status === ModalStatus.VIEW
                            ? <FontSizeOutlined />
                            : <EditOutlined />
                        }
                        <strong>{status === ModalStatus.VIEW ? 'View' : 'Edit'} Note</strong>
                    </Space>
                }
                centered
                visible={visibility}
                onCancel={cancelHandler}
                destroyOnClose={true}
                forceRender
                data-theme={theme}
                footer={footer}
            >
                {
                    status === ModalStatus.VIEW
                        ? <View
                            title={selectedNote!.title}
                            content={selectedNote!.content}
                        />
                        : <Edit
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