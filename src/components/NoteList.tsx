import React from 'react'
import { Row } from 'antd'
import { Note } from './Note'
import { INoteListProps, INote } from '../utils/interfaces/notes'

export const NoteList: React.FC<INoteListProps> = ({ 
    notes, 
    loading 
}) => (
    <Row gutter={[16, 24]}>
        {notes.map(({ id, title, content }: INote) => (
            <Note key={id} id={id} title={title} content={content} loading={loading} />
        ))}
    </Row>
)