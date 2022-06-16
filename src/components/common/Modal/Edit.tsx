import React from 'react'
import { IEditProps } from '../../../utils/interfaces/modal'

export const Edit: React.FC<IEditProps> = ({
    title,
    content
}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}