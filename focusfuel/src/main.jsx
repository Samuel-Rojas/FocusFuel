import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FocusFuel from './FocusFuel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FocusFuel />
  </StrictMode>,
)
