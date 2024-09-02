import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Profile from './components/Profile'
// import { Practice } from './Practice'

import {App} from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   {/* <Practice/> */}
   {/* <Profile/> */}

  </StrictMode>,
)
