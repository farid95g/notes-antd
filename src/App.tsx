import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CreateNote } from './components/CreateNote'
import { NoteList } from './components/NoteList'
import { NotesContext } from './context/NotesContext/NotesContext'
import { AppLayout } from './components/layout/AppLayout'
import 'antd/dist/antd.min.css'
import './App.css'

const App: React.FC = () => {
  const { notes, addNote } = useContext(NotesContext)!
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, [])

  const onFinish = (values: { title: string, content: string }) => {
    addNote({
      id: uuidv4(),
      title: values.title,
      content: values.content
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <AppLayout>
      <CreateNote onFinish={onFinish} onFinishFailed={onFinishFailed} />
      <NoteList notes={notes} loading={loading} />
    </AppLayout>
  )
}

export default App
