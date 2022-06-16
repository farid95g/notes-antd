import React, { useContext, useEffect, useState } from 'react'
import { CreateNote } from './components/Note/CreateNote'
import { NoteList } from './components/Note/NoteList'
import { Layout } from './components/layout'
import { Modal } from './components/common/Modal/Modal'
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
