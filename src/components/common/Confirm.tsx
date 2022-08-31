import React from 'react'
import { Popconfirm, message } from 'antd'
import { IConfirm } from 'utils/interfaces/confirm'
import { API_Response } from 'utils/enums/response'

const confirm = async (cb: (id: string) => void, id: string, notification: string) => {
    const status: any = await cb(id)

    if (status === API_Response.OK) {
        return message.success(notification)
    }

    message.error('Something went wrong!')
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