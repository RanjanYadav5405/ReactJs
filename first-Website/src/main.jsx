import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { EventProps } from './components/EventProps.jsx'
// import { EventPropagation } from './components/EventPropagation.jsx'

import { State } from './components/hooks/State.jsx'
// import Profile from './components/Profile'
// import { Practice } from './Practice'

// import {App} from './App.jsx'

// import { EventHandling } from './components/EventHandling.jsx'

// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   {/* <Practice/> */}
   {/* <Profile/> */}

   {/* <EventHandling/> */}
   {/* <EventProps/> */}

   {/* <EventPropagation/> */}

   <State/>


  </StrictMode>,
)
