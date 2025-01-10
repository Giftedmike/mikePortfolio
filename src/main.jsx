import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Experience from './Components/Experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Experience />
  </StrictMode>,
)
