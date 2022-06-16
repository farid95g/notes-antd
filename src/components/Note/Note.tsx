import React, { useContext } from 'react'
import { Skeleton, Card, Avatar, Col } from 'antd'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { INoteProps } from '../../utils/interfaces/notes'
import { NotesContext } from '../../context/NotesContext/NotesContext'
import { ModalContext } from '../../context/ModalContext/ModalContext'
import { Modal, ModalStatus } from '../../utils/enums/modal'
import { Confirm } from '../common/Confirm'

const { Meta } = Card

export const Note: React.FC<INoteProps> = ({ 
    id, 
    title, 
    content, 
    loading
}) => {
    const { removeNote } = useContext(NotesContext)!
    const { setSelectedNote, status, toggleModal } = useContext(ModalContext)!

    return (
        <Col xs={24} sm={12} md={12} lg={6}>
            <Card
                style={{ width: '100%', marginTop: 16 }}
                actions={[
                    <EyeOutlined
                        key='view'
                        onClick={() => {
                            toggleModal(Modal.SHOW_MODAL, ModalStatus.VIEW)
                            setSelectedNote(Modal.SET_SELECTED_NOTE, { id, title, content })
                        }}
                     />,
                    <EditOutlined 
                        key='edit' 
                        onClick={() => {
                            toggleModal(Modal.SHOW_MODAL, ModalStatus.EDIT)
                            setSelectedNote(Modal.SET_SELECTED_NOTE, { id, title, content })
                        }}
                    />,
                    <Confirm
                        question='Are you sure to delete this task?'
                        cb={removeNote}
                        id={id ?? ''}
                        notification='Note Deleted.'
                    >
                        <DeleteOutlined key='delete' />
                    </Confirm>
                ]}
            >
                <Skeleton 
                    loading={loading} 
                    paragraph={{ rows: 1, width: '100%' }} 
                    title={{ width: '100%' }}
                    active
                    avatar
                >
                    <Meta
                        avatar={<Avatar src={`https://joeschmoe.io/api/v1/:${id}`} />}
                        title={title}
                        description={content}
                    />
                </Skeleton>
            </Card>
        </Col>
    )
}