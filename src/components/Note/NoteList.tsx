import React, { useContext } from 'react'
import { Row, Pagination, Col, Alert } from 'antd'
import type { PaginationProps } from 'antd'
import { Note } from 'components/Note/Note'
import { INote } from 'utils/interfaces/notes'
import { NotesContext } from 'context/NotesContext/NotesContext'
import { Loader } from 'components/common/Loader'

export const NoteList: React.FC = () => {
    const {
        notes, total, currentPage, loading, setCurrentPage
    } = useContext(NotesContext)!

    const onChange: PaginationProps['onChange'] = page => setCurrentPage(page)

    console.log(loading)

    return (
        <Row gutter={[16, 24]}>
            {
                loading
                    ? <Loader />
                    : notes.length
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
                !loading && total
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