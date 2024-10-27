import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div class="bg-white min-h-screen">
    <App />
    <Analytics />
    </div>
  </StrictMode>,
)
