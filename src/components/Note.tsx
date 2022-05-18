import React from 'react'
import { Skeleton, Card, Avatar, Col } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { INoteProps } from '../utils/interfaces/notes'

const { Meta } = Card

export const Note: React.FC<INoteProps> = ({ id, title, content, loading }) => {
    return (
        <Col xs={24} sm={24} md={8}>
            <Card
                style={{ width: '100%', marginTop: 16 }}
                actions={[
                    <SettingOutlined key='setting' />,
                    <EditOutlined key='edit' />,
                    <EllipsisOutlined key='ellipsis' />,
                ]}
            >
                <Skeleton 
                    loading={loading} 
                    paragraph={{ rows: 1, width: '100%' }} 
                    title={{ width: '100%' }}
                    active
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