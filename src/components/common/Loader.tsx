import { Space, Spin } from 'antd'
import React from 'react'

export const Loader: React.FC = () => (
  <Space size="middle" style={{ margin: '1rem auto 0 auto' }}>
    <Spin size="large" />
  </Space>
)