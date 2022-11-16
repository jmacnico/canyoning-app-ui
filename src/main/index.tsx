import React from 'react'
import { createRoot } from 'react-dom/client'
import Login from '@/presentation/pages/login/Login'

const element = document.getElementById('main')
const root = createRoot(element)
root.render(<Login />)
