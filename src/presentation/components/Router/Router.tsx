import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { StylesContainer } from '@/presentation/styles'

const Router: React.FC = () => {
  return (
    <StylesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes >
      </BrowserRouter>
    </StylesContainer>
  )
}

export default Router
