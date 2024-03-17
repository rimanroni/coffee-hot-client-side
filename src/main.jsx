import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Banner from './components/Banner'
import AddCoffee from './components/AddCoffee'
import Detils from './components/Detils'
import Update from './components/Update'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>, 
    loader : ()=> fetch('http://localhost:5000/coffee'),
    children:[
      {
        path:'/',
        element:<Banner/>
      }
    ]
  }, 
  {
    path:"/addCoffee",  
    element:<AddCoffee/>
  },
  {
    path:'/detils/:id',
    element:<Detils/> ,
    loader: ({params}) =>fetch(`http://localhost:5000/coffee/${params.id}`)
   },
   {
    path:"/update/:id", 
    element:<Update/>, 
    loader: ({params}) =>fetch(`http://localhost:5000/coffee/${params.id}`)
   }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
