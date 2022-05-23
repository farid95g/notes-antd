import React, { useContext } from 'react'
import { Row } from 'antd'
import { Note } from './Note'
import { INoteListProps, INote } from '../utils/interfaces/notes'
import { NotesContext } from '../context/NotesContext/NotesContext'

export const NoteList: React.FC<INoteListProps> = ({ loading }) => {
    const { notes } = useContext(NotesContext)!

    return (
        <Row gutter={[16, 24]}>
            {notes.map((props: INote) => (
                <Note
                    key={props.id}
                    loading={loading}
                    {...props}
                />
            ))}
        </Row>
    )
}