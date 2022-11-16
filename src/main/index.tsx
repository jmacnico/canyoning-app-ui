import React from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from '@/presentation/components'

const element = document.getElementById('main')
const root = createRoot(element)
root.render(<Router />)
