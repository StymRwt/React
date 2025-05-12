import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import { Home } from './components/Home/Home.jsx'
import { About } from './components/Home/About/About.jsx'
import { ContactUs } from './components/ContactUs/ContactUs.jsx'
import { Github, gitHubInfo } from './components/Github/Github.jsx'




const router=createBrowserRouter([
  {
  path: "/",
  element:<App/>,
  children :[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<ContactUs/>
    },
    {
      loader:gitHubInfo,
      path:"github",
      element:<Github/>
    },
    

  ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
