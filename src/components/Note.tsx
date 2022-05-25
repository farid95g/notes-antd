import React, { useContext } from 'react'
import { Skeleton, Card, Avatar, Col, Popconfirm, message } from 'antd'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { INoteProps } from '../utils/interfaces/notes'
import { NotesContext } from '../context/NotesContext/NotesContext'
import { ModalContext } from '../context/ModalContext/ModalContext'
import { Modal } from '../utils/enums/modal'

const { Meta } = Card

const text = 'Are you sure to delete this task?'
const confirm = (func: (id: string) => void, id: string) => {
    message.success('Note Deleted.')
    func(id)
}

export const Note: React.FC<INoteProps> = ({ 
    id, 
    title, 
    content, 
    loading
}) => {
    const { removeNote } = useContext(NotesContext)!
    const { toggleModal } = useContext(ModalContext)!

    return (
        <Col xs={24} sm={12} md={12} lg={6}>
            <Card
                style={{ width: '100%', marginTop: 16 }}
                actions={[
                    <EyeOutlined key='view' />,
                    <EditOutlined 
                        key='edit' 
                        onClick={toggleModal.bind(null, Modal.SHOW_MODAL, { id, title, content })}
                    />,
                    <Popconfirm
                        title={text}
                        placement='bottom'
                        okText='Yes'
                        cancelText='No'
                        onConfirm={confirm.bind(null, removeNote, id)}
                    >
                        <DeleteOutlined key='delete' />
                    </Popconfirm>
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