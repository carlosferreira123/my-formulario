import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Global from './styles/Global.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Global/>
  </StrictMode>,
)