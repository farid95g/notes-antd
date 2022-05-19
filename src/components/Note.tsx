import React, { useContext } from 'react'
import { Skeleton, Card, Avatar, Col } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { INoteProps } from '../utils/interfaces/notes'
import { NotesContext } from '../context/NotesContext/NotesContext'
import { ModalContext } from '../context/ModalContext/ModalContext'
import { Modal } from '../utils/enums/modal'

const { Meta } = Card

export const Note: React.FC<INoteProps> = ({ 
    id, 
    title, 
    content, 
    loading
}) => {
    const { removeNote } = useContext(NotesContext)!
    const { toggleModal } = useContext(ModalContext)!

    return (
        <Col xs={24} sm={24} md={8}>
            <Card
                style={{ width: '100%', marginTop: 16 }}
                actions={[
                    <EditOutlined key='edit' onClick={toggleModal.bind(null, Modal.SHOW_MODAL)} />,
                    <DeleteOutlined key='delete' onClick={removeNote.bind(null, id)} />
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