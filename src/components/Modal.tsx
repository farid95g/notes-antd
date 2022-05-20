import React, { useContext } from 'react'
import { Modal as AntModal, Input, Form, Row, Col, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { ModalContext } from '../context/ModalContext/ModalContext'
import { Modal as ModalEnum } from './../utils/enums/modal'

export const Modal: React.FC = () => {
    const { visibility, selectedNote, toggleModal } = useContext(ModalContext)!

    const onFinish = (values: { title: string, content: string }): void => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    const okHandler = () => {
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
            >
                <h3>{selectedNote?.title}</h3>
                <h3>{selectedNote?.content}</h3>
            </AntModal>
        </>
    )
}