import React, { useContext, useEffect, useState } from 'react'
import { CreateNote } from './components/CreateNote'
import { NoteList } from './components/NoteList'
import { Layout } from './components/layout/Layout'
import { Modal } from './components/Modal'
import 'antd/dist/antd.min.css'
import './App.css'

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <Layout>
      <CreateNote />
      <NoteList loading={loading} />

      <Modal />
    </Layout>
  )
}

export default App
