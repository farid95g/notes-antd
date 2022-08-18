import React from 'react'
import { IViewProps } from 'utils/interfaces/modal'

export const View: React.FC<IViewProps> = ({
    title,
    content
}) => {
    const formattedContent = content[0].toUpperCase() + content.slice(1)

    return (
        <div className='note'>
            <h2>{title}</h2>
            <p>{formattedContent}</p>
        </div>
    )
}