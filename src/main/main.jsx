import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import '../components/Header/header.css'
import '../components/Footer/footer.css'
import '../components/DefaultMain/default.css'
import '../components/Main/main.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
