import React, { useContext } from 'react'
import { Modal as AntModal } from 'antd'
import { ModalContext } from '../context/ModalContext/ModalContext'
import { Modal as ModalEnum } from './../utils/enums/modal'

export const Modal: React.FC = () => {
    const { visibility, toggleModal } = useContext(ModalContext)!

    return (
        <>
            <AntModal
                title="Vertically centered modal dialog"
                centered
                visible={visibility}
                onOk={() => toggleModal(ModalEnum.HIDE_MODAL)}
                onCancel={() => toggleModal(ModalEnum.HIDE_MODAL)}
            >
                <h3>Some title...</h3>
                <p>Some contents...</p>
            </AntModal>
        </>
    )
}