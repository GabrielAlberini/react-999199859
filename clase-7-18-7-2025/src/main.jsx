import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router/Router'
import "./index.css"
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </StrictMode>,
)
