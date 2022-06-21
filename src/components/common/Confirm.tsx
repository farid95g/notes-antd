import React from 'react'
import { Popconfirm, message } from 'antd'
import { IConfirm } from 'utils/interfaces/confirm'

const confirm = (cb: (id: string) => void, id: string, notification: string) => {
    message.success(notification)
    cb(id)
}

export const Confirm: React.FC<IConfirm> = ({
    question, cb, id, notification, children
}) => {
    return (
        <Popconfirm
            title={question}
            placement='bottom'
            okText='Yes'
            cancelText='No'
            onConfirm={confirm.bind(null, cb, id, notification)}
        >
            {children}
        </Popconfirm>
    )
}