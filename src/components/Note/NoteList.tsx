import React, { useContext } from 'react'
import { Row, Pagination, Col, Alert } from 'antd'
import type { PaginationProps } from 'antd'
import { Note } from 'components/Note/Note'
import { INoteListProps, INote } from 'utils/interfaces/notes'
import { NotesContext } from 'context/NotesContext/NotesContext'

export const NoteList: React.FC<INoteListProps> = ({ loading }) => {
    const {
        notes, total, currentPage, setCurrentPage
    } = useContext(NotesContext)!

    const onChange: PaginationProps['onChange'] = page => setCurrentPage(page)

    return (
        <Row gutter={[16, 24]}>
            {
                notes.length
                    ? notes?.slice(0, 4)?.map((note: INote) => (
                        <Note
                            key={note.id}
                            loading={loading}
                            {...note}
                        />
                    ))
                    : <Col span={24}>
                        <Alert
                            message='There are no notes yet..!'
                            type='info'
                            showIcon
                        />
                    </Col>
            }

            {
                total
                    ? <Col span={24} className='pagination'>
                        <Pagination
                            current={currentPage || 1}
                            onChange={onChange}
                            pageSize={4}
                            total={total}
                            showSizeChanger={false}
                        />
                    </Col>
                    : null
            }
        </Row>
    )
}