// import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Components/MainLayout/MainLayout.jsx'
import Home from './Components/Home/Home.jsx'
import Poem from './Components/Poem/Poem.jsx'
import Photo from './Components/Photo/Photo.jsx'
import Note from './Components/Note/Note.jsx'
import Chat from './Components/Chat/Chat.jsx'
import ErrorPage from './Components/Error/Error.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/photo",
        element: <Photo></Photo>
      },
      {
        path:"/poem",
        element: <Poem></Poem>
      },
      {
        path:"/note",
        element: <Note></Note>
      },
      {
        path:"/chat",
        element: <Chat></Chat>
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
