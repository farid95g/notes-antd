import React, { useContext, useEffect, useState } from 'react'
import { CreateNote } from './components/CreateNote'
import { NoteList } from './components/NoteList'
import { NotesContext } from './context/NotesContext/NoteContext'
import { AppLayout } from './components/layout/AppLayout'
import 'antd/dist/antd.min.css'
import './App.css'

const App: React.FC = () => {
  const notes = useContext(NotesContext)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  })

  const onFinish = (values: any) => {
    console.log('Success:', values)
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
