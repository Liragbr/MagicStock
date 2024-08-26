import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './componets/login.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
