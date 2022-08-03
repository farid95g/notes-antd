import React, { useContext, useState } from 'react'
import { Row, Pagination, Col } from 'antd'
import type { PaginationProps } from 'antd'
import { Note } from 'components/Note/Note'
import { INoteListProps, INote } from 'utils/interfaces/notes'
import { NotesContext } from 'context/NotesContext/NotesContext'

export const NoteList: React.FC<INoteListProps> = ({ loading }) => {
    const { notes, total } = useContext(NotesContext)!
    const [current, setCurrent] = useState(1)

    const onChange: PaginationProps['onChange'] = page => setCurrent(page)

    return (
        <Row gutter={[16, 24]}>
            {
                notes?.map((note: INote) => (
                    <Note
                        key={note.id}
                        loading={loading}
                        {...note}
                    />
                ))
            }

            {
                total
                    ? <Col span={24} className='pagination'>
                        <Pagination
                            current={current}
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