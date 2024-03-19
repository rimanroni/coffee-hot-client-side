import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Banner from './components/Banner'
import AddCoffee from './components/AddCoffee'
import Detils from './components/Detils'
import Update from './components/Update'
import SingUp from './components/Auth/SingUp'
import LogIn from './components/Auth/LogIn'
import Context from './components/Context'
import Users from './components/Auth/Users'

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
   }, 
   {
    path:'/singup',
    element:<SingUp/>
   },
   {
    path:'/login',
    element: <LogIn/>,
    }, 
    {
      path:"/users", 
      element: <Users/>,
      loader : () =>fetch('http://localhost:5000/users')
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Context>
    <RouterProvider router={router}/>
   </Context>
  </React.StrictMode>,
)
