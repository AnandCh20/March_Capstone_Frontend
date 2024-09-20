import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render( 
  // It is creating a root react element inside the root of a whole html page
  <StrictMode>
    <App />
  </StrictMode>,
)

// What is vite ?
// Its a tool enables you to run a bunch of frontend framework

// BrowserRouter is HOC which takes another component 
