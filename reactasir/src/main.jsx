import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './PokeApi/App'
// import Web from './paginaWeb/Web'
// import App from './App'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <Web /> */}
    {/* <App/> */}
  </StrictMode>,
)
